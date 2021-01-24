import {Point} from "./point";
import {coords} from "./coords";

export type Alphabet = {
    size: number;
    symbols: Map<string, string>,
    fallback: string
}

export function createAlphabet(size: number, symbols: Map<string, string>, fallback: string): Alphabet {
    return {size, symbols, fallback};
}

export function getSymbol(alphabet: Alphabet, symbol: string): string {
    const sym = alphabet.symbols.get(symbol);

    return sym ? sym : alphabet.fallback;
}

export function getPoints(alphabet: Alphabet, symbol: string): Point[] {
    return coords(getSymbol(alphabet, symbol), alphabet.size);
}
