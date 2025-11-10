"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FaqOfDecription() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50 text-gray-800 select-none ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Description Generator – Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12">
          Here are some common questions users ask about our{" "}
          <strong>YouTube Description Generator</strong>. Click on a question to
          view its answer.
        </p>

        <div className="space-y-4 text-left">
          {/* FAQ 1 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 0 ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => toggleFAQ(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                What is the YouTube Description Generator?
              </h3>
              {openIndex === 0 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
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
                The <strong>YouTube Description Generator</strong> is an{" "}
                <strong>AI-powered tool</strong> that helps you create
                SEO-friendly, keyword-optimized video descriptions that boost
                your ranking, visibility, and engagement on YouTube.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 1 ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => toggleFAQ(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                What inputs do I need to generate a description?
              </h3>
              {openIndex === 1 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
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
                You just need to fill three simple inputs:{" "}
                <strong>Video Title</strong>, <strong>Video Content</strong>, and{" "}
                <strong>Category</strong>. Once submitted, our AI instantly
                generates a perfect, ready-to-use YouTube description.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 2 ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => toggleFAQ(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                How does the AI make my description SEO-optimized?
              </h3>
              {openIndex === 2 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
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
                The AI analyzes your inputs to find{" "}
                <strong>relevant keywords</strong>, identifies search intent, and
                crafts a description that aligns with{" "}
                <strong>YouTube’s ranking algorithm</strong>. It ensures your
                content performs better in search results and suggested videos.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 3 ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => toggleFAQ(3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                Why is a good description important for YouTube SEO?
              </h3>
              {openIndex === 3 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
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
                A well-written description improves{" "}
                <strong>click-through rate (CTR)</strong>, helps YouTube
                understand your content, and boosts your{" "}
                <strong>search ranking</strong>. It’s one of the most important
                parts of video SEO.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 4 ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => toggleFAQ(4)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                Can I customize the generated description?
              </h3>
              {openIndex === 4 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
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
                Yes! After generating, you can edit, tweak, or regenerate the
                description to perfectly match your video tone and target
                audience — keeping it <strong>100% personalized</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqOfDecription;
