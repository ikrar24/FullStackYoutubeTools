"use client";
import React, { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";

const CheckViewsTest = () => {
  const [viewsData, setViewsData] = useState([]);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/views/all`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        let data = await response.json();

        // 🔥 SORT in frontend (Highest views → Lowest)
        data = data.sort((a, b) => b.views - a.views);

        setViewsData(data); // Update state (UI update)
        console.log("🔥 Live Sorted Data:", data);
      } catch (error) {
        console.error("❌ Error fetching views:", error);
      }
    };

    // -----------------------
    // 🚀 Fetch initial data
    fetchViews();

    // -----------------------
    // 🔄 Live update every 5 seconds
    const interval = setInterval(fetchViews, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold">🔍 Live Views + Sorted</h2>

      <p className="mt-4">Real-time Slug Views (Sorted DESC):</p>

      <div className="mt-6 space-y-2">
        {viewsData.map((item, index) => (
          <div
            key={item.slug}
            className="bg-gray-100 p-3 rounded-md shadow-sm flex justify-between"
          >
            <span>{index + 1}. {item.slug}</span>
            <span className="font-bold">{item.views} views</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckViewsTest;
