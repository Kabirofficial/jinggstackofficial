import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import netfliximg from "../assets/webimg/netflix.jpeg";
import futuristicportfolioimg from "../assets/webimg/futuristicportfolio.png";
import yumyardImg from "../assets/webimg/YumYard.png";
import civiclensImg from "../assets/webimg/civiclens.png";
import resumescreenerImg from "../assets/webimg/airesume.png";
import jinggdeskImg from "../assets/webimg/jinggdesk.png";
import snfilmzImg from "../assets/webimg/snfilmz.png";
import n8nautomationImg from "../assets/webimg/n8n.png";
import jinggstackImg from "../assets/webimg/RAG.png";

const ProjectCard = ({ project, index }) => {
  const isAI = project.technologies.some(t =>
    ['Python', 'LLMs', 'AI', 'ML', 'YOLOv8', 'RAG', 'LangChain', 'FAISS', 'LangGraph'].some(ai => t.includes(ai))
  );

  return (
    <div className="relative group w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 overflow-hidden hover:border-[#DA4848] transition-colors duration-500">
      {/* Image Container */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-[#FFFFFF]/10">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-[#36064D]/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
        
        {isAI && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#DA4848] text-[#FFFFFF] text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              AI Core
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4 text-[#FFFFFF]/50 font-mono text-xs z-20 uppercase tracking-widest font-bold">
          PRJ_0{index + 1}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-8">
        <h3 className="text-2xl font-black text-[#FFFFFF] uppercase tracking-tighter mb-4 group-hover:text-[#DA4848] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#FFFFFF]/70 text-sm font-light leading-relaxed mb-8 h-20 overflow-hidden">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="border border-[#FFFFFF]/20 text-[#FFFFFF]/50 text-[10px] font-bold uppercase tracking-wider px-2 py-1">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-[#FFFFFF]/10">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FFFFFF]/70 hover:text-[#DA4848] text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <FaGithub size={16} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FFFFFF]/70 hover:text-[#DA4848] text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projectsData = [
    {
      id: 1,
      title: "JinggStack AI Bot",
      description: "A personal AI assistant built with agent-based architecture that understands projects, codebases, and resumes to provide contextual help and code insights.",
      technologies: ["Python", "LangGraph", "LLMs", "Vector DB"],
      imageUrl: jinggstackImg,
      repoUrl: "https://github.com/Kabirofficial/jinggstack-RAG",
    },
    {
      id: 2,
      title: "CivicLens",
      description: "AI-powered civic issue detection using YOLOv8, GPS tagging, and smart duplicate filtering for potholes and garbage detection.",
      technologies: ["Python", "YOLOv8", "FastAPI", "React"],
      imageUrl: civiclensImg,
      repoUrl: "https://github.com/Kabirofficial/CivicLens",
    },
    {
      id: 3,
      title: "RAG Resume Screener",
      description: "Intelligent resume screening using RAG to match resumes with job descriptions and rank candidates with explainable AI.",
      technologies: ["Python", "LangChain", "FAISS", "FastAPI"],
      imageUrl: resumescreenerImg,
      repoUrl: "https://github.com/Kabirofficial/AI-Resume-Screening",
    },
    {
      id: 4,
      title: "n8n AI Automation",
      description: "AI-powered automation workflows including email auto-responder, summarizer, and HR hiring assistant.",
      technologies: ["n8n", "LLMs", "Gmail API", "Meta API"],
      imageUrl: n8nautomationImg,
    },
    {
      id: 5,
      title: "JinggDesk",
      description: "Full-stack task management with admin/user roles, JWT auth, dashboards, and exportable reports.",
      technologies: ["MERN", "Tailwind", "JWT", "MongoDB"],
      imageUrl: jinggdeskImg,
    },
    {
      id: 6,
      title: "SnFilmz Portfolio",
      description: "Professional filmmaker portfolio showcasing reels, private shoots, and booking system.",
      technologies: ["React", "Tailwind", "Vercel"],
      imageUrl: snfilmzImg,
      liveUrl: "https://snfilmz.vercel.app/",
    },
    {
      id: 7,
      title: "YumYard Recipe App",
      description: "Modern recipe app with adding, viewing, and favoriting recipes functionality.",
      technologies: ["MERN", "Tailwind"],
      imageUrl: yumyardImg,
      repoUrl: "https://github.com/your-username/YumYard",
    },
    {
      id: 8,
      title: "Futuristic Portfolio",
      description: "Cyberpunk-themed portfolio with 3D elements, Three.js animations, and responsive design.",
      technologies: ["Three.js", "SCSS", "JavaScript"],
      imageUrl: futuristicportfolioimg,
      repoUrl: "https://github.com/Kabirofficial/kabir-futuristic-portfolio",
      liveUrl: "https://kabirofficial.github.io/kabir-futuristic-portfolio/",
    },
    {
      id: 9,
      title: "Netflix Clone",
      description: "Frontend clone with responsive layout, styled cards, and hover interactions.",
      technologies: ["HTML", "CSS"],
      imageUrl: netfliximg,
      repoUrl: "https://github.com/Kabirofficial/Netflix-clone",
    },
  ];

  return (
    <div className="bg-[#36064D] text-[#FFFFFF] min-h-screen pt-32 pb-20 selection:bg-[#DA4848] selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      <main className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <section className="border-b border-[#FFFFFF]/10 pb-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
             <p className="text-[#DA4848] uppercase tracking-[0.3em] text-sm font-bold mb-4">Operations Log</p>
             <h1 className="text-5xl md:text-8xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-[0.9]">
               Completed <br /> Missions
             </h1>
          </div>
          <div className="hidden md:block w-2 h-24 bg-[#DA4848]"></div>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-6">
            Access Full Database
          </h2>
          <p className="text-[#FFFFFF]/70 font-light max-w-xl mx-auto mb-10 text-lg">
            Review the complete archive of source code, experiments, and open-source contributions.
          </p>
          <a
            href="https://github.com/Kabirofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#FFFFFF] text-[#FFFFFF] font-bold uppercase tracking-widest text-sm hover:bg-[#FFFFFF] hover:text-[#36064D] transition-all duration-300"
          >
            <FaGithub size={18} />
            GitHub Repository
          </a>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
