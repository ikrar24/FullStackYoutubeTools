import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const GEMINI_KEY = process.env.GEMINI_KEY;
const GEMINI_API = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;

const MODELS = [
  "openai/gpt-oss-20b:free",
  "nousresearch/deephermes-3-llama-3-8b-preview:free",
  "google/gemma-3n-e2b-it:free",
  "google/gemma-3n-e4b-it:free",
  "meta-llama/llama-3.3-8b-instruct:free",
  "deepseek/deepseek-chat-v3.1:free",
  "deepseek/deepseek-chat-v3-0324:free",
  "meta-llama/llama-3.1-70b-instruct:free",
  "deepseek/deepseek-r1-distill-llama-70b:free",
  "deepseek/deepseek-r1:free",
  "meta-llama/llama-4-maverick:free",
];

const descriptionGeneretorUtil = async (userData) => {
  // console.log("🧠 Inside Util, received:", userData);

  const prompt = `
Generate a complete, long, and SEO-optimized YouTube video description.

If user input (Title, Topic, or Category) is in Hindi, write the description in Hinglish (Hindi in English alphabets). 
Otherwise, use English.

Use the details:
- Title: "${userData.title}"
- Topic: "${userData.topic}"
- Category: "${userData.category}"

Structure:
1. Intro (2–3 lines)
2. Main Description (200–300 words)
3. Example Timestamps
4. Hashtags (3–5 tags)
`;

  let lastError = null;

  // 🔁 Try multiple OpenRouter models
  for (const model of MODELS) {
    try {
      // console.log(`🚀 Trying model: ${model}`);

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model,
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
          },
          timeout: 25000,
        }
      );

      const result = response.data?.choices?.[0]?.message?.content;
      if (result) {
        // console.log(`✅ Success from model: ${model}`);
        return { success: true, GeneretedDescription: result };
      }
    } catch (error) {
      console.error(`❌ Failed: ${model}`, error.message);
      lastError = error;
    }
  }

  // 🧠 Gemini fallback
  // console.log("⚠️ All models failed. Switching to Gemini fallback...");

  try {
    const geminiResponse = await axios.post(GEMINI_API, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    const candidates = geminiResponse.data?.candidates;
    if (candidates && candidates.length > 0) {
      const text =
        candidates[0]?.content?.parts?.[0]?.text ||
        "No result text found from Gemini";
      // console.log("✅ Gemini fallback success");
      return { success: true, GeneretedDescription: text };
    } else {
      throw new Error("Gemini returned no candidates");
    }
  } catch (geminiError) {
    console.error("❌ Gemini fallback failed:", geminiError.message);
    return { success: false, error: geminiError.message };
  }
};

export default descriptionGeneretorUtil;
