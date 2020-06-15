export default function roateImage(img: HTMLImageElement, options: IOption): string;
export interface IOption {
    /**
     * image quality. default to `1`
     */
    quality?: number;
    /**
     * MINE type for dataurl. default to `image/jpeg`
     */
    mineType?: string;
}
