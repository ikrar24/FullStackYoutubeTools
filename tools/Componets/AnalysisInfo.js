"use client";
import React from "react";
import Image from "next/image";
import linechart from "../Assets/linechart.png";
import pichart from "../Assets/pichart.png";

function AnalysisInfo() {
  return (
    <>
      {/* Hidden SEO Context for Crawlers */}
      <p className="sr-only">
        Free YouTube SEO Checker and Analyzer Tool. Instantly analyze your YouTube video’s title, description,
        tags, and hashtags with AI-powered insights to improve ranking, boost visibility, and optimize video SEO performance.
      </p>

      <section className="w-full flex flex-col items-center justify-center text-center px-5 sm:px-8 lg:px-16 py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          How to Analyze Your YouTube SEO (Free SEO Checker Guide)
        </h2>

        {/* Description */}
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            If you're a <strong>YouTube content creator</strong>, understanding your video’s SEO performance
            is key to growing your channel. Our <strong>Free YouTube SEO Analyzer Tool</strong> uses
            <strong> AI-powered SEO analysis</strong> to evaluate your video title, tags, description, and hashtags,
            giving you actionable insights to <strong>improve visibility, engagement,</strong> and ranking on YouTube.
          </p>

          <ul className="text-left mt-6 space-y-3 list-disc list-inside text-gray-700">
            <li>
              Paste your <strong>YouTube video URL</strong> in the analyzer input field above.
            </li>
            <li>
              Click on <strong>“Analyze”</strong> to generate your complete <strong>YouTube SEO report</strong>.
            </li>
            <li>
              Instantly view your <strong>SEO score</strong> with detailed insights and data visualization charts.
            </li>
            <li>
              Get personalized <strong>optimization tips</strong> for title, tags, and descriptions to rank higher.
            </li>
          </ul>

          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            Our tool delivers a <strong>comprehensive YouTube SEO analysis</strong> — helping your videos
            reach a <strong>wider audience</strong>, gain <strong>more organic views</strong>, and perform
            better in <strong>YouTube search rankings</strong>.
          </p>
        </div>

        {/* Charts Section */}
        <section className="w-full mt-16 flex flex-col items-center justify-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
            Visualize Your YouTube SEO Results in Interactive Charts
          </h3>

          {/* Line Chart Section */}
          <div className="w-full max-w-6xl bg-white/60 rounded-3xl p-6 sm:p-10 shadow-md mb-16 border border-gray-200">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
              📈 Line Chart: Detailed YouTube SEO Breakdown
            </h4>

            <p className="text-gray-700 text-left leading-relaxed mb-8">
              After running your analysis, you’ll receive a <strong>detailed line chart</strong> that visually
              represents your YouTube video’s <strong>SEO strength</strong> for each key element — title, tags,
              description, and hashtags. These results show keyword performance percentages, helping you
              identify strengths and areas that need improvement.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 flex justify-center">
                <Image
                  src={linechart}
                  alt="Line chart showing YouTube video SEO analysis for title, tags, description, and hashtags"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 text-left">
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>
                    <strong>Title:</strong> Measures keyword strength, search intent, and SEO optimization.
                  </li>
                  <li>
                    <strong>Description:</strong> Analyzes keyword density, clarity, and user engagement.
                  </li>
                  <li>
                    <strong>Tags:</strong> Evaluates topic relevance and keyword coverage.
                  </li>
                  <li>
                    <strong>Hashtags:</strong> Assesses reach and engagement potential.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="w-full max-w-6xl bg-white/60 rounded-3xl p-6 sm:p-10 shadow-md border border-gray-200">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
              🥧 Pie Chart: YouTube SEO Score Distribution Overview
            </h4>

            <p className="text-gray-700 text-left leading-relaxed mb-8">
              The pie chart provides a quick visual overview of how your <strong>YouTube video SEO</strong>
              is distributed across major parameters. It clearly shows the contribution of each
              factor — like <strong>content quality, engagement, metadata,</strong> and
              <strong> optimization</strong> — to your overall SEO score.
            </p>

            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
              <div className="flex-1 flex justify-center">
                <Image
                  src={pichart}
                  alt="Pie chart showing YouTube SEO score distribution including engagement, metadata, and optimization factors"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 text-left">
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>
                    <strong>Content Quality:</strong> 30% – Keyword-rich, relevant, and engaging content.
                  </li>
                  <li>
                    <strong>Engagement:</strong> 25% – Likes, comments, retention, and watch time metrics.
                  </li>
                  <li>
                    <strong>Metadata:</strong> 25% – Optimized title, tags, and description quality.
                  </li>
                  <li>
                    <strong>Optimization:</strong> 20% – Overall YouTube SEO performance score.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AnalysisInfo;
