import { z } from 'zod';

export const RegisterUser = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(3),
    phone: z.string().min(10).max(10)
});

export const LoginUser = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
