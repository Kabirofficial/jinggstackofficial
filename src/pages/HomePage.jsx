import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import Button from "../components/ui/Button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TechIcon = ({ children, name }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex flex-col items-center gap-3 text-center group cursor-pointer"
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center glass rounded-2xl transition-all duration-300 group-hover:border-purple-500/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
      <div className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:brightness-125">
        {children}
      </div>
    </div>
    <span className="text-xs sm:text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-purple-300">
      {name}
    </span>
  </motion.div>
);

const StatCard = ({ value, label, icon }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
  >
    <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{value}</div>
    <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
  </motion.div>
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
    <div className="bg-black text-white min-h-screen pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 py-12 sm:py-20 relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-20 sm:mb-32 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-purple-600 blur-2xl opacity-40 rounded-full scale-150" />
            <img
              src={logo}
              alt="JinggStack Logo"
              className="relative w-24 h-24 sm:w-32 sm:h-32"
            />
          </motion.div>

          <h1 className="section-title text-gradient mb-4">
            JinggStack
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light mb-2">
            Freelance AI/ML Engineer & Full-Stack Developer
          </p>
          <p className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            Crafting intelligent digital solutions with precision. Specializing in{" "}
            <span className="text-purple-400 font-medium">AI-powered applications</span>,{" "}
            <span className="text-cyan-400 font-medium">workflow automation</span>, and{" "}
            <span className="text-pink-400 font-medium">modern web development</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/projects" variant="primary" className="text-base px-8 py-3">
              View My Work
            </Button>
            <Button to="/contact" variant="outline" className="text-base px-8 py-3">
              Get in Touch
            </Button>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 sm:mb-32"
        >
          <StatCard value="15+" label="Projects" />
          <StatCard value="2+" label="Years Exp" />
          <StatCard value="10+" label="AI Models" />
          <StatCard value="100%" label="Dedication" />
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 sm:mb-32"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Technology Stack
            </motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center"
          >
            {skills.map((skill) => (
              <TechIcon key={skill.name} name={skill.name}>
                {skill.icon}
              </TechIcon>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10">
            Whether you need an AI solution, a modern web app, or workflow automation,
            I'm here to help turn your vision into reality.
          </p>
          <Button to="/services" variant="primary" className="text-lg px-10 py-4 relative z-10">
            Explore Services
          </Button>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
