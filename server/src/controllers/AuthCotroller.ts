import AsyncHandler from "../utils/AsyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const RegisterRestaurantAdmin = AsyncHandler(async (req, res) => {

})