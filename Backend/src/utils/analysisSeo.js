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

const analysisSeo = async (userData) => {
  const fallbackPrompt = `
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

  // ✅ Helper function: Extract SEO scores from model result
const extractSeoScores = (result) => {
  // Helper: find score by keyword and nearby context
  const findContextScore = (sectionName) => {
    const sectionRegex = new RegExp(
      `${sectionName}[^]*?(?:SEO\\s*Score\\s*[:：-]?\\s*[*_~]*\\s*(\\d+(?:\\.\\d+)?)\\s*(?:%|\\/100)?[*_~]*)`,
      "i"
    );
    const match = result.match(sectionRegex);
    return match ? Number(match[1]) : null;
  };

  const title = findContextScore("Title");
  const description = findContextScore("Description");
  const tags = findContextScore("Tags?");
  const hashtags = findContextScore("Hashtags?");
  
  // 🔧 Handle "Overall SEO Score: 82%" or "Overall SEO Score: 82/100" or "Overall Score: 82%"
  const overallRegex =
    /Overall\s*(?:SEO\s*)?Score\s*[:：-]?\s*[*_~]*\s*(\d+(?:\.\d+)?)\s*(?:%|\/100)?[*_~]*/i;
  const overallMatch = result.match(overallRegex);
  const overall = overallMatch ? Number(overallMatch[1]) : null;

  return { title, description, tags, hashtags, overall };
};



  // 🔁 Try each OpenRouter model
  for (const model of MODELS) {
    try {
      console.log(`🚀 Trying model: ${model}`);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25000); // 25s timeout

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

  // 🧠 All models failed → Gemini fallback
  console.log("⚠️ All OpenRouter models failed. Switching to Gemini fallback...");

  try {
    const fallbackPrompt = `
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

    const geminiResponse = await axios.post(GEMINI_API, {
      contents: [
        {
          parts: [
            { text: fallbackPrompt },
          ],
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
    return {
      success: false,
      error: "Internal Error",
    };
  }
};

export default analysisSeo;
