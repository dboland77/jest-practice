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

// Falsy value
test("Should be Falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Object test - use toStrictEqual for === instead of toBe which is ==
test("Check user firstname", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Dave",
    lastName: "Boland",
  });
});

// Less than or equal pass
test("Should be less than or equal to 2000", () => {
  const load1 = 800;
  const load2 = 1000;
  expect(load1 + load2).toBeLessThanOrEqual(2000);
});

// Less than or equal fail
test("Should be less than or equal to 2000", () => {
  const load1 = 1100;
  const load2 = 1000;
  expect(load1 + load2).not.toBeLessThanOrEqual(2000);
});

// Regex - toMatch function
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays - use toContain for checking values
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//Working with async data
// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser(1).then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// async await instead of Promise
test("User fetched name should be Ervin Howell", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser(2).then((data) => {
    expect(data.name).toEqual("Ervin Howell");
  });
});
