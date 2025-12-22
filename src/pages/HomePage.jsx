import React from "react";
import logo from "../assets/logo.png";
import aiSvg from "../assets/ai.svg";
import cssSvfg from "../assets/css.svg";
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
import Button from "../components/Button";

const TechIcon = ({ children, name }) => (
  <div className="flex flex-col items-center gap-3 text-center group">
    <div className="w-20 h-20 flex items-center justify-center bg-gray-900/50 border border-purple-500/20 rounded-2xl transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/60 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]">
      <div className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-white filter group-hover:brightness-125">
        {children}
      </div>
    </div>
    <span className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-purple-300">
      {name}
    </span>
  </div>
);

const HomePage = () => {
  const skills = [
    {
      name: "React",
      icon: (
        <img
          src={reactSvg}
          alt="React"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <img
          src={nodeSvg}
          alt="Node.js"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src={mongoSvg}
          alt="MongoDB"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          src={pythonSvg}
          alt="Python"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "HTML5",
      icon: (
        <img
          src={htmlSvg}
          alt="HTML5"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "CSS3",
      icon: (
        <img
          src={cssSvfg}
          alt="CSS3"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <img
          src={tailwindSvg}
          alt="Tailwind CSS"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <img
          src={gitSvg}
          alt="Git & GitHub"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "REST APIs",
      icon: (
        <img
          src={restSvg}
          alt="REST APIs"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "SQL",
      icon: (
        <img
          src={sqlSvg}
          alt="SQL/MySQL"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "PHP",
      icon: (
        <img src={phpSvg} alt="PHP" className="w-full h-full object-contain" />
      ),
    },
    {
      name: "Figma",
      icon: (
        <img
          src={figmaSvg}
          alt="Figma"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "AI/ML",
      icon: (
        <img src={aiSvg} alt="AI/ML" className="w-full h-full object-contain" />
      ),
    },
    {
      name: "n8n",
      icon: (
        <img src={n8nSvg} alt="n8n" className="w-full h-full object-contain" />
      ),
    },
    {
      name: "RAG",
      icon: (
        <img src={aiSvg} alt="RAG" className="w-full h-full object-contain" />
      ),
    },
    {
      name: "Generative AI",
      icon: (
        <img src={aiSvg} alt="GenAI" className="w-full h-full object-contain" />
      ),
    },
    {
      name: "Deep Learning",
      icon: (
        <img
          src={pythonSvg}
          alt="Deep Learning"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      name: "Object Detection",
      icon: (
        <img
          src={pythonSvg}
          alt="Object Detection"
          className="w-full h-full object-contain"
        />
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
        <section className="flex flex-col items-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          <img
            src={logo}
            alt="JinggStack Logo"
            className="w-28 h-28 mb-8 relative z-10 animate-float"
          />
          <h1
            className="text-5xl sm:text-7xl font-black mb-6 relative z-10"
            style={{
              color: "rgba(178, 102, 255, 0.9)",
              textShadow: "0 0 30px rgba(102, 0, 153, 0.6)",
            }}
          >
            JinggStack{" "}
            <span className="text-white block sm:inline text-3xl sm:text-5xl font-light mt-2 sm:mt-0">
              Freelance Services
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-relaxed relative z-10 font-light">
            Crafting tailored digital solutions with precision and passion.{" "}
            <br />
            <span className="text-purple-400 font-medium">
              Web Development
            </span>{" "}
            • <span className="text-purple-400 font-medium">Automation</span> •{" "}
            <span className="text-purple-400 font-medium">Design</span>
          </p>
        </section>

        <section className="mb-24 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Technology Stack
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
            {skills.map((skill) => (
              <TechIcon key={skill.name} name={skill.name}>
                {skill.icon}
              </TechIcon>
            ))}
          </div>
        </section>

        <section className="relative z-10">
          <Button
            to="/services"
            variant="primary"
            className="text-lg px-8 py-4"
          >
            Explore My Services
          </Button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
