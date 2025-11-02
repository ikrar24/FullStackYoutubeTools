
import TileSuggestion from "./TitleSuggestionLogic.js";

export const metadata = {
  title: "YouTube Title Generator – Free AI Tool to Create Catchy & SEO-Friendly Titles",
  description:
    "Free AI YouTube Title Generator – Instantly create engaging, clickable, and SEO-optimized YouTube titles. Boost your video views, improve ranking, and attract more audience with AI-powered title ideas.",
  keywords: [
    "YouTube title generator",
    "AI YouTube title maker",
    "YouTube video title generator",
    "free YouTube title creator",
    "SEO friendly YouTube title generator",
    "catchy YouTube titles",
    "AI tool for YouTube titles",
    "generate YouTube titles online",
    "YouTube title ideas generator",
    "YouTube title optimization tool",
    "best YouTube title generator free",
    "YouTube video title suggestions",
    "AI powered YouTube title writer",
    "YouTube title generator for ranking",
    "YouTube content title generator"
  ],
  openGraph: {
    title: "Free AI YouTube Title Generator Tool",
    description:
      "Generate catchy and SEO-optimized YouTube titles instantly with our free AI tool. Perfect for creators who want better visibility and engagement.",
    url: "http://localhost:3000/",
    siteName: "BootsViews",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "SEO Analysis Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const  TitleSuggestion =()=>{
return <TileSuggestion/>
}


export default TitleSuggestion