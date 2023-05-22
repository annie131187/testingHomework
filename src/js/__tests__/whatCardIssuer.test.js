import { whatCardIssuer } from "../whatCardIssuer";

test("testing", () => {
  const result = whatCardIssuer(4532781894610223);
  expect(result).toBe("visa");
});
