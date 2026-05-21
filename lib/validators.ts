import { z } from "zod";

export const phoneSchema = z.string().regex(/^\+[1-9]\d{6,14}$/, "Invalid phone format");
export const passwordSchema = z.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/);
export const signupSchema = z.object({ phone: phoneSchema, password: passwordSchema, confirmPassword: z.string() }).refine((v)=>v.password===v.confirmPassword,{message:"Passwords must match",path:["confirmPassword"]});
