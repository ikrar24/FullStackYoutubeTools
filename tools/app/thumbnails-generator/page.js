"use client";

import React, { useEffect, useState } from "react";
import AiGeneratingLoader from "./AiGeneratingLoader";
import Script from "next/script";
import Link from "next/link";

function Page() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [VideoTopic, setVideoTopic] = useState("");
  const [Loading, setLoading] = useState(false);
  const [ErrorOnImage, setErrorOnImage] = useState(false);

  // 🔒 Overlay state (true = show modal, false = hide)
  const [showOverlay, setShowOverlay] = useState(true);

  const tprompt = `Create a high-quality YouTube thumbnail for a ${VideoTopic} video. Use bright and eye-catching colors. Include bold text that says "${VideoTitle}" in an easy-to-read font. Add relevant images or illustrations that represent ${VideoTopic}, with a clear and engaging visual style. The thumbnail should look modern, professional, and visually appealing.`;

  // 🧭 Track views
  useEffect(() => {
    fetch(`http://localhost:4000/api/views?slug=${window.location.pathname}`);
  }, []);

  // 🚫 Disable background scroll when overlay is visible
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);

  // 📡 API Call
  const ApiCall = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: tprompt,
          }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }

      const result = await response.blob();
      const imageUrl = URL.createObjectURL(result);
      console.log("Generated Image URL:", imageUrl);
    } catch (error) {
      console.error("API error:", error);
      setErrorOnImage(true);
    } finally {
      setLoading(false);
    }
  };

  // 📩 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    ApiCall();
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9c5d1] via-[#9795f0] to-[#fbc7d4] px-4 py-8">
        <div className="w-full max-w-2xl rounded-2xl p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wide">
            Create Free Thumbnails
          </h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Video Title"
              className="border border-gray-300 bg-white/70 text-gray-800 placeholder-gray-600 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={VideoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Video Topic"
              className="border border-gray-300 bg-white/70 text-gray-800 placeholder-gray-600 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={VideoTopic}
              onChange={(e) => setVideoTopic(e.target.value)}
            />

            {/* Image Section */}
            <section className="w-full flex items-center justify-center h-[250px] max-w-[600px] overflow-hidden rounded-lg shadow-md bg-black">
              {ErrorOnImage ? (
                <p className="text-red-500">Error generating thumbnail</p>
              ) : Loading ? (
                <AiGeneratingLoader
                  size={100}
                  mode="light"
                  text="Generating"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=600&q=90&fit=clip"
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              )}
            </section>

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-semibold py-3 rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              Create
            </button>
          </form>
        </div>
      </main>

  

      {/* ❗ Modal Overlay (scroll disabled) */}
      {showOverlay && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
  <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
    <p className="font-bold text-red-500 text-2xl sm:text-3xl md:text-4xl mb-4">
      Currently Unusable
    </p>

    <Link
      href="/"
      className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      Go To Home
    </Link>
  </div>
</div>
      )}
    </>
  );
}

export default Page;
