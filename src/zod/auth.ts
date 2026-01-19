import { z } from "zod";
import { USER_ROLES } from "../config/enum.js";

export const signupSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.email("invalid email format"),
  password: z.string().min(6, "password must be at least 6 characters"),
  role: z.enum(USER_ROLES)
});





