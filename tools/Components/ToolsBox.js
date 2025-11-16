import Head from "next/head";
import React from "react";


export const metadata = {
  title: "Free SEO Analysis Tool - Improve Your Website Ranking",
  description:
    "Analyze your website's SEO performance with our free SEO analysis tool. Check meta titles, descriptions, and keyword optimization instantly.",
  keywords: [
    "SEO tool",
    "SEO analysis",
    "meta title checker",
    "website optimization",
    "SEO audit",
  ],
  openGraph: {
    title: "Free SEO Analysis Tool",
    description:
      "Improve your website ranking with a free SEO analysis. Check your titles, descriptions, and keywords easily.",
    url: "https://yourwebsite.com/seo-analysis",
    siteName: "Your Website",
    images: [
      {
        url: "https://yourwebsite.com/seo-preview.png",
        width: 1200,
        height: 630,
        alt: "SEO Analysis Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};




function ToolsBox({ children, h1, className, DivWidth }) {
  return (
    <>
  
    <main
      className={`min-h-screen flex flex-col ${className} bg-gradient-to-br from-[#f9c5d1] via-[#9795f0] to-[#fbc7d4] px-2 sm:px-6 py-8`}
    >
      <div
        className={`${DivWidth}  p-4 sm:p-6 text-center w-full`}
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-wide">
          {h1}
        </h1>
        {children}
      </div>
    </main>

    </>
  );
}

export default ToolsBox;
