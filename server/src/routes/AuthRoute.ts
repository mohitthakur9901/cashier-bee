import express from 'express';
import { upload } from '../middlewares/multer';
import { RegisterRestaurantAdmin , VerifyRestaurantAdminOtp } from '../controllers/AuthCotroller';

const router = express.Router();


router.post('/signup' , upload.single('profileImg') , RegisterRestaurantAdmin)
router.post('/verify-otp', VerifyRestaurantAdminOtp)














export default router