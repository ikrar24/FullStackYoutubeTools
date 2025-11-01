import axios from "axios";
import fs from "fs";

async function generateImage() {
  try {
    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      {
        prompt: "a futuristic cyberpunk city at night, neon lights, rain",
      },
      {
        headers: {
          "x-api-key": "YOUR_API_KEY", // 👈 apna Clipdrop API key yaha daalo
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // 👈 binary data ke liye
      }
    );

    // Save image to file
    fs.writeFileSync("result.png", Buffer.from(response.data));
    console.log("✅ Image generated successfully: result.png");
  } catch (error) {
    console.error("❌ Error generating image:", error.response?.data || error.message);
  }
}

generateImage();
