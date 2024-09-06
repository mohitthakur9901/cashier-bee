import { createTransport } from 'nodemailer';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';

config({
    path: '../.env'
});


const prisma = new PrismaClient()


export const generateAndSendEmailOtp = async (email: string) => {
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP is ${otp}`
        };
        const salt = await bcrypt.genSalt(10);
        const hashedOtp = await bcrypt.hash(otp.toString(), salt);
        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                otp: hashedOtp
            }
        })


        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}`);
    } catch (error) {
        console.error('Error generating or sending OTP:', error);
    }
};


export const validateEmailOtp = async (email: string, mailedOtp: string) => {
    console.log(`Email: ${email}, Provided OTP: ${mailedOtp}`);
    try {
        const user = await prisma.user.findFirst({
            where: { email }
        });

        if (!user?.otp) {
            console.log('User not found or OTP is missing');
            return false;
        }

        console.log(`Stored Hashed OTP: ${user.otp}`);
        
        const isOtpValid = await bcrypt.compare(mailedOtp, user.otp);
        console.log(`OTP Validation Result: ${isOtpValid}`);
        
        if (isOtpValid) {
            await prisma.user.update({
                where: { email },
                data: { isVerified: true }
            });
            return true;
        } else {
            console.log('OTP does not match');
            return false;
        }
    } catch (error) {
        console.error('Error validating OTP:', error);
        return false;
    }
};
