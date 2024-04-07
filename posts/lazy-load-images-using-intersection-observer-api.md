---
title: "Lazy load images using IntersactionObserver API"
metaDesc: "Javascript offers an API that can be used to detect if an element is scrolled into view or not. We can use this API to postpone loading images until user scrolls down"
date: "2023-12-31"
draft: false
---

If you want to lazy load an image or have a fade-in animation when things are scrolled into view you could listen to the scroll-event and do all the calculations yourself. But this is a huge pain in the ass. Since 2018 we can use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) which makes this much easier.

Here is a simple example with React and TypeScript:

```typescript
import { useEffect, useRef, useState } from "react";

export type LazyImageProps = {
  src: string;
  alt: string;
};

export const LazyImage = ({ src, alt }: LazyImageProps) => {
  const imgRef = useRef<HTMLElement | null>(null);
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const onObserve = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowImg(true);
          imgRef.current && observer.unobserve(imgRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(onObserve);
    imgRef.current && observer.observe(imgRef.current);

    return () => observer.disconnect();
  });

  return (
    <img
      ref={(ref) => (imgRef.current = ref)}
      src={showImg ? src : ""}
      alt={alt}
    />
  );
};
```

Here I am setting the src-attribute when the image gets scrolled into view, but you could also set a className that triggers a CSS animation.

Want to trigger it before it is completely scrolled into view, or even right before it becomes visible? Set some options:

```typescript
const options: IntersectionObserverInit = {
  rootMargin: "100px",
  threshold: [0, 0.25, 0.5, 1],
};

// pass the object to the constructor of IntersectionObserver
const observer = new IntersectionObserver(onObserve, options);
```

rootMargin sets a margin of 100px around the image, and with threshold you can make it trigger multiple times. 1 means when the image is 100% visible, 0.5 means only half of the image is visible.
