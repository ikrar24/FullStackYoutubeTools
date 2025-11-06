"use client";

import React, { useEffect } from "react";
import BoostViewsExplanation from "@/Componets/Explanation";
import Faq from "@/Componets/Faq";
import Hero from "@/Componets/Hero";
import HowTiWork from "@/Componets/HowTiWork";

function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const slug = window.location.pathname;

      
        // base url 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000" ;
  console.log(baseUrl);
      

      if (slug === "/") {
        fetch(`${baseUrl}/api/views?slug=${slug}`, {
          headers: {
            "x-client-key":process.env.NEXT_PUBLIC_SECRETE_KEY,
          },
        });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <HowTiWork />
      <BoostViewsExplanation />
      <Faq />
    </>
  );
}

export default Page;
