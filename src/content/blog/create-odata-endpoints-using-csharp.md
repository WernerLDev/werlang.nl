---
title: "Create Odata endpoints using C#"
author: "Werner"
tags: ["Odata"]
publishDate: 2025-01-27
---

I have worked on many different web applications throughout my career and I always spent a lot of time writing custom endpoints. For each new feature in the frontend we would create an endpoint that would return a specific data-set for that feature.

This is not only very boring development work but also extremly time consuming. Luckily there are good alternatives. GraphQL and Odata are 2 standards that allow you to request specific data straight from the frontend. The result is a less opiniated and simpler backend API.

### Difference between GraphQL and Odata
GraphQL is a query language that replaces Rest while Odata is a layer on top of Rest. With both you can ask exactly what you want and nothing more. Also data from nested relations can be fetched with both standards.

Odata supports filtering, sorting and pagination out of the box. With GraphQL you would have to implement that manually for each type you define in your API. 

### Odata in C# is simple
C# and .NET have built-in support for Odata which makes it extremly easy to implement. All we have to do is define our data model using the `OdataConventionModelBuilder` class. Then we can use the `OdataController` base-class for our controllers.

#### Step 1: Create EDM Model
To make the odata endpoint work we need to add our entities to an EdmModel. To make your odata endpoints available under the path `/odata` add the following to program.cs:

```csharp
var modelBuilder = new ODataConventionModelBuilder();
modelBuilder.EntitySet<TVShow>("TVShows");
modelBuilder.EntitySet<TVShowEpisode>("TVShowEpisodes");

builder.Services.AddControllers().AddOData(
    options => options.Select().Filter().OrderBy().Expand().Count().SetMaxTop(100).AddRouteComponents(
        "odata",
        modelBuilder.GetEdmModel()));
```

#### Step 2: Create OdataControllers
Last thing is to create the OdataControllers and you are done. Important is that the name of the controller should match the name of the EntitySet in the EdmModel from step 1. If your EntitySet is called `TVShows` then your controller should be `TVShowsController`.  

The controller should extend the base-class `OdataController`. Then you can add the `[EnableQuery]` annotation to allow Odata-queries to your endpoints. The function itself should return an `IQueryable` object.

Example controller:

```csharp
public class TVShowsController(repo: TVShowsRepository) : ODataController
{
  [EnableQuery]
  public ActionResult<IEnumerable<TVShow>> Get()
  {
    return Ok(repo.All());
  }

  
  [EnableQuery]
  public SingleResult<TVShow> Get([FromODataUri] int key)
  {
    var result = repo.FindById(key);
    return SingleResult.Create(result);
  }

  [HttpPost]
  public async Task<ActionResult<TVShow>> Post([FromBody] TVShowDto entity)
  {
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }
    return Created(await repo.Create(entity));
  }

  [HttpPatch]
  public async Task<ActionResult<TVShow>> Patch([FromODataUri] int key, [FromBody] Delta<TVShow> entity)
  {
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }
    var dbEntity = repo.FindById(key).FirstOrDefault();
    if (dbEntity == null)
    {
      return NotFound();
    }

    return Ok(await repo.Patch(entity, dbEntity));
  }

  [HttpDelete]
  public async Task<IActionResult> Delete([FromODataUri] int key)
  {
    var dbEntity = repo.FindById(key).FirstOrDefault();
    if (dbEntity != null)
    {
      await repo.Delete(key);
    }

    return NoContent();
  }
}
```

#### Step 3: Test the endpoint

Now you have your EdmModel and Odata controllers it is possible to sent queries like this to the backend:

`http://localhost:5123/odata/TVShows?$select=id,name&$expand=TVShowEpisodes&$top=10`

More details about the odata-standard can be found on [odata.org](https://www.odata.org/)