import { expect, test } from "vitest";
import Calculation from "./serverfunction";

test("You're Calculation Correct", () => {
  const Result = Calculation(10, 20);
  expect(Result).toBe(200);
});
