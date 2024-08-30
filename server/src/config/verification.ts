import { createTransport } from 'nodemailer';
import { redisClient } from './redis';
import { config } from 'dotenv';

config({
    path: '../.env' 
});



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

        // Store OTP in Redis with a 5-minute expiration
        redisClient.on('connect' , async () => {
            await redisClient.setEx(email, 900, otp.toString());
        })
    
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}`);
    } catch (error) {
        console.error('Error generating or sending OTP:', error);
    }
};

export const validateEmailOtp = async (email: string, mailedOtp: string) => {
    console.log(email, mailedOtp);
    try {
       redisClient.on('connect' , async () => {
            const storedOtp = await redisClient.get(email);
            console.log("from redis" +storedOtp , mailedOtp);
            
            if (storedOtp === null) {
                return false;
            }
            return parseInt(storedOtp) === parseInt(mailedOtp);
        })
    } catch (error) {
        console.error('Error validating OTP:', error);
        return false;
    }
};