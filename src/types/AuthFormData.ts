import { z } from "zod";

export const AuthFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type AuthFormData = z.infer<typeof AuthFormSchema>;
