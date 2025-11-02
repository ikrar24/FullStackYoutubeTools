import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// 🔑 Gemini Fallback API Key
const GEMINI_KEY = process.env.GEMINI_KEY;
const GEMINI_API = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;

// 🔄 OpenRouter Models Priority
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

// 🧠 Universal Extractor – Works with any AI response format
const extractSeoScores = (text = "") => {
  const cleanText = text
    .replace(/\s+/g, " ")
    .replace(/[\*_\~\|\#\>\-]/g, "")
    .replace(/ /g, " ")
    .replace(/\u00A0/g, " ") // remove non-breaking space
    .trim();

  const getScore = (section) => {
    const regex = new RegExp(
      `${section}[^\\d]*(\\d{1,3}(?:\\.\\d+)?)\\s*(?:%|\\/100)?`,
      "i"
    );
    const match = cleanText.match(regex);
    return match ? Number(match[1]) : null;
  };

  const title = getScore("Title");
  const description = getScore("Description");
  const tags = getScore("Tags?");
  const hashtags = getScore("Hashtags?");
  const overall =
    getScore("Overall") ||
    getScore("Total") ||
    getScore("Final") ||
    getScore("Combined") ||
    null;

  // 🧩 Auto-calculate overall if missing
  let computedOverall = overall;
  if (!computedOverall) {
    const all = [title, description, tags, hashtags].filter((n) => typeof n === "number");
    if (all.length) computedOverall = Math.round(all.reduce((a, b) => a + b, 0) / all.length);
  }

  return {
    title: title ?? 0,
    description: description ?? 0,
    tags: tags ?? 0,
    hashtags: hashtags ?? 0,
    overall: computedOverall ?? 0,
  };
};

// 🔍 Main Analysis Function
const analysisSeo = async (userData) => {
  const prompt = `
You are an advanced YouTube SEO analyzer and optimizer AI.
Your task is to evaluate the user's provided YouTube Title, Description, Tags, and Hashtags
based on SEO performance, readability, keyword density, and engagement potential.

Input:
- Title: [${userData.title}]
- Description: [${userData.description}]
- Tags: [${userData.tags}]
- Hashtags: [${userData.hashtags}]

Instructions:
1. Analyze each section (Title, Description, Tags, Hashtags).
2. Give percentage-based SEO scores for each.
3. Include Keyword Density, Readability, Engagement Optimization.
4. Calculate Overall SEO Score (0–100).
5. Label as Excellent, Good, Average, or Poor.
6. Suggest improvements if Poor/Average.

Output Format (strictly follow this, no greeting or intro):
`;

  let lastError = null;

  // 🔁 Try each OpenRouter model
  for (const model of MODELS) {
    try {
      console.log(`🚀 Trying model: ${model}`);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25000);

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
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      const result = response.data?.choices?.[0]?.message?.content;
      if (result) {
        const seoScores = extractSeoScores(result);
        console.log(`✅ Success from model: ${model}`);
        console.log("Extracted SEO Scores:", seoScores);
        return { success: true, model, result, seoScores };
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      console.error(`❌ Model failed: ${model}`, error.response?.data || error.message);
      lastError = error;
      continue;
    }
  }

  // 🧠 Gemini fallback
  console.log("⚠️ All OpenRouter models failed. Switching to Gemini fallback...");

  try {
    const geminiResponse = await axios.post(GEMINI_API, {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    });

    const candidates = geminiResponse.data?.candidates;
    if (candidates && candidates.length > 0) {
      const text = candidates[0]?.content?.parts?.[0]?.text || "No result text found";
      const seoScores = extractSeoScores(text);
      console.log("✅ Gemini fallback success");
      return { success: true, result: text, seoScores };
    } else {
      throw new Error("Gemini returned no candidates");
    }
  } catch (geminiError) {
    console.error("❌ Gemini fallback failed:", geminiError.message);
    return { success: false, error: "Internal Error" };
  }
};

export default analysisSeo;
