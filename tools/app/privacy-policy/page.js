import PrivacyPolicyLogic from "./PrivacyPolicyLogic";

export const metadata = {
  title: "Privacy Policy | BostViews",
  description:
    "Read the privacy policy of BostViews to understand how we collect, use, and protect your personal data while using our AI-powered YouTube tools and services.",
  keywords: [
    "Privacy Policy",
    "BostViews Privacy",
    "Data Protection",
    "User Information",
    "AI Tools Privacy",
    "YouTube SEO Tools",
  ],
  openGraph: {
    title: "Privacy Policy | BostViews",
    description:
      "Learn how BostViews handles and protects your information while using our AI tools for YouTube SEO and growth.",
    url: "https://bostviews.in/privacy-policy",
    siteName: "BostViews",
    images: [
      {
        url: "https://bostviews.in/og-image.png", // 🔹 apne OG image ka path yah dal do (from public folder)
        width: 1200,
        height: 630,
        alt: "BostViews Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BostViews",
    description:
      "Understand BostViews' commitment to privacy and data protection while using our AI-based YouTube tools.",
    images: ["https://bostviews.in/og-image.png"], // same image use kar sakte ho
  },
  alternates: {
    canonical: "https://bostviews.in/privacy-policy",
  },
};

const PrivacyPolicy = () => {
  return <PrivacyPolicyLogic />;
};

export default PrivacyPolicy;
