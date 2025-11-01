// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connection from "./src/DB/connection.js";
import scrapeRoutes from "./src/routes/scrapeRoutes.js";
import CheckOldScrapeRoute from "./src/routes/CheckOldScrapeRoute.js";
import viewRoutes from "./src/routes/viewRoutes.js";
import generetedDescrptionRoute from "./src/routes/generetedDescrptionRoute.js";
import titleSuggetionRoutes from "./src/routes/titleSuggetionRoutes.js";
import imageRoutes from "./src/routes/imageRoutes.js";
import { startCleanupJob } from "./src/utils/cronJob.js";

dotenv.config();
const app = express();

// ✅ Middleware (must be before routes)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Database Connection
connection();

// ✅ Routes
app.use("/api", scrapeRoutes);
app.use("/api", CheckOldScrapeRoute);
app.use("/api/views", viewRoutes);
app.use("/api", generetedDescrptionRoute);
app.use("/api", titleSuggetionRoutes);

// thumbnails api 
app.use("/api/images", imageRoutes);
app.get("/", (req, res) => res.send("✅ Clipdrop + Cloudinary API Running"));




const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
