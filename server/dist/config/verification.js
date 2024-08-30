"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateAndSendEmailOtp = exports.GenerateAndSendOtp = void 0;
const twilio_1 = require("twilio");
const nodemailer_1 = require("nodemailer");
const redis_1 = require("./redis");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: '../.env'
});
const accountSid = process.env.TWILLIO_AUTH__ID;
const authToken = process.env.TWILLIO_AUTH_TOKEN;
const client = new twilio_1.Twilio(accountSid, authToken);
const GenerateAndSendOtp = (phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.GenerateAndSendOtp = GenerateAndSendOtp;
const GenerateAndSendEmailOtp = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const otp = Math.floor(100000 + Math.random() * 900000);
    try {
        const transporter = (0, nodemailer_1.createTransport)({
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
        redis_1.redisClient.setEx(email, 60 * 5, otp.toString());
        yield transporter.sendMail(mailOptions);
    }
    catch (error) {
        console.log(error);
    }
});
exports.GenerateAndSendEmailOtp = GenerateAndSendEmailOtp;
