import ThumbnailsDownloaderLogic from "./ThumbnailsDownloaderLogic";


export const metadata = {
  title: "YouTube Thumbnails Downloader – Free HD Thumbnail Download Tool",
  description:
    "Download YouTube video thumbnails instantly in HD, Full HD, and 4K quality. Just paste the video URL and get all thumbnail sizes for free with the YouTube Thumbnails Downloader tool.",
  keywords: [
    "YouTube Thumbnails Downloader",
    "Download YouTube Thumbnail",
    "Free YouTube Thumbnail Download Tool",
    "YouTube HD Thumbnail Downloader",
    "4K YouTube Thumbnail Downloader",
    "YouTube Thumbnail Grabber",
    "YouTube Video Image Downloader",
    "YouTube Thumbnail URL Extractor",
    "Get YouTube Thumbnail in HD",
    "Download YouTube Video Cover",
    "YouTube Thumbnail Saver Online",
    "Instant YouTube Thumbnail Generator",
    "High Quality YouTube Thumbnail Download",
    "YouTube Thumbnail Downloader Online Free",
    "Download YouTube Thumbnail Image",
  ],
  openGraph: {
    title: "Free YouTube Thumbnails Downloader – Download in HD & 4K",
    description:
      "Easily download YouTube video thumbnails in HD, Full HD, and 4K for free. Fast, secure, and mobile-friendly YouTube Thumbnail Downloader tool.",
    url: "http://localhost:3000/thumbnails-downloader",
    siteName: "BoostViews",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnails Downloader Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnails Downloader – Free HD & 4K Download Tool",
    description:
      "Instantly download YouTube video thumbnails in HD, Full HD, and 4K. 100% free, no watermark, mobile-friendly downloader tool.",
    images: ["/opengraph.jpeg"],
  },
};

export default function Page() {
  return <ThumbnailsDownloaderLogic/>;
}
