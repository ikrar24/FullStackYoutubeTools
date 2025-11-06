import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./src/DB/connection.js";
import scrapeRoutes from "./src/routes/scrapeRoutes.js";
import CheckOldScrapeRoute from "./src/routes/CheckOldScrapeRoute.js";
import viewRoutes from "./src/routes/viewRoutes.js";
import generetedDescrptionRoute from "./src/routes/generetedDescrptionRoute.js";
import titleSuggetionRoutes from "./src/routes/titleSuggetionRoutes.js";
import imageRoutes from "./src/routes/imageRoutes.js";
import UserRouter from "./src/routes/UserRouter.js";
import { startCleanupJob } from "./src/utils/cronJob.js";
import cookieParser from "cookie-parser";
import passwordRoute from "./src/routes/passwordRouts.js"
import AuthByOriginMiddleware from "./middleware/AuthByOriginMiddleware.js";

// after express.json()

dotenv.config();
const app = express();

// ✅ Middleware
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Database Connection
connection();

// ✅ Origin Security Middleware
app.use(AuthByOriginMiddleware)


// ✅ All API Routes
app.use("/api", scrapeRoutes);
app.use("/api", passwordRoute);
app.use("/api", CheckOldScrapeRoute);
app.use("/api/views", viewRoutes);
app.use("/api", generetedDescrptionRoute);
app.use("/api", titleSuggetionRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/user", UserRouter);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("✅ Server Running Successfully | Clipdrop + Cloudinary API Ready");
});

// ✅ Start Cleanup Job (if needed)
startCleanupJob();

// ✅ Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
