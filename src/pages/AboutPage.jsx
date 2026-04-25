import React from "react";
import { Link } from "react-router-dom";
import ownerPhoto from "/profile.jpg";

const expertise = [
  { title: "AI/ML Engineering", description: "RAG systems, LLMs, computer vision, deep learning architecture." },
  { title: "Full-Stack Dev", description: "React, Node.js, Python, MongoDB, PostgreSQL, structured grids." },
  { title: "Automation", description: "n8n, custom APIs, intelligent agents, resilient pipelines." },
  { title: "UI/UX Design", description: "Premium interfaces, Figma, responsive design, aerospace aesthetics." },
];

const AboutPage = () => {
  return (
    <div className="bg-[#36064D] text-[#FFFFFF] min-h-screen pt-32 pb-20 selection:bg-[#DA4848] selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      <main className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <section className="border-b border-[#FFFFFF]/10 pb-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
             <p className="text-[#DA4848] uppercase tracking-[0.3em] text-sm font-bold mb-4">The Crew</p>
             <h1 className="text-5xl md:text-8xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-[0.9]">
               The Engineer <br /> Behind It All
             </h1>
          </div>
          <div className="hidden md:block w-2 h-24 bg-[#DA4848]"></div>
        </section>

        {/* Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
          
          {/* Photo */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 overflow-hidden group">
            <div className="absolute inset-0 bg-[#DA4848]/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>
            <img
              src={ownerPhoto}
              alt="JinggStack Founder"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 text-[#FFFFFF]/50 font-mono text-xs z-20">FOUNDER_ID_01</div>
            <div className="absolute bottom-6 right-6 w-3 h-3 bg-[#DA4848] z-20"></div>
            {/* Social Links under photo (absolute or inline) */}
            <div className="absolute bottom-6 left-6 z-20 flex gap-4">
              <a href="https://www.linkedin.com/in/thayanikabir/" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]/50 hover:text-[#DA4848] uppercase text-xs tracking-widest font-bold transition-colors">LinkedIn</a>
              <a href="https://github.com/Kabirofficial" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]/50 hover:text-[#DA4848] uppercase text-xs tracking-widest font-bold transition-colors">GitHub</a>
              <a href="https://www.kaggle.com/jinggxd" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]/50 hover:text-[#DA4848] uppercase text-xs tracking-widest font-bold transition-colors">Kaggle</a>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            <h2 className="text-3xl md:text-5xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-8 leading-tight">
              Hi, I'm the founder of <br />
              <span className="text-[#DA4848]">JINGGSTACK</span>
            </h2>

            <div className="space-y-6 text-[#FFFFFF]/80 font-light text-lg leading-relaxed max-w-2xl">
              <p>
                I'm an AI/ML Engineer and Full-Stack Developer with a deep passion for building
                intelligent systems that make a real impact. My expertise spans from developing
                sophisticated <strong className="text-[#FFFFFF] font-bold">RAG-based AI applications</strong> to
                creating <strong className="text-[#FFFFFF] font-bold">production-ready web platforms</strong>.
              </p>
              <p>
                My philosophy is simple: technology should solve problems elegantly. I believe in
                clean code, highly structured architecture, and user experiences that feel cinematic. Every
                project I undertake is treated as a mission where I work closely with clients
                to architect their vision into reality.
              </p>
              <p>
                When I'm not coding, I'm researching the latest in AI, contributing to open-source
                projects, or exploring new automation strategies to make workflows resilient and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-32">
          <div className="border-t border-[#FFFFFF]/10 pt-16 mb-12 flex justify-between items-center">
            <h2 className="text-4xl md:text-6xl uppercase font-black tracking-tighter text-[#FFFFFF]">
              Core Expertise
            </h2>
            <div className="w-16 h-1 bg-[#DA4848]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FFFFFF]/10 border border-[#FFFFFF]/10">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#36064D] p-10 md:p-16 hover:bg-[#FFFFFF]/5 transition-colors duration-300 relative group"
              >
                <div className="absolute top-8 right-8 text-[#FFFFFF]/20 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-[#DA4848] transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-2xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-4">{item.title}</h3>
                <p className="text-[#FFFFFF]/70 font-light leading-relaxed max-w-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-6">
            Initiate Protocol
          </h2>
          <p className="text-[#FFFFFF]/70 font-light max-w-xl mx-auto mb-10 text-lg">
            Have a project in mind? I'm always excited to discuss new challenges
            and build highly-structured solutions. Let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-[#DA4848] bg-[#DA4848] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-[#DA4848] transition-all duration-300">
              Get in Touch
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center px-10 py-4 border border-[#FFFFFF]/30 text-[#FFFFFF]/80 font-bold uppercase tracking-widest text-sm hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-all duration-300">
              View Missions
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
