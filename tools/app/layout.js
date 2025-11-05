import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Componets/Navbar";
import Footer from "@/Componets/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://bostviews.in"
    : "http://localhost:3000";



export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Boost Your YouTube Video",
  description:
    "Generate thumbnails, title, SEO-optimized descriptions, analyze your videos and more to grow your channel faster.",
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
    "video SEO performance analyzer",
  ],
  icons: {
    icon: [{ url: "/favicon.png?v=5", type: "image/png", sizes: "32x32" }],
    shortcut: ["/favicon.png?v=5"],
    apple: ["/favicon.png?v=5"],
  },
  openGraph: {
    title: "Free SEO Analysis Tool",
    description:
      "Free YouTube SEO Checker – Instantly analyze your video title, tags, description, hashtags and more. Get detailed SEO score insights.",
    url: "https://bostviews.in",
    siteName: "BostViews",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
            },
          }}
        />
      </body>
    </html>
  );
}
