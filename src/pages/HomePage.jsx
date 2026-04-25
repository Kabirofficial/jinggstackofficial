import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jinggstacklogo.png";
import aiSvg from "../assets/ai.svg";
import cssSvg from "../assets/css.svg";
import htmlSvg from "../assets/html.svg";
import reactSvg from "../assets/react.svg";
import nodeSvg from "../assets/nodejs.svg";
import mongoSvg from "../assets/mongodb.svg";
import pythonSvg from "../assets/python.svg";
import phpSvg from "../assets/php.svg";
import gitSvg from "../assets/github.svg";
import tailwindSvg from "../assets/tailwind.svg";
import figmaSvg from "../assets/figma.svg";
import restSvg from "../assets/restapi.svg";
import sqlSvg from "../assets/sql.svg";
import n8nSvg from "../assets/n8n-color.svg";

const TechIcon = ({ children, name }) => (
  <div className="flex flex-col items-center gap-3 text-center group cursor-pointer">
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 transition-all duration-300 group-hover:border-[#DA4848] group-hover:bg-[#DA4848]/10 relative overflow-hidden">
      <div className="absolute top-1 left-1 text-[8px] font-mono text-[#FFFFFF]/30">SYS</div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFFFFF]/70 transition-all duration-300 group-hover:text-[#FFFFFF] grayscale group-hover:grayscale-0 group-hover:brightness-200">
        {children}
      </div>
    </div>
    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FFFFFF]/50 transition-colors duration-300 group-hover:text-[#DA4848]">
      {name}
    </span>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-6 sm:p-8 text-left hover:border-[#DA4848] transition-all duration-300 relative group overflow-hidden">
    <div className="absolute inset-0 bg-[#DA4848]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    <div className="relative z-10">
      <div className="text-4xl sm:text-5xl font-black text-[#FFFFFF] mb-2">{value}</div>
      <div className="text-[#DA4848] text-xs uppercase font-bold tracking-[0.2em]">{label}</div>
    </div>
  </div>
);

const HomePage = () => {
  const skills = [
    { name: "React", icon: <img src={reactSvg} alt="React" className="w-full h-full object-contain" /> },
    { name: "Node.js", icon: <img src={nodeSvg} alt="Node.js" className="w-full h-full object-contain" /> },
    { name: "MongoDB", icon: <img src={mongoSvg} alt="MongoDB" className="w-full h-full object-contain" /> },
    { name: "Python", icon: <img src={pythonSvg} alt="Python" className="w-full h-full object-contain" /> },
    { name: "Tailwind", icon: <img src={tailwindSvg} alt="Tailwind" className="w-full h-full object-contain" /> },
    { name: "Git", icon: <img src={gitSvg} alt="Git" className="w-full h-full object-contain" /> },
    { name: "REST APIs", icon: <img src={restSvg} alt="REST APIs" className="w-full h-full object-contain" /> },
    { name: "SQL", icon: <img src={sqlSvg} alt="SQL" className="w-full h-full object-contain" /> },
    { name: "Figma", icon: <img src={figmaSvg} alt="Figma" className="w-full h-full object-contain" /> },
    { name: "n8n", icon: <img src={n8nSvg} alt="n8n" className="w-full h-full object-contain" /> },
    { name: "AI/ML", icon: <img src={aiSvg} alt="AI/ML" className="w-full h-full object-contain" /> },
    { name: "GenAI", icon: <img src={aiSvg} alt="GenAI" className="w-full h-full object-contain" /> },
  ];

  return (
    <div className="bg-[#36064D] text-[#FFFFFF] min-h-screen pt-32 pb-20 selection:bg-[#DA4848] selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      <main className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center mb-24 sm:mb-32 text-center border-b border-[#FFFFFF]/10 pb-20">
          <div className="mb-12 relative group inline-block">
            <div className="absolute inset-0 bg-[#DA4848] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full scale-150" />
            <img
              src={logo}
              alt="JinggStack Logo"
              className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain"
            />
          </div>

          <p className="text-[#DA4848] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6">
            Freelance AI/ML Engineer & Full-Stack Developer
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-9xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-[0.9] mb-8">
            JINGGSTACK
          </h1>
          <p className="max-w-2xl text-[#FFFFFF]/80 font-light text-lg sm:text-xl leading-relaxed mb-12">
            Crafting intelligent digital solutions with precision. Specializing in AI-powered applications, workflow automation, and modern web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/projects" className="inline-flex items-center justify-center px-10 py-4 border border-[#FFFFFF] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-[#DA4848] hover:border-[#DA4848] transition-all duration-300">
              View My Work
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-[#FFFFFF]/30 text-[#FFFFFF]/80 font-bold uppercase tracking-widest text-sm hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatCard value="15+" label="Active Projects" />
            <StatCard value="2+" label="Years Experience" />
            <StatCard value="10+" label="AI Models Deployed" />
            <StatCard value="100%" label="System Reliability" />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-24 sm:mb-32 border-t border-[#FFFFFF]/10 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
               <p className="text-[#DA4848] uppercase tracking-[0.2em] text-sm font-bold mb-4">Infrastructure</p>
               <h2 className="text-4xl md:text-6xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-tight">
                 Technology <br /> Stack
               </h2>
            </div>
            <div className="hidden md:block w-1 h-24 bg-[#DA4848]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 bg-[#FFFFFF]/5 p-8 border border-[#FFFFFF]/10">
            {skills.map((skill) => (
              <TechIcon key={skill.name} name={skill.name}>
                {skill.icon}
              </TechIcon>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#DA4848] text-[#FFFFFF] p-12 md:p-24 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl uppercase font-black tracking-tighter mb-6 leading-tight">
              Ready to Build <br /> Something Great?
            </h2>
            <p className="text-[#FFFFFF]/90 font-light text-lg mb-0">
              Whether you need an AI solution, a modern web app, or workflow automation, I'm here to help turn your vision into reality.
            </p>
          </div>
          
          <Link to="/services" className="relative z-10 shrink-0 inline-flex items-center justify-center px-12 py-5 border-2 border-[#FFFFFF] text-[#FFFFFF] font-black uppercase tracking-[0.2em] text-sm hover:bg-[#FFFFFF] hover:text-[#DA4848] transition-all duration-300">
            Explore Services
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
