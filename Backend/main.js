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
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Database Connection
connection();

// middleware auth check with origin
app.use((req, res, next) => {
  const allowedOrigin = process.env.ORIGIN;
  const origin = req.get("origin");

  if (origin && origin !== allowedOrigin) {
    return res.status(403).json({ message: "Unauthorized source" });
  }

  const clientKey = req.header("x-client-key")?.trim();
  const expectedKey = process.env.FRONTEND_KEY?.trim();

  console.log("Client Key:", clientKey);
  console.log("Expected Key:", expectedKey);

  if (!clientKey || clientKey !== expectedKey) {
    return res.status(401).json({ message: "Invalid User" });
  }

  next();
});

// middleware auth check with secrete key
// app.use((req, res, next) => {
//   // Ignore preflight and favicon requests
//   if (req.method === "OPTIONS" || req.path === "/favicon.ico") {
//     return next();
//   }

//   const clientKey = req.header("x-client-key");
//   console.log("Client Key:", clientKey);
//   console.log("Expected Key:", process.env.FRONTEND_KEY);

//   if (clientKey !== process.env.FRONTEND_KEY) {
//     return res.status(401).json({ message: "Invalid User" });
//   }

//   next();
// });

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
