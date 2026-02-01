import React from "react";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointing-events-none"></div>

      <div className="relative z-10">
        <h1
          className="text-9xl font-black mb-4 tracking-tighter"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px rgba(168, 85, 247, 0.5)",
            textShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
          }}
        >
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
          The page you are looking for seems to have been lost in the digital
          void.
        </p>

        <Button to="/home" variant="primary" className="text-lg px-8 py-3">
          Return Home
        </Button>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rounded-full animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 border border-blue-500/30 rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
