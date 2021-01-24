/* eslint-disable no-sync */
import * as crypto from "crypto";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import {BLUE, GREEN, RED, areSameImage, createImage, pngFromImage, savePng, writePxColor} from "../../src/image";

export function randomString(length: number): string {
    return crypto.randomBytes(length / 2).toString("hex");
}

describe("test gd", () => {
    const tmpdir = os.tmpdir();
    const filepath = `${tmpdir}${randomString(16)}.png`;
    const testImage = path.join(__dirname, "sample.png");

    test("test gd", async() => {
        expect(fs.existsSync(filepath)).toBeFalsy();

        const img = await createImage(2, 2);

        writePxColor(img, 0, 0, RED);
        writePxColor(img, 0, 1, GREEN);
        writePxColor(img, 1, 0, BLUE);

        await savePng(pngFromImage(img), filepath);

        expect(fs.existsSync(filepath)).toBeTruthy();
        fs.unlinkSync(filepath);

        const result = await areSameImage(testImage, img);

        expect(result).toBeTruthy();
    });
});
