import React from "react";
import { Link } from "react-router-dom";
import Hyperspeed from "../components/HyperSpeed";
import sysImg01 from "../assets/sys_img_01.png";
import sysImg02 from "../assets/sys_img_02.png";

const VastLandingPage = () => {
  return (
    <div className="bg-[#36064D] min-h-screen text-[#FFFFFF] font-sans selection:bg-[#DA4848] selection:text-[#FFFFFF] overflow-x-hidden pt-24">
      
      {/* 2. The Hero Section (Cinematic Full-Viewport) */}
      <section className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-[1600px] mx-auto mt-[-6rem]">
        {/* Cinematic Background - Hyperspeed */}
        <div className="absolute inset-0 z-0 bg-[#36064D] overflow-hidden">
          <Hyperspeed />
          <div className="absolute inset-0 bg-gradient-to-t from-[#36064D] via-[#36064D]/50 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
            <div className="w-16 h-1 bg-[#DA4848] shrink-0 mb-4 md:mb-8 md:hidden"></div>
            <div className="hidden md:block w-1.5 h-32 bg-[#DA4848] shrink-0 mb-4"></div>
            
            <div>
              <p className="text-[#DA4848] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4">
                Systems Engineering & Design
              </p>
              <h1 className="text-6xl md:text-9xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-[0.9]">
                Architect<br />
                The Future.
              </h1>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link to="/projects" className="inline-flex items-center justify-center px-10 py-4 border border-[#FFFFFF] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-[#DA4848] hover:border-[#DA4848] transition-all duration-300">
              View Intel
            </Link>
          </div>
        </div>
      </section>

      {/* 3. "The Mission" / Feature Sections (High Contrast Grids) */}
      
      {/* Section A: Mission */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto relative border-t border-[#FFFFFF]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <h2 className="text-4xl md:text-6xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-8 leading-tight">
              Precision in <br />
              <span className="text-[#DA4848]">Every Stack</span>
            </h2>
            <p className="text-[#FFFFFF]/80 font-light text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              We engineer uncompromising digital infrastructure. From scalable AI agents and complex vector databases to ultra-refined front-end interfaces, our mission is to build software that defies gravity and outlasts the competition.
            </p>
            <Link to="/about" className="inline-flex items-center justify-center px-10 py-4 border border-[#FFFFFF] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-[#DA4848] hover:border-[#DA4848] transition-all duration-300">
              Read Protocol
            </Link>
          </div>
          
          <div className="order-1 md:order-2 w-full aspect-square md:aspect-[4/5] bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#36064D]/50 mix-blend-multiply group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>
             <img src={sysImg01} alt="Systems Infrastructure" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute top-6 left-6 text-[#FFFFFF]/30 font-mono text-xs z-20">SYS_IMG_01</div>
             <div className="absolute bottom-6 right-6 w-3 h-3 bg-[#DA4848] z-20"></div>
          </div>
        </div>
      </section>

      {/* Section B: Capabilities */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#FFFFFF]/5 border-t border-[#FFFFFF]/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            
            <div className="w-full aspect-[16/9] md:aspect-square bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#36064D]/50 mix-blend-multiply group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>
               <img src={sysImg02} alt="Neural Architecture" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute top-6 right-6 text-[#FFFFFF]/30 font-mono text-xs z-20">SYS_IMG_02</div>
               <div className="absolute bottom-6 left-6 w-3 h-3 border border-[#DA4848] z-20"></div>
               
               {/* UI Grid lines inside placeholder for structure */}
               <div className="absolute inset-0 pointer-events-none z-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#DA4848] uppercase tracking-[0.2em] text-sm font-bold mb-6">Core Capabilities</p>
              <h2 className="text-4xl md:text-6xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-8 leading-tight">
                Architectural <br /> Superiority
              </h2>
              
              <div className="space-y-8 mb-10 w-full">
                <div className="border-b border-[#FFFFFF]/10 pb-6">
                  <h3 className="text-xl uppercase font-bold tracking-wider text-[#FFFFFF] mb-3">AI & Machine Learning</h3>
                  <p className="text-[#FFFFFF]/80 font-light leading-relaxed">Integration of Large Language Models, RAG architectures, and custom AI agents to automate and intelligently scale operations.</p>
                </div>
                <div className="border-b border-[#FFFFFF]/10 pb-6">
                  <h3 className="text-xl uppercase font-bold tracking-wider text-[#FFFFFF] mb-3">Full-Stack Monoliths</h3>
                  <p className="text-[#FFFFFF]/80 font-light leading-relaxed">High-performance React/Node applications backed by highly structured relational and non-relational databases.</p>
                </div>
                <div className="border-b border-[#FFFFFF]/10 pb-6">
                  <h3 className="text-xl uppercase font-bold tracking-wider text-[#FFFFFF] mb-3">Workflow Automation</h3>
                  <p className="text-[#FFFFFF]/80 font-light leading-relaxed">Connecting disparate systems using n8n and highly resilient APIs to forge unbreakable operational pipelines.</p>
                </div>
              </div>

              <Link to="/services" className="inline-flex items-center justify-center px-10 py-4 border border-[#FFFFFF] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-[#DA4848] hover:border-[#DA4848] transition-all duration-300">
                Explore Tech
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default VastLandingPage;
