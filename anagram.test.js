const anagram = require("./anagram.js");

describe("Anagram tests", () => {
  test("Anagram function exists", () => {
    expect(anagram).toBeDefined();
  });

  test("Cinema is an anagram of iceman", () => {
    expect(anagram("cinema", "iceman")).toBeTruthy();
  });

  test("Dormitory is an anagram of dirtyroom", () => {
    expect(anagram("dormitory", "dirty room")).toBeTruthy();
  });

  test("Hello is NOT an anagram of aloha", () => {
    expect(anagram("Hello", "aloha")).toBeFalsy();
  });
});
