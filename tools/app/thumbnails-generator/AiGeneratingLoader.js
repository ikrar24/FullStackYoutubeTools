import React from "react";

export default function AiGeneratingLoader({
  size = 340,
  mode = "light",
  text = "Generating",
  className,
}) {
  const isDark = mode === "dark";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`${className} relative flex items-end justify-center p-6 overflow-hidden`}
      style={{
        background: isDark
          ? "linear-gradient(270deg, #0b0f1a, #111a2f, #1a2240)"
          : "linear-gradient(270deg, #e7f0ff, #f5edff, #f9f9ff)",
      }}
    >
      {/* ✅ Animated Gradient Background */}
      <div
        className="absolute inset-0 animate-bg-move"
        style={{
          background: isDark
            ? "linear-gradient(270deg, #1a2240, #3a4fff, #9b5cff, #6ef0ff)"
            : "linear-gradient(270deg, #a7c4ff, #c7a9ff, #d0e4ff, #ffe7ff)",
          backgroundSize: "400% 400%",
          zIndex: 0,
          opacity: 0.4,
        }}
      ></div>

      {/* Loader content */}
      <div
        style={{ width: size, zIndex: 1 }}
        className="relative select-none flex flex-col items-center"
      >
        {/* Text */}
        <div className="flex items-center gap-2 mb-3">
          <span
            style={{ color: isDark ? "rgb(220,227,255)" : "rgb(43,43,92)" }}
            className="font-semibold text-2xl"
          >
            {text}
          </span>
          <span aria-hidden="true" className="flex items-center" style={{ height: 24 }}>
            <i className="dot dot1" />
            <i className="dot dot2" />
            <i className="dot dot3" />
          </span>
        </div>

        {/* Floating Dots */}
        <div className="relative w-full top-10 h-36">
          <div className="floating-dot dotA" aria-hidden="true" />
          <div className="floating-dot dotB" aria-hidden="true" />
          <div className="floating-dot dotC" aria-hidden="true" />
          <div className="floating-dot dotD" aria-hidden="true" />
        </div>

        <style jsx>{`
          /* Animated Background */
          @keyframes bgMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-bg-move {
            animation: bgMove 8s ease-in-out infinite;
          }

          /* Dots after text */
          .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 99px;
            margin: 0 2px;
            background: ${isDark ? "#9fc9ff" : "#5b8cff"};
            transform: translateY(0);
            opacity: 0.95;
          }
          .dot1 {
            animation: updown 1.1s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .dot2 {
            animation: updown 1.1s 0.15s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .dot3 {
            animation: updown 1.1s 0.3s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          @keyframes updown {
            0% {
              transform: translateY(0);
              opacity: 0.9;
            }
            50% {
              transform: translateY(-8px);
              opacity: 1;
            }
            100% {
              transform: translateY(0);
              opacity: 0.9;
            }
          }

          /* Floating Dots */
          .floating-dot {
            position: absolute;
            border-radius: 999px;
            background: ${isDark
              ? "linear-gradient(180deg,#3aa2ff,#7f6bff)"
              : "linear-gradient(180deg,#7fb7ff,#c9a9ff)"};
            opacity: 0.95;
            filter: blur(0.2px);
            box-shadow: 0 8px 20px rgba(75, 85, 99, 0.08);
          }
          .dotA {
            left: 10%;
            top: 18%;
            width: 14px;
            height: 14px;
            animation: floatA 3.8s ease-in-out infinite;
          }
          .dotB {
            left: 32%;
            top: 8%;
            width: 10px;
            height: 10px;
            animation: floatB 4.6s ease-in-out infinite;
          }
          .dotC {
            left: 60%;
            top: 12%;
            width: 12px;
            height: 12px;
            animation: floatC 3.5s ease-in-out infinite;
          }
          .dotD {
            left: 82%;
            top: 22%;
            width: 9px;
            height: 9px;
            animation: floatD 5.1s ease-in-out infinite;
          }

          @keyframes floatA {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.95;
            }
            50% {
              transform: translateY(-18px) scale(1.05);
              opacity: 1;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.95;
            }
          }
          @keyframes floatB {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes floatC {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-16px);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes floatD {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-22px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @media (max-width: 420px) {
            .dot {
              width: 6px;
              height: 6px;
              margin: 0 1px;
            }
            .floating-dot {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
