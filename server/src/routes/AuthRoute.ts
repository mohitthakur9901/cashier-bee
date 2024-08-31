import express from 'express';
import { upload } from '../middlewares/multer';
import { RegisterRestaurantAdmin , VerifyRestaurantAdminOtp , LoginRestaurantAdmin } from '../controllers/AuthCotroller';


const router = express.Router();


router.post('/signup' , upload.single('profileImg') , RegisterRestaurantAdmin)
router.post('/verify-otp', VerifyRestaurantAdminOtp)
router.post('/login', LoginRestaurantAdmin)












export default router