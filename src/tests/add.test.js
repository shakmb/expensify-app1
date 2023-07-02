const add = (a, b) => a + b;
const generateGreeting = (name = "anonymous") => `Hello ${name}`;

test("add 2 numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
  // if (result !== 8) {
  //   throw new Error(`incorrect result, got ${result} and expected 7`);
  // }
});

test("should generate greeting for tom", () => {
  const result = generateGreeting("tom");

  expect(result).toBe("Hello tom");
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello anonymous");
});
