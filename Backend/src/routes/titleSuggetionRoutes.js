// src/routes/generetedDescrptionRoute.js
import express from "express";
import titleSuggetionController from "../controllers/titleSuggetionController.js";

const router = express.Router();

// ✅ Route: POST http://localhost:4000/api/titleSuggetion
router.post("/titleSuggetion", titleSuggetionController);

export default router;
