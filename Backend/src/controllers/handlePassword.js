import dotenv from "dotenv";

dotenv.config();

const handlePassword = (req, res) => {
  try {
    const { password } = req.body;

    // 🔹 Check if password is provided
    if (!password) {
      return res
        .status(400)
        .json({ message: "Password is required", status: false });
    }

    const authPassword = process.env.AUTH_PASS;

    // 🔹 Validate password
    if (password !== authPassword) {
      return res
        .status(401)
        .json({ message: "Invalid Password", status: false });
    }

    // ✅ Success
    return res
      .status(200)
      .json({ message: "Successful login", status: true });
  } catch (error) {
    console.error("Password verification error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", status: false, error });
  }
};

export default handlePassword;
