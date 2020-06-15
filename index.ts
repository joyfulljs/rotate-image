export default function roateImage(img: HTMLImageElement, options: IOption): string {
  const { mineType, quality } = options || {}
  // rotate 90 degree
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalHeight;
  canvas.height = img.naturalWidth;
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const ctx = canvas.getContext("2d");
  ctx.translate(x, y);
  ctx.rotate((90 * Math.PI) / 180);
  ctx.translate(-y, -x);
  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
  return canvas.toDataURL(mineType, quality);
}

export interface IOption {
  /**
   * image quality. default to `1`
   */
  quality?: number;
  /**
   * MINE type for dataurl. default to `image/jpeg`
   */
  mineType?: string
}