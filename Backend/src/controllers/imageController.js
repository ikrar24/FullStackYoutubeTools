import Image from "../DB/Schema/ImageSchema.js";
import { generateWithClipdrop } from "../config/clipdrop.js";
import { uploadBufferToCloudinary } from "../utils/uploadBuffer.js";
import axios from "axios";
import cloudinary from "../config/cloudinary.js";





export const generateImage = async (req, res) => {

  


  try {

    const { title , topic } = req.body;

    if (!title || !topic) return res.status(400).json({ error: "title or topic is required" });

const prompt = `
  Create a high-quality YouTube thumbnail for a ${title} video. Use bright and eye-catching colors. Include bold text that says "${title}" in an easy-to-read font. Add relevant images or illustrations that represent ${topic}, with a clear and engaging visual style. The thumbnail should look modern, professional, and visually appealing.`

    
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const buffer = await generateWithClipdrop(prompt);
    const upload = await uploadBufferToCloudinary(buffer);

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const image = await Image.create({
      prompt,
      cloudinary_url: upload.secure_url,
      public_id: upload.public_id,
      expiresAt,
    });

    res.json({
      id: image._id,
      url: image.cloudinary_url,
      expiresAt: image.expiresAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const downloadImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ error: "Image not found or expired" });

    const response = await axios.get(image.cloudinary_url, { responseType: "stream" });
    res.setHeader("Content-Disposition", `attachment; filename=image-${image._id}.png`);
    response.data.pipe(res);
  } catch (err) {
    res.status(500).json({ error: "Download failed" });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ error: "Image not found" });

    await cloudinary.uploader.destroy(image.public_id);
    await Image.deleteOne({ _id: image._id });
    res.json({ success: true, message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
