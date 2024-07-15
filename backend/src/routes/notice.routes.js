import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { createNotice } from "../controllers/notice.controllers.js";
import multer from "multer";

const router = Router();
const upload = multer();

router.route("/create-notice").post(verifyJWT, upload.none(), createNotice);

export default router;
