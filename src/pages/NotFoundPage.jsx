import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-[#36064D] text-[#FFFFFF] min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-center font-sans">
      
      {/* Cinematic Background Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#36064D] to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-[#DA4848] uppercase tracking-[0.4em] font-bold text-sm mb-4 animate-pulse">
          Critical Error
        </p>
        
        <h1 className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter leading-none text-[#FFFFFF]/5 select-none mb-[-2rem] md:mb-[-4rem]">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter mb-6">
          System Override <br /> Signal Lost
        </h2>
        
        <p className="text-[#FFFFFF]/70 font-light max-w-md mx-auto mb-12 text-base md:text-lg">
          The requested coordinate does not exist in the current database. Re-calibrate your navigation systems.
        </p>

        <Link to="/home" className="inline-flex items-center justify-center px-10 py-4 border border-[#DA4848] bg-[#DA4848] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-[#DA4848] transition-all duration-300">
          Abort to Home Base
        </Link>
      </div>

      <div className="absolute top-12 left-12 text-[#FFFFFF]/30 font-mono text-xs uppercase tracking-widest">
        SYS_ERR_404
      </div>
      <div className="absolute bottom-12 right-12 text-[#DA4848] font-mono text-xs uppercase tracking-widest animate-pulse">
        RE-ROUTING...
      </div>
    </div>
  );
};

export default NotFoundPage;
