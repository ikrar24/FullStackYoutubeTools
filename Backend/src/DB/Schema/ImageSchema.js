import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  cloudinary_url: { type: String, required: true },
  public_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
});

imageSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // Auto delete in DB

export default mongoose.model("Image", imageSchema);
