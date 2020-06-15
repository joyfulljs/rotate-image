# rotate-image

rotate image each time by 90 degree.

# installation

`npm install @joyfulljs/rotate-image`

# usage

```jsx
import imageRotate from '@joyfulljs/rotate-image';

// { ... omitted .... }

<img ref={imgRef} src="...." />;

var dataUrl = roteteImage(imgRef.current);
imgRef.current.src = dataUrl;
```

# api

`roateImage(img: HTMLImageElement, options: { quality?: number, mineType?: string }): string`

- `options.quality` default to `1`
- `options.mineType` default to `image/jpeg`

most of times you do not need to provide `options`, in case you need to save rotated image back to server;

# license

MIT
