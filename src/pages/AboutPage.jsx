import React from "react";
import { motion } from "framer-motion";
import ownerPhoto from "/profile.jpg";
import Button from "../components/ui/Button";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const expertise = [
  { title: "AI/ML Engineering", description: "RAG systems, LLMs, computer vision, deep learning" },
  { title: "Full-Stack Development", description: "React, Node.js, Python, MongoDB, PostgreSQL" },
  { title: "Workflow Automation", description: "n8n, custom APIs, intelligent agents" },
  { title: "UI/UX Design", description: "Premium interfaces, Figma, responsive design" },
];

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-600/8 blur-[120px] rounded-full pointer-events-none" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">About</span>
          <h1 className="section-title text-gradient mb-4">
            The Engineer Behind JinggStack
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Passionate about building intelligent systems that solve real-world problems.
          </p>
        </motion.section>

        {/* Profile Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-20"
        >
          {/* Photo */}
          <motion.div variants={itemVariants} className="lg:w-1/3 w-full max-w-sm">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient" />
              <div className="relative glass rounded-2xl p-2 transform group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={ownerPhoto}
                  alt="JinggStack Founder"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/thayanikabir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:bg-blue-600/20 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <FaLinkedin className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
              </a>
              <a
                href="https://github.com/Kabirofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <FaGithub className="text-gray-400 group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href="https://www.kaggle.com/jinggxd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:bg-cyan-600/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <FaKaggle className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
              </a>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="lg:w-2/3 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Hi, I'm the founder of <span className="text-gradient">JinggStack</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                I'm an AI/ML Engineer and Full-Stack Developer with a deep passion for building
                intelligent systems that make a real impact. My expertise spans from developing
                sophisticated <span className="text-purple-400 font-medium">RAG-based AI applications</span> to
                creating <span className="text-cyan-400 font-medium">production-ready web platforms</span>.
              </p>
              <p>
                My philosophy is simple: technology should solve problems elegantly. I believe in
                clean code, thoughtful architecture, and user experiences that feel magical. Every
                project I undertake is treated as a partnership where I work closely with clients
                to transform their vision into reality.
              </p>
              <p>
                When I'm not coding, I'm researching the latest in AI, contributing to open-source
                projects, or exploring new automation strategies to make workflows more efficient.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Core Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass rounded-3xl p-8 sm:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Have a project in mind? I'm always excited to discuss new challenges
            and opportunities. Let's connect and explore how we can work together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/contact" variant="primary" className="text-base px-8 py-3">
              Get in Touch
            </Button>
            <Button to="/projects" variant="outline" className="text-base px-8 py-3">
              View My Work
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutPage;
