import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import multer from "multer";


const router = Router();
const upload = multer()

router.route("/register").post(upload.none(),registerUser);

export default router;
