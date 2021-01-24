/* eslint-disable no-sync */
import * as fs from "fs";
import * as path from "path";

import {createAlphabet, getSymbol} from "../../src/alphabet";
import {createLetter, save, writeText} from "../../src/write";
import {coords} from "../../src/coords";
import {example} from "../../alphabets/example";

describe("test alphabet", () => {
    const A = "0001";
    const B = "0010";
    const X = "0000";

    test("alphabet", () => {
        const map: Map<string, string> = new Map();

        map.set("A", A);
        map.set("B", B);

        const alphabet = createAlphabet(2, map, X);

        expect(alphabet.size).toEqual(2);
        expect(alphabet.fallback).toEqual(X);

        expect(getSymbol(alphabet, "A")).toEqual(A);
        expect(getSymbol(alphabet, "B")).toEqual(B);
        expect(getSymbol(alphabet, "Z")).toEqual(X);

    });
});

test("create glider", async () => {
    const testImage = path.join(__dirname, "glider.png");

    const glider = "010001111";
    const data = coords(glider, 3);
    const letter = await createLetter(data, 3);

    await save(letter, testImage);
    expect(fs.existsSync(testImage)).toBeTruthy();

    // Comment this for visual check
    fs.unlinkSync(testImage);
});

test("example game over", async() => {
    const testImage = path.join(__dirname, "game_over.png");
    const string = "GAME OVER";

    const text = await writeText(example, string);

    await save(text, testImage);
    expect(fs.existsSync(testImage)).toBeTruthy();

    // Comment this for visual check
    fs.unlinkSync(testImage);
});
