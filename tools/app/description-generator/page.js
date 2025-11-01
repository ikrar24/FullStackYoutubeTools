"use client";

import React, { useState } from "react";
import AiGeneratingLoader from "../thumbnails-generator/AiGeneratingLoader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./DescriptionGenerator.css";
import DescriptionInfo from "@/Componets/DecriptionInfo";
import toast, { Toaster } from "react-hot-toast";

// 🧹 Cleaner Function
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

function DescriptionGenerator() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [seoText, setSeoText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ API Base from env
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // 🧠 Generate Description
  const handleGenerate = async (e) => {
    e.preventDefault();

    // ✅ Input validation (minimum 5 chars)
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

    const loadingToast = toast.loading("Generating SEO description...");

    try {
      const response = await fetch(`${API_BASE}/api/descriptionGeneretor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, topic, category }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      console.log("✅ Server Response:", data);

      let text =
        data?.GeneretedDescription ||
        data?.choices?.[0]?.message?.content ||
        "No description generated.";

      text = cleanAIText(text);
      setSeoText(text);
      toast.success("✅ Description generated successfully!");
    } catch (err) {
      console.error("❌ Error:", err);
      setError("Failed to generate SEO description.");
      toast.error("Failed to generate description. Try again!");
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast);
    }
  };

  // 📋 Copy to Clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(seoText);
    toast.success("Copied to clipboard ✅");
  };

  return (
    <>
      {/* 🔔 Hot Toast */}
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9c5d1] via-[#9795f0] to-[#fbc7d4] px-4 py-10">
        <div className="md:max-w-[70%] w-full p-6 text-center backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-wide">
            Generate Free SEO Descriptions
          </h1>

          {/* 📝 Form */}
          <form
            onSubmit={handleGenerate}
            className="flex flex-col md:w-[80%] w-full mx-auto gap-5"
          >
            <input
              type="text"
              placeholder="Enter Video Title (min 5 chars)"
              className="border border-gray-300 bg-white/80 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Enter Video Topic (min 5 chars)"
              className="border border-gray-300 bg-white/80 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />

            <select
              className="border border-gray-300 bg-white/80 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Travel">Travel</option>
              <option value="Finance">Finance</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Food">Food</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 text-white font-semibold py-3 rounded-md shadow-md transition-all cursor-pointer ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02]"
              }`}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>

          {/* 🔁 Loader */}
          {loading && (
            <div className="flex justify-center items-center mt-8">
              <AiGeneratingLoader
                size={60}
                mode="light"
                text="Generating SEO Description..."
              />
            </div>
          )}

          {/* ❌ Error */}
          {error && <p className="text-red-600 mt-4">{error}</p>}

          {/* ✅ Result */}
          {seoText && !loading && (
            <div className="mt-6 p-5 bg-white/70 rounded-lg border border-gray-300 text-left shadow-inner md:w-[85%] mx-auto">
              <h2 className="font-semibold text-gray-800 mb-3 text-xl">
                Generated SEO Description:
              </h2>

              {/* 🧩 Markdown Output */}
              <div className="text-gray-700 leading-relaxed prose prose-purple max-w-none whitespace-pre-line overflow-x-auto break-words w-full text-sm sm:text-base md:text-[17px] markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    pre: ({ node, ...props }) => (
                      <pre
                        {...props}
                        className="markdown-pre overflow-x-auto rounded-lg p-3 bg-[#1e1e1e] text-white text-sm"
                      />
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        {...props}
                        className="bg-gray-100 text-pink-700 px-1 rounded"
                      />
                    ),
                  }}
                >
                  {seoText}
                </ReactMarkdown>
              </div>

              <button
                onClick={handleCopy}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md transition-all cursor-pointer"
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </main>

      <DescriptionInfo />
    </>
  );
}

export default DescriptionGenerator;
