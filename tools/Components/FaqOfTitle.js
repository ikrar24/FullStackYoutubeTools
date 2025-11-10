"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FaqOfTitle() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center select-none ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Title Generator – Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12">
          Here are some common questions about our{" "}
          <strong>YouTube Title Generator</strong>. Click on a question to learn
          how to create high-performing, SEO-optimized YouTube titles.
        </p>

        <div className="space-y-4 text-left">
          {/* FAQ 1 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 0 ? "bg-purple-50 border-l-4 border-purple-500" : ""
            }`}
            onClick={() => toggleFAQ(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                What is the YouTube Title Generator?
              </h3>
              {openIndex === 0 ? (
                <FaChevronUp className="text-purple-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 0 ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                The <strong>YouTube Title Generator</strong> is an{" "}
                <strong>AI-powered tool</strong> that automatically creates
                catchy, SEO-optimized, and click-worthy video titles to help your
                content stand out on YouTube.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 1 ? "bg-purple-50 border-l-4 border-purple-500" : ""
            }`}
            onClick={() => toggleFAQ(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                What do I need to input to get title suggestions?
              </h3>
              {openIndex === 1 ? (
                <FaChevronUp className="text-purple-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 1 ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                Simply enter your <strong>video topic</strong> — a short
                sentence (at least 5 words) describing what your video is about.
                The AI will then generate 10 engaging, SEO-friendly title ideas
                in seconds.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 2 ? "bg-purple-50 border-l-4 border-purple-500" : ""
            }`}
            onClick={() => toggleFAQ(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                How does the AI make my titles SEO-optimized?
              </h3>
              {openIndex === 2 ? (
                <FaChevronUp className="text-purple-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 2 ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                The AI analyzes trending <strong>keywords</strong>,{" "}
                <strong>search intent</strong>, and <strong>CTR patterns</strong>{" "}
                to craft titles that perform better in YouTube’s algorithm. Each
                title balances clarity, curiosity, and SEO relevance.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 3 ? "bg-purple-50 border-l-4 border-purple-500" : ""
            }`}
            onClick={() => toggleFAQ(3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                Why is a good title important for YouTube SEO?
              </h3>
              {openIndex === 3 ? (
                <FaChevronUp className="text-purple-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 3 ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                A great title increases your{" "}
                <strong>click-through rate (CTR)</strong>, attracts more views,
                and helps YouTube understand your content. It’s one of the{" "}
                <strong>most powerful SEO factors</strong> for ranking videos.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 4 ? "bg-purple-50 border-l-4 border-purple-500" : ""
            }`}
            onClick={() => toggleFAQ(4)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                Can I edit or modify the generated titles?
              </h3>
              {openIndex === 4 ? (
                <FaChevronUp className="text-purple-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 4 ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                Absolutely! You can edit, tweak, or mix the generated titles to
                better fit your content and target audience while keeping the
                <strong> SEO advantage</strong> intact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqOfTitle;
