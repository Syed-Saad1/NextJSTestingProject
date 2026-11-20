import { test, expect } from "vitest";
import { getUser } from "./user";

test("should return correct user", async () => {
  const userId = 1;
  const result = await getUser(userId);
  expect(result.id).toBe(1);
  expect(result.name).toBe("Ali");
});

test("should return user", async () => {
  await expect(getUser(1)).resolves.toEqual({
    id: 1,
    name: "Ali",
    email: "ali@example.com",
  });
});
// test("should reject invalid user ID", async () => {
//   const id = -3;

//   await expect(getUser(id)).rejects.toThrow("Invalid user ID");
// });
