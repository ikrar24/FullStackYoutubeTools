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

const titleSuggetionUtils = async (userData) => {
  // console.log("🧠 Inside Util, received:", userData);

 const prompt = `You are an advanced YouTube SEO Title Generator AI.
Your only task is to generate exactly 10 SEO-friendly, highly clickable, and keyword-optimized YouTube video titles based on the user’s given video topic.

Input:
- Video Topic: ${userData.topic}

Language rule (important):
- Detect the language/script of the provided Video Topic and RESPOND IN THE SAME LANGUAGE:
  • If the topic is written in Devanagari (हिन्दी), reply in Hindi (Devanagari).
  • If the topic is written in Latin script but contains Hindi/Hinglish words (e.g., "html file me js kaise add kare"), reply in Hinglish (Latin-script Hindi).
  • If the topic is written in English, reply in English.
- If the language cannot be confidently detected, default to English.
- Do NOT translate the topic; generate titles in the same language/script the user provided.

Instructions:
1. Analyze the given topic for YouTube SEO trends, relevant keywords, and audience search intent in the detected language.
2. Generate exactly 10 unique titles that are:
   - SEO-friendly and optimized for ranking in the detected language
   - Engaging and click-worthy
   - Grammatically correct and natural-sounding for that language/script
   - Containing strong emotional or action-driven words (where relevant)
3. Each title should be between 50–70 characters (count characters in the same script as the output).
4. Do NOT include any introduction, explanation, or extra lines — only show the 10 titles as a numbered list.
5. Preserve the language style: for Hinglish use natural Latin-script Hindi phrasing (no Devanagari); for Hindi use Devanagari; for English use standard English.

Output Format (strictly follow this — no greeting, no intro):
1. [Title 1]
2. [Title 2]
3. [Title 3]
4. [Title 4]
5. [Title 5]
6. [Title 6]
7. [Title 7]
8. [Title 8]
9. [Title 9]
10. [Title 10]
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
        return { success: true, titleSuggetions: result };
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
      return { success: true, titleSuggetions: text };
    } else {
      throw new Error("Gemini returned no candidates");
    }
  } catch (geminiError) {
    console.error("❌ Gemini fallback failed:", geminiError.message);
    return { success: false, error: geminiError.message };
  }
};

export default titleSuggetionUtils;