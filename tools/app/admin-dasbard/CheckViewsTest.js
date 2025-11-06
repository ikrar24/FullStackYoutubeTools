"use client";
import React, { useEffect } from "react";


  // base url 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000" ;
  // console.log(baseUrl);

const CheckViewsTest = () => {
  useEffect(() => {
    // console.log("hello");
    
    const fetchViews = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/views/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Views API Response:", data);
      } catch (error) {
        console.error("❌ Error fetching views:", error);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold">🔍 Checking Views API...</h2>
      <p>Open console (F12 → Console tab) to see the response.</p>
    </div>
  );
};

export default CheckViewsTest;
