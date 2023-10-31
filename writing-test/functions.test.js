const findLargest = require("./function");
test("mathematics behaves as expected", () => {
  expect(2 + 2).toEqual(4);
});

describe("findLargest - exists", () => {
  expect(findLargest).toBeDefined()
});

test("returns a number", () => {
    expect(typeof findLargest).toBe("number")
});

test("returns -1 if no values exist", () => {
    expect(findLargest).toEqual(-1)
});






