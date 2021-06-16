const chunkedArray = require("./chunk");

describe("Chunk function tests", () => {
  test("Chunk function exists", () => {
    expect(chunkedArray).toBeDefined();
  });

  test("Chunk an array of 10 values with a length of 2", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunkedArray(numbers, len);

    expect(chunkedArr).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });
});
