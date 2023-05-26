import { whatCardIssuer } from "../whatCardIssuer";

test("card name should be 'visa'", () => {
  const result = whatCardIssuer(4532781894610223);
  expect(result).toBe("visa");
});
test("card name should be 'master-card'", () => {
  const result = whatCardIssuer(5525431951214685);
  expect(result).toBe("master-card");
});
