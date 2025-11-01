import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const generateWithClipdrop = async (prompt) => {
  console.log(process.env.CLIPDROP_API_KEY);
  
  try {
    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      { prompt },
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );
    return Buffer.from(response.data);
  } catch (err) {
    throw new Error("Clipdrop error: " + err.message);
  }
};
