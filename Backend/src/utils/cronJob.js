import cron from "node-cron";
import Image from "../DB/Schema/ImageSchema.js";
import cloudinary from "../config/cloudinary.js";

// Runs every minute to delete expired images
export const startCleanupJob = () => {
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const expired = await Image.find({ expiresAt: { $lte: now } });

    if (expired.length) {
      console.log(`🧹 Found ${expired.length} expired images, cleaning up...`);
    }

    for (const img of expired) {
      try {
        await cloudinary.uploader.destroy(img.public_id);
        await Image.deleteOne({ _id: img._id });
        console.log(`🗑️ Deleted image: ${img._id}`);
      } catch (err) {
        console.error("Error deleting image:", err.message);
      }
    }
  });

  console.log("⏰ Cron job started: cleanup every 1 minute");
};
