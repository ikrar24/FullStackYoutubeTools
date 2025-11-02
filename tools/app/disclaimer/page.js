import DisclaimerLogic from "./DisclaimerLogic";

export const metadata = {
  title: "Disclaimer – Your Website | Important Information & Legal Notice",
  description:
    "Read the Disclaimer of Your Website. All information and tools provided are for general informational purposes only. No guarantees of accuracy are made.",
  keywords: [
    "website disclaimer",
    "legal disclaimer",
    "terms and conditions disclaimer",
    "information accuracy notice",
    "liability disclaimer",
    "educational content disclaimer",
    "YouTube tool disclaimer",
    "AI tool disclaimer",
    "use at your own risk statement",
    "Your Website legal terms"
  ],
  openGraph: {
    title: "Disclaimer – Your Website",
    description:
      "This disclaimer explains the limitations of liability and accuracy of the content provided on Your Website. Please read carefully before using our services.",
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
    type: "article",
  },
};


const DisclaimerFun = ()=>{
    return <DisclaimerLogic/>
}


export default DisclaimerFun;