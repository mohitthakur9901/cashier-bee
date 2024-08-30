"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = require("../middlewares/multer");
const AuthCotroller_1 = require("../controllers/AuthCotroller");
const router = express_1.default.Router();
router.post('/signup', multer_1.upload.single('profileImg'), AuthCotroller_1.RegisterRestaurantAdmin);
exports.default = router;
