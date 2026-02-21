import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type RegisterDTO = z.infer<typeof registerSchema>;
