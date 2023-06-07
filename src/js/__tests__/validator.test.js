import { isValidCard } from "../validator";

test("card number should be true", () => {
  const result = isValidCard(6011765978085639);
  expect(result).toBeTruthy();
});

test("card number should be false", () => {
  const result = isValidCard(4024007177115700);
  expect(result).toBeFalsy();
});
