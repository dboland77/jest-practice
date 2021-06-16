const functions = require("./functions");

//positive test
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//toBe looks for a specific primitive value
//negative test
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//Null test
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});


