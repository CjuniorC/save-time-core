const func = (a,b) => {
  return a+b;
};

test("Test sum", () => {
  expect(func(1,1)).toBe(2);
});