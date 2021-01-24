import {coords, validate} from "../../src/coords";

test("coords 4", () => {

    /*
     * 1000 (0, 0)
     * 0001 (3, 1)
     * 0100 (1, 2)
     * 0001 (3, 3)
     */

    const example = "1000000101000001";
    const expected = [{"x": 0, "y": 0}, {"x": 3, "y": 1}, {"x": 1, "y": 2}, {"x": 3, "y": 3}];

    expect(validate(example, 4)).toBeTruthy();

    const result = coords(example, 4);

    expect(result).toEqual(expected);
});
