import AsyncHandler from "../utils/AsyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { PrismaClient } from '@prisma/client'
import { generateAndSendEmailOtp, validateEmailOtp } from "../config/verification";
import { RegisterUser, LoginUser } from "../lib/AuthValidation";
import { uploadOnCloudinary } from "../utils/cloudnary";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient()

const generateJwtToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: '10d' });
};

export const RegisterRestaurantAdmin = AsyncHandler(async (req, res) => {

    const { email, password, username, phone } = RegisterUser.parse(req.body);
    const profileImg = req.file?.path;

    try {

        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            throw new ApiError(400, "User already exists");
        }

        if (!profileImg) {
            throw new ApiError(400, "Profile image is required");
        }

        const profileImgUrl = await uploadOnCloudinary(profileImg)

        if (!profileImgUrl) {
            throw new ApiError(400, "Error uploading profile image");
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
                username: username,
                phone: phone,
                profileImg: profileImgUrl.url || "",
                createdBy: username,
                modifiedBy: username,
                UserRole: "RESTAURANTADMIN"
            }
        });

        await generateAndSendEmailOtp(email);

        return res.status(201).json(new ApiResponse(201, "User registered successfully"));
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json(new ApiResponse(500, "Internal server error"));

    }

});



export const VerifyRestaurantAdminOtp = AsyncHandler(async (req, res) => {
    const { email, otp } = req.body
    try {
        if (!otp || !email) {
            throw new ApiError(400, "Enter Valid Inputs");
        }
        const isVerified = await validateEmailOtp(email, otp)
        console.log("from controller : " + isVerified);


        if (!isVerified) {
            throw new ApiError(400, "Invalid Otp");
        }
        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                isVerified: true
            }
        })
        return res.status(200).json(new ApiResponse(200, "Otp Verified"));
    } catch (error) {
        console.error('Error verifying otp:', error);
        return res.status(500).json(new ApiResponse(500, "Internal server error"));

    }
});



export const LoginRestaurantAdmin = AsyncHandler(async (req, res) => {
    const { email, password } = LoginUser.parse(req.body);
    try {
        if (!email || !password) {
            throw new ApiError(400, "Enter Valid Inputs");
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new ApiError(400, "Invalid Credentials");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new ApiError(400, "Invalid Credentials");
        }
        const token = generateJwtToken(user.id.toString());

        // remove password from user object before sending to user
        const { password: pass, ...userDetail } = user

        res
        .cookie('Authorization', token, 
            { httpOnly: true, secure: true, sameSite: 'none' }
        )
        .json(new ApiResponse(200, userDetail, "Login successful"))


    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json(new ApiResponse(500, "Internal server error"));

    }
});



export const OAuthLogin = AsyncHandler(async (req, res) => {
    const password = Math.floor(100000 + Math.random() * 900000);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

})

