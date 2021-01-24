import {createAlphabet} from "../src/alphabet";

const G = "000000111110100000101110100010111110";
const A = "000000011100100010111110100010100010";
const M = "000000100010110110101010100010100010";
const E = "000000111100100000111000100000111100";

const O = "000000011100100010100010100010011100";
const V = "000000100010100010100010010100001000";
const R = "000000111100100100111100101000100100";

const map: Map<string, string> = new Map();

map.set("G", G);
map.set("A", A);
map.set("M", M);
map.set("E", E);
map.set("O", O);
map.set("V", V);
map.set("R", R);

export const example = createAlphabet(6, map, "000000".repeat(6));
