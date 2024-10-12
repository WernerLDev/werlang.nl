---
title: "Introduction to CSS view transitions"
author: "Werner"
tags: []
publishDate: 2024-10-12
---

CSS has a new cool feature. It is called [view transitions](https://drafts.csswg.org/css-view-transitions/) and it can be used to easily animate transitions between pages or DOM updates.

Currently it is supported in all browsers except Firefox.

The idea is really simple. You can trigger a view transition with JavaScript as following:

```typescript
document.startViewTransition(() => {
  // update DOM here
});
```

And this will happen:

1. A snapshot of the current view is made
2. The function that updates the DOM is called
3. A second snapshot of the updated view is made

After this you can animate the old and new view using CSS. For this you have to apply CSS animations to the pseudo-selectors `::view-transition-new` and `::view-transition-old`.

If you would want to create an animation when switching between dark and light mode you could write something as following:

```css
::view-transition-group(root) {
  animation-duration: 1.25s;
}

::view-transition-new(root) {
  animation-name: fadeIn;
}

[data-bs-theme="dark"]::view-transition-old(root) {
  animation: none;
}

[data-bs-theme="dark"]::view-transition-new(root) {
  animation-name: fadeIn;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

Of course this is just a very basic example. And in the case you want to animate transitions between pages in a MPA you do not need any JavaScript. Just the CSS will be enough to animate the old and new page in/out of the screen.
