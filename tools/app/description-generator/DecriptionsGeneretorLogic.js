"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./DescriptionGenerator.css";
import DescriptionInfo from "@/Components/DecriptionInfo";
import toast, { Toaster } from "react-hot-toast";
import ViwesCount from "@/ViewsCount/ViewsCount";

// Categories Array
const categories = [
  "Technology",
  "Health",
  "Education",
  "Travel",
  "Finance",
  "Lifestyle",
  "Gaming",
  "Food",
  "Business",
  "Motivation",
  "Movies & Web Series",
  "Sports",
  "Music",
  "Science & Research",
  "Career & Jobs",
  "Personal Development",
  "Crypto & Web3",
  "Religious & Culture",
  "Automobile",
];

// AI Loader
const AiFancyLoader = ({ text = "Generating...", size = 60 }) => (
  <div className="flex flex-col items-center justify-center mt-8 space-y-3">
    <div className="relative">
      <div
        className="w-[70px] h-[70px] rounded-full border-t-4 border-b-4 border-purple-500 animate-spin"
        style={{
          boxShadow:
            "0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(79, 70, 229, 0.5)",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-purple-700 font-bold">
        ⚡
      </div>
    </div>
    <p className="text-purple-900 text-lg font-semibold animate-pulse">
      {text}
    </p>
  </div>
);

// Clean Text
function cleanAIText(text) {
  if (!text) return "";
  return text
    .replace(/<\｜.*?\｜>/g, "")
    .replace(/<\|.*?\|>/g, "")
    .replace(/▁/g, " ")
    .replace(/\*\*/g, "**")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function DescriptionGeneratorLogic() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [seoText, setSeoText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";

  useEffect(() => {
    ViwesCount();
  }, []);

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      topic.trim().length < 5 ||
      category.trim().length < 3
    ) {
      toast.error("⚠️ Each input must have at least 5 characters!");
      return;
    }

    setLoading(true);
    setError("");
    setSeoText("");

    const loadingToast = toast.loading("✨ Generating SEO description...");

    try {
      const response = await fetch(`${baseUrl}/api/descriptionGeneretor`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
        },
        body: JSON.stringify({ title, topic, category }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      let text =
        data?.GeneretedDescription ||
        data?.choices?.[0]?.message?.content ||
        "No description generated.";

      text = cleanAIText(text);
      setSeoText(text);
      toast.success("✅ SEO Description Generated Successfully!");
    } catch (err) {
      setError("Failed to generate SEO description.");
      toast.error("🚫 Failed to generate description. Try again!");
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(seoText);
    toast.success("📋 Copied to clipboard!");
  };

  return (
    <>
      <Toaster position="top-center" />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9c5d1] via-[#9795f0] to-[#fbc7d4] px-4 py-10">
        <div className="md:max-w-[70%] w-full p-6 text-center backdrop-blur-lg bg-white/30 rounded-2xl shadow-2xl border border-white/40">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            🎯 Generate Free SEO Descriptions
          </h1>

          <form onSubmit={handleGenerate} className="flex flex-col md:w-[80%] w-full mx-auto gap-5">
            <input
              type="text"
              placeholder="Enter Video Title (min 5 chars)"
              className="border border-gray-300 bg-white/70 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Video Topic (min 5 chars)"
              className="border.border-gray-300 bg-white/70 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />

            {/* ✅ Dropdown With Array */}
            <select
              className="border border-gray-300 bg-white/70 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 text-white font-semibold py-3 rounded-md shadow-md transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.03]"
              }`}
            >
              {loading ? "Generating..." : "✨ Generate"}
            </button>
          </form>

          {loading && <AiFancyLoader text="AI is writing your SEO description..." />}

          {error && <p className="text-red-600 mt-4 text-lg font-medium">{error}</p>}

          {seoText && !loading && (
            <div className="mt-6 p-5 bg-white/80 rounded-lg border border-gray-300 text-left shadow-inner md:w-[85%] mx-auto">
              <h2 className="font-semibold text-gray-800 mb-3 text-xl">
                ✅ Generated SEO Description:
              </h2>

              <div className="text-gray-700 whitespace-pre-line text-sm md:text-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                  {seoText}
                </ReactMarkdown>
              </div>

              <button
                onClick={handleCopy}
                className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition-all text-white px-6 py-2 rounded-md"
              >
                📋 Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </main>

      <DescriptionInfo />
    </>
  );
}

export default DescriptionGeneratorLogic;
