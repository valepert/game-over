// Cfr. import {Point} from "node-gd"

// Redefinition of Point with color
export type Point = {
    x: number;
    y: number;
    color?: number;
};

export function createPoint(x: number, y: number): Point {
    return {x, y};
}
