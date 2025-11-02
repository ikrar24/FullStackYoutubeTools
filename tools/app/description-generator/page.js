import DescriptionGeneratorLogic from "./DecriptionsGeneretorLogic";


export const metadata = {
  title: "YouTube Description Generator – Free AI Tool to Create SEO-Optimized Video Descriptions",
  description:
    "Free AI YouTube Description Generator – Instantly generate engaging, SEO-friendly YouTube video descriptions, titles, and tags. Boost video ranking, improve visibility, and attract more organic views effortlessly.",
  keywords: [
    "YouTube description generator",
    "AI YouTube description writer",
    "YouTube SEO description tool",
    "YouTube video description maker",
    "free YouTube description generator",
    "AI tool for YouTube descriptions",
    "generate YouTube video description online",
    "SEO friendly YouTube description",
    "YouTube video title and description generator",
    "YouTube content optimization tool",
    "YouTube description generator AI free",
    "best YouTube description creator",
    "auto generate YouTube tags and descriptions",
    "AI powered YouTube description generator",
    "optimize YouTube description for ranking"
  ],
  openGraph: {
    title: "Free AI YouTube Description Generator Tool",
    description:
      "Generate SEO-optimized YouTube video descriptions instantly using AI. Improve engagement and ranking with our free online description generator tool.",
    url: "https://yourwebsite.com/youtube-description-generator",
    siteName: "Your Website",
    images: [
      {
        url: "https://yourwebsite.com/youtube-description-preview.png",
        width: 1200,
        height: 630,
        alt: "YouTube Description Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



const DescriptionGenerator = ()=>{
  return <DescriptionGeneratorLogic/>
}

export default DescriptionGenerator