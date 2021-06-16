const reverseString = require("./reversestring");

describe("Reverse String testing", () => {
  //test the function exists
  test("reverseString function exists", () => {
    expect(reverseString).toBeDefined;
  });

  test("String reverses", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  test('Case insenstive string reverses', () => {
    expect(reverseString('Hello')).toBe('olleh')
  })
});
