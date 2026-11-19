import z from "zod";

export const createUserSchema = z.object({
  name: z.string().trim().min(2),
  email: z.email(),
});
