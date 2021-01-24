import {Point, createPoint} from "./point";

export function validate(data: string, side: number): boolean {
    return side === Math.floor(data.length / side);
}

export function coords(data: string, side: number): Point[] {
    const array: Point[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data.charAt(i) === "1") {
            array.push(createPoint(i % side, Math.floor(i / side)));
        }
    }

    return array;
}
