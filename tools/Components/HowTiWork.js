import React from 'react';
import Link from 'next/link';
import { FaPhotoVideo, FaFileAlt, FaLightbulb, FaChartLine, FaImage } from 'react-icons/fa';

function HowItWorks() {
  const tools = [
    {
      name: "SEO Analysis",
      description: "Analyze your videos for SEO performance and get actionable insights to boost views.",
      href: "/seo-analyzer",
      icon: <FaChartLine className="w-8 h-8 text-white" />
    },
    {
      name: "Description Generator",
      description: "Write for better SEO and higher search rankings.",
      href: "/description-generator",
      icon: <FaFileAlt className="w-8 h-8 text-white" />
    },
    {
      name: "Title Suggestion",
      description: "Generate catchy, keyword-rich titles that grab attention and improve discoverability.",
      href: "/title-suggestion",
      icon: <FaLightbulb className="w-8 h-8 text-white" />
    },
 {
  name: "Thumbnails Downloader",
  description: "Download high-quality YouTube thumbnails instantly in HD, HQ, SD or any available format.",
  href: "/thumbnails-downloader",
  icon: <FaImage className="w-8 h-8 text-white" />
}
,
    {
      name: "Thumbnails Generator",
      description: "Create eye-catching thumbnails that increase click-through rates and attract more viewers.",
      href: "/thumbnails-generator",
      icon: <FaPhotoVideo className="w-8 h-8 text-white" />
    },
  ];

  return (
    <section className="w-full text-black py-20 px-4 bg-linear-to-r from-white-500 to-gray-100 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How to Get More Views
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          <strong>Boost your YouTube SEO</strong> effortlessly with our <strong>powerful AI tools.</strong> Each tool is designed to <strong>optimize your content</strong>, increase visibility, and attract more viewers. Explore our most essential tools below and see the benefits for yourself:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Link 
              key={tool.name} 
              href={tool.href} 
              className=" bg-opacity-10 hover:bg-opacity-30 transition p-6 rounded-xl shadow-lg flex flex-col items-center text-red-400  text-center"
            >
              <div className="bg-indigo-700 p-4 rounded-full mb-4 flex items-center justify-center">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-800">{tool.description}</p>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-gray-800 text-lg">
          Click on any tool to get started. All usage instructions are available on the tool pages themselves, making it easy for you to optimize your content step by step.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
