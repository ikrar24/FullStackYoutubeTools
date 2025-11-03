import express from "express";
import SignupController from "../controllers/SignupController.js";
import LoginController from "../controllers/LoginController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", SignupController);
router.post("/login", LoginController);

// Protected route example
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({ message: "User data", user: req.user });
});

export default router;
