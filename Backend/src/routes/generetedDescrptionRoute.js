// src/routes/generetedDescrptionRoute.js
import express from "express";
import descriptionGeneretorRouter from "../controllers/desriptionController.js";

const router = express.Router();

// ✅ Route: POST http://localhost:4000/api/descriptionGeneretor
router.post("/descriptionGeneretor", descriptionGeneretorRouter);

export default router;
