import titleSuggetionUtil from "../utils/titleSuggetionUtil.js";

const titleSuggetionController = async (req, res) => {
  try {
    // console.log("🟢 Raw Body:", req.body);

    const { topic } = req.body; // ✅ spelling fixed

    // ✅ Validation
    if (!topic ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userData = { topic};
    // console.log("📦 Processed Data:", userData);


    // ✅ Wait for util response
    const responseData = await titleSuggetionUtil(userData);
    if (!responseData.success) {
      return res.status(500).json({
        message: "AI model failed",
        error: responseData.error,
      });
    }

    // ✅ Success Response
    res.status(201).json({
      message: "Title Suggetions generated successfully",
      titleSuggetions: responseData.titleSuggetions,
    });
  } catch (error) {
    console.error("❌ Controller Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default titleSuggetionController;
