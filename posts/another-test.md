---
title: "A test blog"
metaDesc: "Lorem `ipsum` dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum tortor ac est placerat porttitor. Vestibulum volutpat est ante, vel faucibus eros placerat non. Integer sed lobortis tellus. Aenean et turpis sit "
date: "2021-09-22"
draft: true
---

Lorem `ipsum` dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum tortor ac est placerat porttitor. Vestibulum volutpat est ante, vel faucibus eros placerat non. Integer sed lobortis tellus. Aenean et turpis sit amet tortor scelerisque consequat. Cras a rhoncus velit, eget tristique quam. Nulla nec dignissim massa. Mauris pretium hendrerit maximus. Donec feugiat nibh nec ex aliquet, eu pharetra ante feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam egestas pharetra lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas pretium pulvinar magna vitae pulvinar. Sed eget velit quam. In elit lectus, fermentum et lobortis eu, sollicitudin sed lectus.

```java
def searchSubtitles(token:String, hash:String, size:Long) : List[Subtitle] = {

  val movieMap = new HashMap[String, Object]
  movieMap.put("sublanguageid", "all")
  movieMap.put("moviehash", hash)
  movieMap.put("moviebytesize", new java.lang.Long(size))

  val params = new java.util.Vector[Any]
  params.add(token)
  params.add(Array[Object](movieMap))

  val result = client.execute("SearchSubtitles", params).asInstanceOf[java.util.HashMap[Any, Any]]
  if(result.get("data") == false) List()
  else {
      val datarows = result.get("data").asInstanceOf[Array[Any]].toList
    val subtitles = datarows.map(x => {
      x match {
        case m : HashMap[Any, Any] => Subtitle(
                          m.get("MovieReleaseName").toString,
                          m.get("LanguageName").toString,
                          m.get("ZipDownloadLink").toString)
      }
    })
    subtitles.sortBy(_.language)
  }
}
```

Cras ut nunc leo. Fusce fringilla tempor viverra. Fusce congue risus ipsum, id consequat nisl dapibus in. Nam sapien turpis, mollis non sapien a, molestie varius dui. Aliquam nibh ex, auctor eu leo non, placerat vestibulum nunc. Donec fermentum placerat leo, in egestas leo sodales sit amet. Ut porta, ligula vel vulputate vehicula, eros ante sollicitudin justo, rhoncus ornare neque neque a leo. Sed sit amet leo sit amet tellus blandit mollis. Aliquam eget magna id tortor venenatis suscipit. Nunc vel nisl efficitur, gravida nisl consequat, vehicula purus.

Vivamus massa tortor, posuere non sem vitae, ultrices ultricies quam. Aenean at interdum massa, sed placerat dui. Sed sit amet porta est. In cursus scelerisque nisi. Aliquam et porta arcu. Nam id rhoncus ante. Ut at lectus at ipsum maximus maximus eu auctor libero. Suspendisse risus dolor, euismod consequat turpis sed, imperdiet fermentum ante. Nullam vel ultricies urna. Pellentesque efficitur felis ac ex facilisis condimentum. Suspendisse ipsum neque, consequat vitae justo nec, egestas volutpat dui. Proin sit amet lorem ut ante posuere convallis. Duis feugiat urna eu mauris convallis ornare.

```javascript
import { format } from "date-fns";

export const FormatDate = (date: Date) => {
  return format(date, "dd LLLL yyyy");
};
```
