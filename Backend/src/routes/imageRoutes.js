import express from "express";
import { generateImage, downloadImage, deleteImage } from "../controllers/imageController.js";

const router = express.Router();

router.post("/generate", generateImage);
router.get("/download/:id", downloadImage);
router.delete("/delete/:id", deleteImage);

export default router;
