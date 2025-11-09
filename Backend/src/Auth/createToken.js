import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createToken = (req, res) => {
  try {
    const token = jwt.sign({ check: "ok" }, process.env.TOKEN_SECRETE, {
      expiresIn: "2d",
    });

   res.cookie("boostViewers", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path: "/",
  maxAge: 2 * 24 * 60 * 60 * 1000,
});

    res.status(201).json({ message: "Token stored in cookies" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
