import React, { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [fadingOut, setFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SECURE CONNECTION");

  useEffect(() => {
    const statuses = [
      "INITIALIZING SECURE CONNECTION",
      "LOADING AEROSPACE ASSETS",
      "CALIBRATING NEURAL NETWORKS",
      "ESTABLISHING SYSTEM PROTOCOLS",
      "ALL SYSTEMS NOMINAL"
    ];
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 5) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setStatus("ALL SYSTEMS NOMINAL");
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(onFinish, 800);
        }, 600);
      } else {
        setStatus(statuses[Math.floor(currentProgress / 20)]);
      }
      setProgress(currentProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#36064D] z-50 transition-opacity duration-1000 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      
      <div className="w-full max-w-lg px-6 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-[#FFFFFF] mb-12 select-none flex items-center gap-4">
          JINGG<span className="text-[#DA4848]">STACK</span>
        </h1>
        
        <div className="w-full mb-4 flex justify-between text-xs font-mono font-bold tracking-widest uppercase">
          <span className="text-[#DA4848] animate-pulse">{status}</span>
          <span className="text-[#FFFFFF]">{progress}%</span>
        </div>
        
        <div className="w-full h-1 bg-[#FFFFFF]/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-[#DA4848] transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="w-full mt-4 flex justify-between text-[#FFFFFF]/30 text-[10px] font-mono tracking-widest uppercase">
          <span>SYS_BOOT_SEQ_01</span>
          <span>LAT: 45.9 / LONG: -12.4</span>
        </div>
      </div>
    </div>
  );
}
