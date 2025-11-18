"use client";

import { useEffect, useState } from "react";
import ToolsBox from "../../Components/ToolsBox";
import ViwesCount from "@/ViewsCount/ViewsCount";

function ThumbnailsDownloaderLogic() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [Downloadingloading, setDownloadingloading] = useState(false);

  const [thumbnail, setThumbnail] = useState("");
  const [showResult, setShowResult] = useState(false);

  const baseLink =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";

//  page analyesis viwe 

useEffect(() => {
  ViwesCount();
}, [])






  // 📌 DOWNLOAD HANDLER (Direct Stream)
  const handleDownload = async () => {
    if (!thumbnail) return;

    try {
      setDownloadingloading(true);

      const res = await fetch(`${baseLink}/api/download/from-url`, {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
          "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
        },
        body: JSON.stringify({ url: thumbnail }),
      });

      if (!res.ok) {
        setDownloadingloading(false);
        return alert("Download failed!");
      }

      // Convert response stream → blob
      const blob = await res.blob();

      // Create temporary link
      const a = document.createElement("a");
      const downloadUrl = window.URL.createObjectURL(blob);
      a.href = downloadUrl;

      // extracted extension from thumbnail URL
      const ext = thumbnail.split(".").pop().split("?")[0];
      a.download = `bostviwers-thumbnail.${ext || "jpg"}`;

      a.click();
      window.URL.revokeObjectURL(downloadUrl);

      setDownloadingloading(false);
    } catch (error) {
      console.log(error);
      setDownloadingloading(false);
    }
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    try {
      setLoading(true);

      const api = await fetch(
        `${baseLink}/api/thumbnail?url=${encodeURIComponent(url)}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
          },
        }
      );

      const data = await api.json();
      setLoading(false);

      if (data?.userYoutubeDeatails?.thumbnails?.length > 0) {
        setThumbnail(data.userYoutubeDeatails.thumbnails[0]);
        setShowResult(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ToolsBox h1="YouTube Thumbnail Downloader">

      {/* SEARCH SECTION */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 w-full px-3 sm:px-6"
      >
        <div className="w-full md:w-auto md:max-w-[600px] flex-grow">
          <input
            type="text"
            placeholder="Paste YouTube URL (include https://)"
            className="w-full border border-gray-300 bg-white/70 text-gray-800 placeholder-gray-600 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-400 transition-all text-base"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] hover:shadow-lg hover:scale-[1.02]"
          } text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all cursor-pointer text-base w-full md:w-auto min-w-[180px]`}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Thumbnail"}
        </button>
      </form>

      {/* RESULT SECTION */}
      {showResult && (
        <section className="mt-10 w-full flex items-center justify-center flex-col px-3 sm:px-6">

          {/* THUMBNAIL IMAGE */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <img
              src={thumbnail}
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              alt="thumbnail"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <button
            type="button"
            className={`${
              Downloadingloading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] hover:shadow-lg hover:scale-[1.02]"
            } text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all cursor-pointer text-base w-full sm:w-auto mt-5`}
            disabled={Downloadingloading}
            onClick={handleDownload}
          >
            {Downloadingloading ? "Downloading..." : "Download Thumbnail"}
          </button>

        </section>
      )}
    </ToolsBox>
  );
}

export default ThumbnailsDownloaderLogic;
