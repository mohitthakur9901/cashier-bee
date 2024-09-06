import verifyToken from "../middlewares/verifyJwt";
import { CreateRetaurant  ,GetRestaurant} from "../controllers/RestaurantConroller";
import express from 'express'


const router =  express.Router();



router.post('/create-restaurant/:id', verifyToken, CreateRetaurant);
router.get('/get-restaurant/:id', verifyToken, GetRestaurant);

router.get('/get-restaurant' , verifyToken , () => {
    console.log("get-restaurant");
});











export default router;