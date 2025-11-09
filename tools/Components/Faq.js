"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-12">
          Here are some of the common questions our users ask. Click on any question to view the answer.
        </p>

        <div className="space-y-4 text-left">

          {/* FAQ 1 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer
              ${openIndex === 0 ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
            onClick={() => toggleFAQ(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">What is BoostViews?</h3>
              {openIndex === 0 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-40 mt-4" : "max-h-0"}`}>
              <p className="text-gray-700"> <strong>
                BoostViews is an AI-powered toolset</strong> designed to help YouTube creators improve their SEO, optimize video content, and increase views effortlessly.</p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer
              ${openIndex === 1 ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
            onClick={() => toggleFAQ(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">Which tools are included?</h3>
              {openIndex === 1 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? "max-h-40 mt-4" : "max-h-0"}`}>
              <p className="text-gray-700"> <strong>We provide Thumbnails Generator, Description Generator, Title Suggestion, and SEO Analysis tools,</strong> all aimed at enhancing your video's visibility.</p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer
              ${openIndex === 2 ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
            onClick={() => toggleFAQ(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">Do I need an account to use the tools?</h3>
              {openIndex === 2 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? "max-h-40 mt-4" : "max-h-0"}`}>
              <p className="text-gray-700">Yes, creating a free account allows you to save your work and access all features seamlessly.</p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div
            className={`bg-white p-6 rounded-lg shadow transition-all cursor-pointer
              ${openIndex === 3 ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
            onClick={() => toggleFAQ(3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">How do I get started?</h3>
              {openIndex === 3 ? (
                <FaChevronUp className="text-blue-500 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-500 w-6 h-6" />
              )}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 3 ? "max-h-40 mt-4" : "max-h-0"}`}>
              <p className="text-gray-700">Simply click on any tool from the homepage, follow the instructions on that page, and <strong>start optimizing your content.</strong></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Faq;
