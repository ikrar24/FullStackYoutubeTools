"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FaqOfAanalysis() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50 text-gray-800 select-none ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          SEO Analysis – Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12">
          Here are some common questions about how SEO impacts your content
          and overall growth.
        </p>

        <div className="space-y-4 text-left">
          {/* FAQ 1 - Main Question */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer ${
              openIndex === 0 ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => toggleFAQ(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">
                Does SEO really increase views?
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
                SEO helps your content <strong>rank higher</strong> and appear in
                search results, which increases your <strong>reach</strong>.  
                However, views depend on the <strong>quality and engagement</strong> 
                of your content. Good SEO brings traffic, but only good content keeps viewers watching.
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
                How accurate is this SEO analysis?
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
                Our SEO analysis is based on the latest ranking factors and
                best practices. It provides a reliable overview of how optimized
                your content is for search engines.
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
                Can I use this tool for YouTube videos?
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
                Absolutely! This tool is specially designed for YouTube creators
                who want to improve their titles, descriptions, and overall SEO
                performance.
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
                How often should I analyze my content?
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
                It’s best to analyze your SEO performance regularly — especially
                after uploading new content or making major changes to your
                channel or website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqOfAanalysis;
