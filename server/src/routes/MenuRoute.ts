import express from 'express';
import { upload } from '../middlewares/multer';
import { createMenu } from '../controllers/MenuController';
const router = express.Router();



router.post('/create-menu-item', upload.single('foodImageLink'), createMenu);















export default router