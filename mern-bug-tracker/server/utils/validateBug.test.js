const validateBug = require('./validateBug');
test("Bug validation should fail if title is missing", () => {
  expect(validateBug({ description: "Bug here" })).toBeFalsy();
});
