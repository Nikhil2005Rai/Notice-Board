import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { createNotice, getAllNotices } from "../controllers/notice.controllers.js";
import multer from "multer";

const router = Router();
const upload = multer();

router.route("/create-notice").post(verifyJWT, upload.none(), createNotice);
router.route("/all").get(verifyJWT, upload.none(), getAllNotices);

export default router;
