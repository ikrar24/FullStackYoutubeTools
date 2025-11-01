"use client";
import React from "react";
import Image from "next/image";
import titleImage from "../Assets/titleImage.png"; // 🖼️ Add an image that visually represents title generation (e.g., YouTube titles concept)
// import FaqOfTitle from "./FaqOfTitle"; // Optional FAQ section component if you plan to include it

function TitleInfo() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center text-center px-5 sm:px-8 lg:px-16 py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg">
        {/* 🏷️ Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Generate SEO-Optimized YouTube Titles with AI 🚀
        </h2>

        {/* 💡 Intro */}
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            Our <strong>YouTube Title Generator</strong> helps you create
            <strong> catchy, keyword-optimized titles</strong> that attract more
            clicks and improve your <strong>video’s ranking</strong> on YouTube
            search results. Simply provide your video topic and get
            high-performing titles instantly.
          </p>
        </div>

        {/* 🧭 How to Use Section */}
        <section className="w-full max-w-6xl mt-16 bg-white/60 rounded-3xl p-6 sm:p-10 shadow-md border border-gray-200">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
            🧭 How to Use the YouTube Title Generator
          </h3>

          <p className="text-gray-700 text-left leading-relaxed mb-8">
            To generate perfect <strong>AI-powered YouTube titles</strong>,
            follow these simple steps:
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* ✅ Steps */}
            <div className="flex-1 text-left">
              <ol className="list-decimal list-inside text-gray-700 space-y-4">
                <li>
                  <strong>Enter Video Topic:</strong> Describe your video topic
                  clearly (minimum 5 words). This helps AI understand the theme
                  and relevant keywords.
                </li>
                <li>
                  <strong>Click “Check”:</strong> The AI will analyze your topic
                  and generate <strong>10 SEO-friendly title suggestions</strong>
                  that are designed to grab attention.
                </li>
                <li>
                  <strong>Copy or Edit:</strong> Choose the best title or tweak
                  it as per your branding and upload strategy.
                </li>
              </ol>

              <p className="mt-6 text-gray-700 text-base sm:text-lg">
                Each title is <strong>optimized for engagement, CTR</strong>, and
                <strong> keyword visibility</strong> — helping your video reach
                more viewers organically.
              </p>
            </div>

            {/* 🖼️ Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src={titleImage}
                alt="YouTube Title Generator Preview"
                width={500}
                height={350}
                className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* 🔍 Why Titles Matter */}
        <section className="w-full max-w-5xl mt-20 text-left">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            🔍 Why a Great YouTube Title is Important for SEO
          </h3>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            A well-crafted <strong>YouTube video title</strong> plays a huge
            role in improving your <strong>click-through rate (CTR)</strong> and
            search visibility. It’s the first thing users notice — and YouTube’s
            algorithm relies heavily on it to understand your content.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
            <li>
              Improves <strong>SEO ranking</strong> by using high-impact
              keywords.
            </li>
            <li>
              Increases <strong>click-through rate (CTR)</strong> and audience
              retention.
            </li>
            <li>
              Helps YouTube’s algorithm recommend your video to the right
              audience.
            </li>
            <li>
              Boosts <strong>engagement</strong> through curiosity and clarity.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            With our <strong>AI YouTube Title Generator</strong>, you’ll never
            struggle to find the right title again. Get
            <strong> creative, SEO-optimized</strong> ideas that drive
            <strong> clicks, traffic, and growth</strong> for your channel 🎯.
          </p>
        </section>
      </section>

      {/* ❓ Optional FAQ Section */}
      {/* <FaqOfTitle /> */}
    </>
  );
}

export default TitleInfo;
