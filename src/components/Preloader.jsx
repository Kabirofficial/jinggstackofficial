import React, { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(onFinish, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border-t-4 border-l-4 border-purple-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-purple-900/40 animate-pulse"></div>
        </div>
      </div>

      <h1
        className="text-4xl font-black tracking-wider animate-pulse"
        style={{
          color: "rgba(178, 102, 255, 0.9)",
          textShadow:
            "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)",
        }}
      >
        JinggStack
      </h1>
      <p className="text-purple-400/70 mt-4 text-sm tracking-[0.3em] uppercase">
        Loading Experience
      </p>
    </div>
  );
}
