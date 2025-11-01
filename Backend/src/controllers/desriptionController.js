import descriptionGeneretorUtil from "../utils/descriptionGeneretorUtil.js";

const descriptionGeneretorRouter = async (req, res) => {
  try {
    console.log("🟢 Raw Body:", req.body);

    const { title, topic, category } = req.body; // ✅ spelling fixed

    // ✅ Validation
    if (!title || !topic || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userData = { title, topic, category };
    console.log("📦 Processed Data:", userData);

    // ✅ Wait for util response
    const responseData = await descriptionGeneretorUtil(userData);

    if (!responseData.success) {
      return res.status(500).json({
        message: "AI model failed",
        error: responseData.error,
      });
    }

    // ✅ Success Response
    res.status(201).json({
      message: "Description generated successfully",
      GeneretedDescription: responseData.GeneretedDescription,
    });
  } catch (error) {
    console.error("❌ Controller Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default descriptionGeneretorRouter;
