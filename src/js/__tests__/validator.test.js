import { isValidCard } from "../validator";

test("card number should be true", () => {
  const result = isValidCard(4532781894610223);
  expect(result).toBe(true);
});

test("card number should be false", () => {
  const result = isValidCard(4864337679299943);
  expect(result).toBe(false);
});
