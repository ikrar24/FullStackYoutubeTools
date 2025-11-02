import AnalyzingLogic from "./analyzingLogic";



export const metadata = {
title: "YouTube Video SEO Checker – Free Online Tool to Analyze SEO Instantly",
  description:"Free YouTube SEO Checker – Instantly analyze your video title, tags, description, hashtags and more. Get detailed SEO score insights and learn how to optimize your videos for higher ranking and more organic views on YouTube.",
 keywords: [
  "YouTube SEO checker",
  "YouTube video SEO analyzer",
  "YouTube SEO tool free",
  "YouTube SEO score checker",
  "YouTube video optimization",
  "YouTube tags and description analyzer",
  "YouTube keyword research tool",
  "YouTube title optimization",
  "YouTube SEO audit online",
  "AI YouTube SEO checker",
  "YouTube SEO analysis tool",
  "free YouTube ranking checker",
  "optimize YouTube videos for ranking",
  "YouTube SEO improvement tool",
  "video SEO performance analyzer"
],
  openGraph: {
    title: "Free SEO Analysis Tool",
    description:
      "Free YouTube SEO Checker – Instantly analyze your video title, tags, description, hashtags and more. Get detailed SEO score insights.",
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

export default function Page() {
  return <AnalyzingLogic />;
}
