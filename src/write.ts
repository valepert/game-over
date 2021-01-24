import {Alphabet, getPoints} from "./alphabet";
import {BLACK, createImage, imageFromPrt, pngFromImage, savePng, scaleImage, writePxColor} from "./image";
import {Point} from "./point";

export async function createLetter(data: Array<Point>, size: number): Promise<string> {

    const img = await createImage(size, size);

    for (const index in data) {
        writePxColor(img, data[index].x, data[index].y, BLACK);
    }

    return pngFromImage(img);
}

export async function writeText(alphabet: Alphabet, text: string, scale?: number): Promise<string> {
    const factor = scale ? scale : 16;
    const {size} = alphabet;
    const width = size * text.length;
    const height = size;

    const img = await createImage(width, height);

    for (let i = 0; i < text.length; i++) {
        const c = await createLetter(getPoints(alphabet, text[i]), size);
        const cimage = await imageFromPrt(c);

        cimage.copyResized(img, size * i, 0, 0, 0, size, size, size, size);
        cimage.destroy();
    }

    const final = await scaleImage(img, width, height, width * factor, height * factor);

    return pngFromImage(final);
}

export async function save(data: string, filePath: string): Promise<void> {
    await savePng(data, filePath);
}
