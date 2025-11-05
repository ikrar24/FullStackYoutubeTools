"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./DescriptionGenerator.css";
import DescriptionInfo from "@/Componets/DecriptionInfo";
import toast, { Toaster } from "react-hot-toast";
import ViwesCount from "@/ViewsCount/ViewsCount";

// 🌀 Custom AI Loader Component
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

// 🧹 Clean text function
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

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // 📈 Views Counter
  useEffect(() => {
    ViwesCount();
  }, []);

  // 🚀 Generate Description
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
      const response = await fetch(`${API_BASE}/api/descriptionGeneretor`, {
        method: "POST",
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
      // console.error("❌ Error:", err);
      setError("Failed to generate SEO description.");
      toast.error("🚫 Failed to generate description. Try again!");
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast);
    }
  };

  // 📋 Copy to Clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(seoText);
    toast.success("📋 Copied to clipboard!");
  };

  return (
    <>
      {/* 🌈 Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1e1e2f",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "15px",
          },
          success: {
            iconTheme: { primary: "#22c55e", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#fff" },
          },
        }}
      />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9c5d1] via-[#9795f0] to-[#fbc7d4] px-4 py-10">
        <div className="md:max-w-[70%] w-full p-6 text-center backdrop-blur-lg bg-white/30 rounded-2xl shadow-2xl border border-white/40">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-wide drop-shadow-md">
            🎯 Generate Free SEO Descriptions
          </h1>

          {/* 📝 Input Form */}
          <form
            onSubmit={handleGenerate}
            className="flex flex-col md:w-[80%] w-full mx-auto gap-5"
          >
            <input
              type="text"
              placeholder="Enter Video Title (min 5 chars)"
              className="border border-gray-300 bg-white/70 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Enter Video Topic (min 5 chars)"
              className="border border-gray-300 bg-white/70 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />

            <select
              className="border border-gray-300 bg-white/70 text-gray-800 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
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
              <option value="Food">Gaming</option>
              <option value="Food">Food</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 text-white font-semibold py-3 rounded-md shadow-md transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.03] hover:shadow-lg"
              }`}
            >
              {loading ? "Generating..." : "✨ Generate"}
            </button>
          </form>

          {/* Loader */}
          {loading && <AiFancyLoader text="AI is writing your SEO description..." />}

          {/* Error Message */}
          {error && (
            <p className="text-red-600 mt-4 text-lg font-medium">{error}</p>
          )}

          {/* Output Result */}
          {seoText && !loading && (
            <div className="mt-6 p-5 bg-white/80 rounded-lg border border-gray-300 text-left shadow-inner md:w-[85%] mx-auto">
              <h2 className="font-semibold text-gray-800 mb-3 text-xl">
                ✅ Generated SEO Description:
              </h2>

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
                        className="bg-gray-200 text-purple-700 px-1 rounded"
                      />
                    ),
                  }}
                >
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
