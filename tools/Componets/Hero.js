import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic"; // lazy loading for heavy components
import Image from "next/image";

// HeroImage ko dynamic import nahi karte kyunki hero important hai → priority true rakhte hain
import HeroImage from "../Assets/HeroImage.png";

function Hero() {
  return (
    <main className="w-screen h-auto md:h-screen overflow-hidden flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-7xl mx-auto py-10 md:py-0">

        {/* Left Content */}
        <section className="w-full md:w-1/2 text-black flex flex-col justify-center items-start gap-6 p-6 md:p-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Boost Your <span className="text-blue-500">YouTube Growth</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Generate <strong>thumbnails,</strong> <strong>title,</strong> <strong className="text-red-500">SEO-optimized</strong> <strong>descriptions</strong> and more to <strong>grow your channel faster.</strong>
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Get Started Free
          </Link>
        </section>

        {/* Right Image / Visual */}
        <section className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div className="relative bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl w-[95%] h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
            <Image
              src={HeroImage}
              alt="Hero Image"
              fill
              className="object-cover"
              priority  // important for LCP
              quality={75} // image size reduce, still high quality
            />
          </div>
        </section>

      </div>
    </main>
  );
}

export default Hero;
