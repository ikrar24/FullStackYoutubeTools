import express from "express";
import downloadDirect  from "../controllers/downloadController.js";

const router = express.Router();

router.post("/from-url", downloadDirect);

export default router;
