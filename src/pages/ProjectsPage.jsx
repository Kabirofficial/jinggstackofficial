import React from "react";
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

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group w-80 h-[420px] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500 transform hover:-translate-y-2">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <span className="bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            Featured
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-900/40 px-2 py-1 rounded border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-300"
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
              className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-600 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={16} />
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
      title: "Futuristic Portfolio",
      description:
        "A cyberpunk-themed portfolio website with 3D elements, animations, and responsive design.",
      technologies: ["Three.js", "SCSS", "JS"],
      imageUrl: futuristicportfolioimg,
      repoUrl: "https://github.com/Kabirofficial/kabir-futuristic-portfolio",
      liveUrl: "https://kabirofficial.github.io/kabir-futuristic-portfolio/",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "A frontend clone of Netflix with a responsive layout, styled cards, and hover interactions.",
      technologies: ["HTML", "CSS"],
      imageUrl: netfliximg,
      repoUrl: "https://github.com/Kabirofficial/Netflix-clone",
    },
    {
      id: 3,
      title: "Nike Brand Page",
      description:
        "A product-based brand landing page inspired by Nike, featuring scroll effects and clean animations.",
      technologies: ["React", "Tailwind CSS"],
      imageUrl: nikebrandpageimg,
      repoUrl: "https://github.com/Kabirofficial/nike-brand-page",
    },
    {
      id: 4,
      title: "Riot Clone",
      description:
        "Riot Games-inspired UI clone using HTML, CSS, and JavaScript to replicate the website layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: riotimg,
      repoUrl: "https://github.com/Kabirofficial/riot-clone",
    },
    {
      id: 5,
      title: "Dice Game",
      description:
        "A simple dice rolling game built in React to explore useState and game logic handling.",
      technologies: ["React", "CSS"],
      imageUrl: dicegameimg,
      repoUrl: "https://github.com/Kabirofficial/DiceGame",
    },
    {
      id: 6,
      title: "JS Mini Projects",
      description:
        "A series of small projects like a weather app, QR generator, calculator, and more.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: jsprojectsimg,
      repoUrl: "https://github.com/Kabirofficial/JavaScript-Small-Projects",
    },
    {
      id: 7,
      title: "Spotify Clone",
      description:
        "A frontend Spotify UI clone featuring stylish song cards, animated controls, and responsive layout.",
      technologies: ["HTML", "CSS", "JS"],
      imageUrl: spotifyimg,
      repoUrl: "https://github.com/Kabirofficial/spotify-clone",
    },
    {
      id: 8,
      title: "Prime Video Clone",
      description:
        "A responsive frontend Amazon Prime Video homepage clone with custom layout and hover effects.",
      technologies: ["HTML", "CSS", "JS"],
      imageUrl: primevideoimg,
      repoUrl: "https://github.com/Kabirofficial/Prime-Video-Frontend-Clone-",
    },
    {
      id: 9,
      title: "YumYard Recipe App",
      description:
        "A modern recipe app built with React. Features include adding, viewing, and favoriting recipes.",
      technologies: ["MERN", "Tailwind"],
      imageUrl: yumyardImg,
      repoUrl: "https://github.com/your-username/YumYard",
    },
    {
      id: 10,
      title: "CivicLens",
      description:
        "An AI-powered civic issue detection and reporting platform that identifies problems like potholes and garbage using computer vision, GPS tagging, and smart duplicate filtering.",
      technologies: [
        "Python",
        "FastAPI",
        "YOLOv8",
        "MongoDB",
        "React",
        "Tailwind",
      ],
      imageUrl: civiclensImg,
      repoUrl: "https://github.com/Kabirofficial/CivicLens",
    },

    {
      id: 11,
      title: "RAG-Based Resume Screener",
      description:
        "An intelligent resume screening system using Retrieval-Augmented Generation (RAG) to match resumes with job descriptions and rank candidates with explainable AI reasoning.",
      technologies: ["Python", "FastAPI", "LLMs", "FAISS", "LangChain"],
      imageUrl: resumescreenerImg,
      repoUrl: "https://github.com/Kabirofficial/AI-Resume-Screening",
    },

    {
      id: 12,
      title: "JinggStack AI Bot",
      description:
        "A personal AI assistant built with agent-based architecture that understands projects, codebases, and resumes to provide contextual help, planning, and code insights.",
      technologies: ["Python", "LangGraph", "LLMs", "Vector DB", "APIs"],
      imageUrl: jinggstackImg,
      repoUrl: "https://github.com/Kabirofficial/jinggstack-RAG",
    },

    {
      id: 13,
      title: "n8n AI Automation Suite",
      description:
        "A collection of AI-powered automation workflows including email auto-responder, email summarizer, AI HR hiring assistant, and Meta lead extractor with scheduled reports.",
      technologies: ["n8n", "LLMs", "APIs", "Gmail API", "Meta Ads API"],
      imageUrl: n8nautomationImg,
    },

    {
      id: 14,
      title: "SnFilmz Portfolio Website",
      description:
        "A professional portfolio website built for a filmmaker to showcase paid reels, private shoot projects, and provide easy contact and booking access.",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      imageUrl: snfilmzImg,
      liveUrl: "https://snfilmz.vercel.app/",
    },

    {
      id: 15,
      title: "JinggDesk",
      description:
        "A full-stack task management web application with admin and user roles, JWT authentication, task workflows, dashboards, and exportable reports.",
      technologies: ["MERN", "Tailwind CSS", "JWT", "MongoDB"],
      imageUrl: jinggdeskImg,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 sm:px-6 lg:px-8 pt-32">
      <main className="max-w-7xl mx-auto">
        <section className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointing-events-none"></div>

          <h1
            className="text-4xl sm:text-6xl font-black mb-6 relative z-10"
            style={{
              color: "rgba(178, 102, 255, 0.9)",
              textShadow: "0 0 20px rgba(102, 0, 153, 0.7)",
            }}
          >
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 relative z-10">
            A selection of my work. Each project is a journey in design and
            development.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8 justify-items-center pb-20">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
