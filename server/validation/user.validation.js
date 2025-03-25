import { z } from "zod";
import UserService from "../services/user.service";

export const signUpSchema = z
  .object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(8, "Password minimum 8 characters."),
    confirmPassword: z.string(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must match!",
    path: ["confirmPassword"],
  })
  .refine(
    async (data) => {
      const isDuplicateEmail = await UserService.getUserByEmail(data.email);
      return isDuplicateEmail ? false : true;
    },
    {
      message: "Email already used!",
      path: ["email"],
    }
  );

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});
