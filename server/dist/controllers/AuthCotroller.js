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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRestaurantAdmin = void 0;
const AsyncHandler_1 = __importDefault(require("../utils/AsyncHandler"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const client_1 = require("@prisma/client");
const verification_1 = require("../config/verification");
const AuthValidation_1 = require("../lib/AuthValidation");
const cloudnary_1 = require("../utils/cloudnary");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
exports.RegisterRestaurantAdmin = (0, AsyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password, username, phone } = AuthValidation_1.RegisterUser.parse(req.body);
    const profileImg = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    try {
        const existingUser = yield prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (existingUser) {
            throw new ApiError_1.default(400, "User already exists");
        }
        if (!profileImg) {
            throw new ApiError_1.default(400, "Profile image is required");
        }
        const profileImgUrl = yield (0, cloudnary_1.uploadOnCloudinary)(profileImg);
        if (!profileImgUrl) {
            throw new ApiError_1.default(400, "Error uploading profile image");
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = yield prisma.user.create({
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
        (0, verification_1.GenerateAndSendEmailOtp)(email);
        return res.status(201).json(new ApiResponse_1.default(201, "User registered successfully"));
    }
    catch (error) {
        throw new ApiError_1.default(500, "Internal server error");
    }
}));
