import AsyncHandler from "../utils/AsyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { prisma } from "../config/db";



export const CreateRetaurant = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const { restaurantName, city, state, country, pinCode, street } = req.body;

    // Validate input
    if (!restaurantName || !city || !state || !country || !pinCode || !street) {
        return res.status(400).json(new ApiError(400, "Missing required fields"));
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!user) {
            return res.status(404).json(new ApiError(404, "User not found"));
        }

        // Create address
        const createdAddress = await prisma.address.create({
            data: {
                state,
                city,
                country,
                pinCode: Number(pinCode),
                street,
            }
        });

        // Create restaurant
        const restaurant = await prisma.restaurant.create({
            data: {
                name: restaurantName,
                addressId: createdAddress.id,
                createdBy: user.username,
                // Prisma will automatically set createdAt and modifiedAt
                modifiedBy: user.username,

            }
        });
        await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                restaurantId: restaurant.id
            }
        });

        return res.status(201).json(new ApiResponse(201, restaurant, "Restaurant Created Successfully"));
    } catch (error) {
        console.error('Error While Creating Restaurant:', error);
        return res.status(500).json(new ApiError(500, "Internal server error"));
    }
});


export const GetRestaurant = AsyncHandler(async (req, res) => {
    const { id } = req.params;  
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
    
        const restaurant = await prisma.restaurant.findFirst({
            where: {
                id : Number(user?.restaurantId)
                
            }
        });
        const address = await prisma.address.findFirst({
            where: {
                id: Number(restaurant?.addressId)
            }
        });
        
        if (!restaurant) {
            return res.status(404).json(new ApiError(404 , "Restaurant not found"));
        }
           
        return res.status(200).json(new ApiResponse(200, {restaurant , address}, "Restaurant Fetched Successfully"));

    } catch (error) {
        console.error('Error While Getting Restaurant:', error);
        return res.status(500).json(new ApiError(500, "Internal server error"));
    }
});


export const UpdateRetaurant = AsyncHandler(async (req, res) => {

})

export const DeleteRetaurant = AsyncHandler(async (req, res) => {
    // restaurant id 
    const { id } = req.params;
    try {
        const restaurant = await prisma.restaurant.update({
            where: {
                id: Number(id)
            },
            data: {
                isDeleted: true
            }
        });

        return res.status(200).json(new ApiResponse(200, "Restaurant Deleted Successfully"))

    } catch (error) {
        console.error('Error While Deleting Restaurant:', error);
        return res.status(500).json(new ApiError(500, "Internal server error"));

    }


})