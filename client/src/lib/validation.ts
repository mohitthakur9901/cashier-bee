import {z} from 'zod';

export const UserSignUpValidate = z.object({
    username: z.string().min(3).max(32),
    email: z.string().email(),
    password: z.string().min(6).max(32),
    phone : z.string().min(10).max(10)
});

export const UserOtpVerify = z.object({
    email : z.string().email(),
    otp: z.string().min(6).max(6)
})