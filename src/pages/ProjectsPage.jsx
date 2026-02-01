import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import netfliximg from "../assets/webimg/netflix.jpeg";
import nikebrandpageimg from "../assets/webimg/nikebrandpage.jpeg";
import riotimg from "../assets/webimg/riot.jpeg";
import dicegameimg from "../assets/webimg/dicegame.jpeg";
import spotifyimg from "../assets/webimg/spotify.jpeg";
import primevideoimg from "../assets/webimg/primevideo.jpeg";
import jsprojectsimg from "../assets/webimg/jsminiproject.png";
import futuristicportfolioimg from "../assets/webimg/futuristicportfolio.png";
import yumyardImg from "../assets/webimg/YumYard.png";
import civiclensImg from "../assets/webimg/civiclens.png";
import resumescreenerImg from "../assets/webimg/airesume.png";
import jinggdeskImg from "../assets/webimg/jinggdesk.png";
import snfilmzImg from "../assets/webimg/snfilmz.png";
import n8nautomationImg from "../assets/webimg/n8n.png";
import jinggstackImg from "../assets/webimg/RAG.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ProjectCard = ({ project, index }) => {
  const isAI = project.technologies.some(t =>
    ['Python', 'LLMs', 'AI', 'ML', 'YOLOv8', 'RAG', 'LangChain', 'FAISS', 'LangGraph'].some(ai => t.includes(ai))
  );

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="relative group w-full max-w-sm"
    >
      {/* Card */}
      <div className="relative h-[420px] rounded-2xl overflow-hidden glass hover:border-purple-500/50 transition-all duration-500">
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Badge */}
          {isAI && (
            <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                AI Project
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="tag text-[9px]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl glass hover:bg-white/20 text-white hover:text-purple-300 hover:scale-110 transition-all duration-300"
                title="View Code"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
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
    <div className="bg-black text-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Portfolio</span>
          <h1 className="section-title text-gradient mb-4">
            Featured Projects
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A curated collection of AI/ML solutions, automation workflows, and full-stack applications.
            Each project represents a journey in innovation and engineering excellence.
          </p>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating on something amazing?
          </p>
          <a
            href="https://github.com/Kabirofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2"
          >
            <FaGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectsPage;
