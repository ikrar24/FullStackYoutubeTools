"use client";
import React from "react";
import Image from "next/image";
import formImage from "../Assets/formImage.png";
import FaqOfDecription from "./FaqOfDecription";

function DescriptionInfo() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center text-center px-5 sm:px-8 lg:px-16 py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Generate SEO-Optimized YouTube Descriptions with AI
        </h2>

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            Our <strong>YouTube Description Generator</strong> creates
            <strong> SEO-friendly and engaging descriptions</strong> that boost
            your video’s visibility, ranking, and watch time. Just provide
            simple inputs, and let AI do the magic!
          </p>
        </div>

        {/* --- How to Use Section --- */}
        <section className="w-full max-w-6xl mt-16 bg-white/60 rounded-3xl p-6 sm:p-10 shadow-md border border-gray-200">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
            🧭 How to Use the YouTube Description Generator
          </h3>

          <p className="text-gray-700 text-left leading-relaxed mb-8">
            To generate the perfect <strong>AI-powered description</strong>, fill
            in these three simple fields:
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-left">
              <ol className="list-decimal list-inside text-gray-700 space-y-4">
                <li>
                  <strong>Video Title:</strong> Enter your YouTube video title.
                  This helps the AI understand your topic and target keywords.
                </li>
                <li>
                  <strong>Video Content:</strong> Describe what your video is
                  about (tutorial, vlog, review, etc.) so the AI can maintain
                  context.
                </li>
                <li>
                  <strong>Category:</strong> Choose the most suitable category
                  (e.g., Education, Technology, Travel) to help AI use the right
                  tone and SEO tags.
                </li>
              </ol>

              <p className="mt-6 text-gray-700 text-base sm:text-lg">
                Then, click <strong>“Generate Description”</strong> to get a
                <strong> keyword-rich, algorithm-friendly</strong> YouTube
                description — ready to use instantly!
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src={formImage}
                alt="YouTube Description Generator Input Preview"
                width={500}
                height={350}
                className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* --- Why Description Matters --- */}
        <section className="w-full max-w-5xl mt-20 text-left">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            🔍 Why a Good Description is Important for YouTube SEO
          </h3>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            A well-written <strong>YouTube video description</strong> helps your
            content get discovered by the right audience. It improves{" "}
            <strong>ranking, engagement, and discoverability</strong> by giving
            YouTube’s algorithm more context about your video.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
            <li>
              Boosts <strong>SEO ranking</strong> by including relevant keywords.
            </li>
            <li>
              Helps YouTube understand your content for better recommendations.
            </li>
            <li>
              Increases <strong>click-through rate (CTR)</strong> and watch time.
            </li>
            <li>
              Encourages engagement through clear calls to action.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            With our <strong>AI YouTube Description Generator</strong>, your
            videos get professional, optimized descriptions that attract more
            viewers and enhance overall <strong>channel growth</strong> 🚀.
          </p>
        </section>
      </section>
      <FaqOfDecription/>
    </>
  );
}

export default DescriptionInfo;
