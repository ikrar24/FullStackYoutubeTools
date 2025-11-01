"use client";

import React, { useEffect } from "react";
import BoostViewsExplanation from "@/Componets/Explanation";
import Faq from "@/Componets/Faq";
import Hero from "@/Componets/Hero";
import HowTiWork from "@/Componets/HowTiWork";

function Page() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      const slug = window.location.pathname;

      if (slug === "/") {
        fetch(`http://localhost:4000/api/views?slug=${slug}`)
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
