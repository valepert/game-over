/* eslint-disable @typescript-eslint/no-explicit-any */
import gd from "node-gd";

export const BLACK = gd.trueColor(0, 0, 0);
export const WHITE = gd.trueColor(255, 255, 255);
export const RED = gd.trueColor(255, 0, 0);
export const GREEN = gd.trueColor(0, 255, 0);
export const BLUE = gd.trueColor(0, 0, 255);

export async function createImage(x: number, y: number): Promise<gd.Image> {
    const img = await gd.createTrueColor(x, y);

    img.filledRectangle(0, 0, x, y, WHITE);

    return img;
}

export async function scaleImage(img: gd.Image, sw: number, sh: number, dw: number, dh: number): Promise<gd.Image> {
    const scale = await gd.createTrueColor(dw, dh);

    img.copyResized(scale, 0, 0, 0, 0, dw, dh, sw, sh);

    return scale;
}

export function writePxColor(img: gd.Image, x: number, y: number, color: number): gd.Image {
    img.setPixel(x, y, color);

    return img;
}

export async function imageFromPrt(ptrData: string): Promise<gd.Image> {
    const img = await gd.createFromPngPtr(ptrData);

    return img;
}

export function pngFromImage(img: gd.Image): string {
    // eslint-disable-next-line no-extra-parens
    const ptr: string = (img as any).pngPtr();

    return ptr;
}

export async function savePng(ptrData: string, filepath: string): Promise<void> {
    const png = gd.createFromPngPtr(ptrData);

    // eslint-disable-next-line no-extra-parens
    await (png as any).file(filepath);
}

export async function areSameImage(filePath: string, img: gd.Image): Promise<boolean> {
    const fileImg = await gd.createFromPng(filePath);

    const result = img.compare(fileImg);

    fileImg.destroy();

    return result === 0;
}
