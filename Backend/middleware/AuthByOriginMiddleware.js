import dotenv from "dotenv"

dotenv.config();

const AuthByOriginMiddleware = async (req, res, next) => {
  try {
    // Example: origin check
    const allowedOrigins = ["http://localhost:3000", "https://yourdomain.com"];

    const origin = req.headers.origin;

    if (!allowedOrigins.includes(origin)) {
      return res.status(401).json({
        success: false,
        message: "Invalid"
      });
    }



// x-client-key check 

 const clientKey = req.headers["x-client-key"]; // <-- yahan check ho raha

  if (!clientKey) {
    return res.status(401).json({
      success: false,
      message: "x-client-key header missing"
    });
  }

  // ✅ Optional: Key verify karna
  if (clientKey !== process.env.FRONTEND_KEY) {
    return res.status(403).json({
      success: false,
      message: "Invalid User"
    });
  }






    next(); // ✅ continue
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export default AuthByOriginMiddleware;
