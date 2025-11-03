import userSchema from "../DB/Schema/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

// ✅ User Signup Controller
const SignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Step 1: Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Step 2: Check if user exists
    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Step 3: Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Step 4: Create user
    const user = await userSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    // Step 5: Create JWT Token
    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET is missing in .env file");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Step 6: Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Step 7: Success Response
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token, // (optional - useful for frontend)
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default SignupController;
