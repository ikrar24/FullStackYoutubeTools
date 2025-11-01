import express from "express";
import PageView from "../DB/Schema/viewsSchema.js";
import { getCountryByIP } from "../utils/getCountryByIP.js";

const router = express.Router();

// ✅ Route: Increment view and track country
router.get("/", async (req, res) => {
  try {
    const { slug } = req.query;
    if (!slug) return res.status(400).json({ error: "Slug is required" });

    // Get client IP (works with proxy)
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // Get country
    const country = await getCountryByIP(ip);

    // Find or create page
    let page = await PageView.findOne({ slug });

    if (!page) {
      page = new PageView({
        slug,
        totalViews: 1,
        countries: [{ country, views: 1 }],
      });
    } else {
      page.totalViews += 1;
      const existingCountry = page.countries.find(
        (c) => c.country === country
      );
      if (existingCountry) {
        existingCountry.views += 1;
      } else {
        page.countries.push({ country, views: 1 });
      }
    }

    await page.save();

    res.json({
      slug: page.slug,
      totalViews: page.totalViews,
      country,
      countries: page.countries,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ Route: Get all page view stats
router.get("/all", async (req, res) => {
  try {
    const pages = await PageView.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
