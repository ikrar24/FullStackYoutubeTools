import ThumbnailsGeneretorLogic from "./ThumbnailsGeneretorLogic";


export const metadata = {
  title: "YouTube Thumbnail Generator – Free AI Tool to Create Eye-Catching Thumbnails Instantly",
  description:
    "Free AI YouTube Thumbnail Generator – Instantly create attractive, high-quality, and clickable YouTube thumbnails. Boost your video CTR, views, and engagement with stunning AI-generated designs.",
  keywords: [
    "YouTube thumbnail generator",
    "AI YouTube thumbnail maker",
    "free YouTube thumbnail generator",
    "YouTube video thumbnail creator",
    "custom YouTube thumbnail maker",
    "YouTube thumbnail design tool",
    "AI tool for YouTube thumbnails",
    "generate YouTube thumbnail online",
    "best YouTube thumbnail generator free",
    "create YouTube thumbnail instantly",
    "YouTube thumbnail maker online free",
    "AI powered YouTube thumbnail creator",
    "YouTube video image generator",
    "YouTube thumbnail design AI tool",
    "eye-catching YouTube thumbnails"
  ],
  openGraph: {
    title: "Free AI YouTube Thumbnail Generator Tool",
    description:
      "Create professional, eye-catching YouTube thumbnails instantly using our free AI-powered generator. Boost your video clicks and engagement effortlessly.",
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



 const ThumbnailsGeneretor = ()=>{
  return <ThumbnailsGeneretorLogic/>
}

export default ThumbnailsGeneretor;