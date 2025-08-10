import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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

const TechIcon = ({ children, name }) => (
  <div className="flex flex-col items-center gap-2 text-center group w-24">
    <div className="w-16 h-16 flex items-center justify-center bg-gray-900/50 border border-purple-500/20 rounded-xl transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 group-hover:scale-110">
      <div className="w-8 h-8 text-gray-400 transition-colors duration-300 group-hover:text-white">
        {children}
      </div>
    </div>
    <span className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-purple-300">
      {name}
    </span>
  </div>
);

const HomePage = () => {
  const skills = [
    { name: "React", icon: <img src={reactSvg} alt="React" className="w-8 h-8" /> },
    { name: "Node.js", icon: <img src={nodeSvg} alt="Node.js" className="w-8 h-8" /> },
    { name: "MongoDB", icon: <img src={mongoSvg} alt="MongoDB" className="w-8 h-8" /> },
    { name: "Python", icon: <img src={pythonSvg} alt="Python" className="w-8 h-8" /> },
    { name: "HTML5", icon: <img src={htmlSvg} alt="HTML5" className="w-8 h-8" /> },
    { name: "CSS3", icon: <img src={cssSvfg} alt="CSS3" className="w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <img src={tailwindSvg} alt="Tailwind CSS" className="w-8 h-8" /> },
    { name: "Git & GitHub", icon: <img src={gitSvg} alt="Git & GitHub" className="w-8 h-8" /> },
    { name: "REST APIs", icon: <img src={restSvg} alt="REST APIs" className="w-8 h-8" /> },
    { name: "SQL/MySQL", icon: <img src={sqlSvg} alt="SQL/MySQL" className="w-8 h-8" /> },
    { name: "PHP", icon: <img src={phpSvg} alt="PHP" className="w-8 h-8" /> },
    { name: "Figma", icon: <img src={figmaSvg} alt="Figma" className="w-8 h-8" /> },
    { name: "AI/ML", icon: <img src={aiSvg} alt="AI/ML" className="w-8 h-8" /> },
    { name: "n8n", icon: <img src={n8nSvg} alt="n8n" className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
        <section className="flex flex-col items-center mb-20">
          <img src={logo} alt="JinggStack Logo" className="w-24 h-24 mb-6" />
          <h1
            className="text-4xl sm:text-5xl font-extrabold"
            style={{
              color: "rgba(178, 102, 255, 0.9)",
              textShadow: "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)",
            }}
          >
            JinggStack Freelance Services
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            As a dedicated freelance developer, I provide bespoke digital solutions tailored to your unique needs. From crafting high-performance web applications to designing seamless user experiences and automating complex workflows, my mission is to deliver excellence and drive your vision forward with a personal touch.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-purple-400 mb-10">
            Technology I Master
          </h2>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-8 sm:gap-x-10">
            {skills.map((skill) => (
              <TechIcon key={skill.name} name={skill.name}>
                {skill.icon}
              </TechIcon>
            ))}
          </div>
        </section>

        <section>
          <StyledLinkButton to="/services">
            <span>Explore My Services</span>
          </StyledLinkButton>
        </section>
      </main>
    </div>
  );
};

const StyledLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-image: linear-gradient(144deg, #a855f7, #6a00ff 50%, #2e003e);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(106, 0, 255, 0.3) 0 15px 30px -5px;
  color: #ffffff;
  font-size: 18px;
  justify-content: center;
  padding: 3px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
  }

  span {
    background-color: #000000;
    padding: 16px 24px;
    border-radius: 6px;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }
`;

export default HomePage;