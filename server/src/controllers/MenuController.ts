import AsyncHandler from "../utils/AsyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from '../config/db'
import { uploadOnCloudinary } from "../utils/cloudnary";



export const createMenu = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, price, mealCategory, isAvailable } = req.body;
  const foodImageLink = req.file?.path;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    if (!name || !description || !price || !mealCategory) {
      throw new ApiError(400, "All fields are required");
    }

    if (isNaN(parseFloat(price))) {
      throw new ApiError(400, "Invalid price format");
    }

    if (typeof isAvailable !== "boolean") {
      throw new ApiError(400, "isAvailable must be a boolean");
    }

    if (!foodImageLink) {
      throw new ApiError(400, "Food image is required");
    }

    const foodImage = await uploadOnCloudinary(foodImageLink);
    if (!foodImage) {
      throw new ApiError(400, "Error uploading food image");
    }

    const newMenuItem = await prisma.menuItem.create({
      data: {
        foodImageLink: foodImage.url,
        name,
        description,
        price: parseFloat(price),
        mealCategory,
        isAvailable,
        restaurantId: Number(user.restaurantId),
        createdBy: user.username,
        modifiedBy: user.username,
      },
    });

    return res.status(201).json(new ApiResponse(201, newMenuItem, "Menu item created successfully"));

  } catch (error) {
    console.error('Error Creating Menu :', error);
    return res.status(500).json(new ApiResponse(500, "Internal server error"));
  }
});


export const getMenu = AsyncHandler(async (req, res) => {

});


export const UpdateMenu = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, price, mealCategory } = req.body;

});


export const deleteMenu = AsyncHandler(async (req, res) => {

});



// isAvaiable Update Controller Controller 