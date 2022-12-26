---
title: "HTML tags you may not know about"
metaDesc: "Modern HTML offers many HTML elements to make websites more accessible. In this blogpost I want to share a few lesser known HTML elements."
date: "2022-12-26"
---

Modern HTML offers many HTML elements to make websites more accessible. You may already be using `<header>`, `<main>` and `<footer>` for example. But there are some lesser known HTML elements that can be really usefull to make a website or application just a little bit more accessible. Here are a few of them:

### HTML &lt;time&gt; element

In many applications and websites I have worked on I saw something like the following for dates:

```HTML
<p>Published at: <span class="publishDate">10-10-2022</span></p>
```

The problem with this approach is that screen readers will not know that the string `10-10-2022` is a date. Luckily HTML offers a solution for that with the `<time>` tag. This tag offers a [datetime attribute](https://www.w3schools.com/tags/att_time_datetime.asp) that takes an date or time string as argument. This can be usefull for screen readers and other machines that may read your website.

Example:

```HTML
 <p>I have a date on <time datetime="2022-02-14">Valentines day</time>.</p>
```

This attribute can be used for dates, time, datetime or durations.

### HTML &lt;abbr&gt; element

Organisations love abbriviations but it is not always clear what they mean. The abbr-tag can be handy to tell people what an abbriviation stands for. By default it will be rendered with a dotted underline. When the user hovers over it it will show the title of the abbr-tag.

```HTML
<abbr title="World Health Organization">WHO</abbr>
```

### HTML &lt;dialog&gt; element

In many applications and websites the use of dialogs are really common. But did you know HTML as an element for that? No need to create something custom with divs. Just do this instead:

```HTML
<dialog open>The content of your dialog</dialog>
```

### Add suggestions to an input-field

Recently I found out you can set a list of suggestions to an input-field. If you connect this to a backend API that generates suggestions based on the current input you could use this for search-fields.

An example with hardcoded suggestions:

```HTML
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser">

<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

### HTML &lt;progress&gt; and &lt;meter&gt; element

If you need to show the progress of some background process that is running you do not need to build something custom with divs. Instead you can use the `<progress>`-tag instead.

```HTML
<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
```

For situations where you need a gauge. Like for example current disk-usage, you can use the `<meter>`-tag.

```HTML
<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>
```

### Conclusion

There you go. A few examples of HTML tags you may not knew about but could be usefull in some cases.

There are many more HTML elements so before using a div or span it can be usefull to check the [w3c website](https://www.w3schools.com/tags/default.asp) to see if HTML offers a specific tag.

An HTML page that only uses divs and paragraphs are not as accessible as pages that use all those specific tags. They add meaning to your content. People relying on screenreaders will thank you.
