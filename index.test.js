const { add } = require("./index");

test("add 1 + 2 equals 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("add 100 + 200 equals 300", () => {
  expect(add(100, 200)).toBe(300);
});

test("add 15 + 25 equals 40", () => {
  expect(add(15, 25)).toBe(40);
});

test("add 1000000 + 2000000 equals 3000000", () => {
  expect(add(1000000, 2000000)).toBe("a is too big");
});
