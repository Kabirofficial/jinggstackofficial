import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const ServiceCard = ({ title, tag, description, features, index }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const handleGetStartedClick = () => {
    if (isMobile) {
      navigate("/contact");
    } else {
      window.open("/contact", "_blank");
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative w-full group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Card */}
      <div className="relative h-full glass rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
        {/* Badge */}
        {tag && (
          <div className="absolute top-4 right-4">
            <span className="tag">{tag}</span>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-300 shrink-0">
                <div className="w-4 h-4 fill-current">{feature.icon}</div>
              </div>
              <span className="text-xs font-medium text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-purple-500/20 flex items-center justify-end">
          <button
            onClick={handleGetStartedClick}
            className="btn-premium text-sm px-6 py-2.5"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      title: "AI/ML Development",
      tag: "Specialty",
      description:
        "Building intelligent systems with RAG, LLMs, computer vision, and custom AI agents that solve real-world problems.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12,2L2,7L12,12L22,7L12,2M12,14L2,9V17L12,22L22,17V9L12,14Z" /></svg>, text: "RAG Systems" },
        { icon: <svg viewBox="0 0 24 24"><path d="M15 13H16.5V15.82L15 14.64M21.17 3C21.73 3 22.17 3.39 22.17 3.83V16.17C22.17 16.61 21.73 17 21.17 17H7.83C7.39 17 7 16.61 7 16.17V3.83C7 3.39 7.39 3 7.83 3H21.17M21 15V5H8V15H21M6 19V7H4V19H17V21H6C5 21 4 20 4 19Z" /></svg>, text: "Custom LLMs" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.31L4.5 7.69V16.31L12 20.69L19.5 16.31V7.69L12 3.31Z" /></svg>, text: "Agents" },
        { icon: <svg viewBox="0 0 24 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" /></svg>, text: "Vector DBs" },
      ],
    },
    {
      title: "Full Stack Development",
      tag: "Premium",
      description:
        "Crafting powerful, scalable web applications with modern technologies for forward-thinking companies.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12,2L2,7L12,12L22,7L12,2M12,14L2,9V17L12,22L22,17V9L12,14Z" /></svg>, text: "React & Node" },
        { icon: <svg viewBox="0 0 24 24"><path d="M15 13H16.5V15.82L15 14.64M21.17 3C21.73 3 22.17 3.39 22.17 3.83V16.17C22.17 16.61 21.73 17 21.17 17H7.83C7.39 17 7 16.61 7 16.17V3.83C7 3.39 7.39 3 7.83 3H21.17M21 15V5H8V15H21M6 19V7H4V19H17V21H6C5 21 4 20 4 19Z" /></svg>, text: "MongoDB/SQL" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.31L4.5 7.69V16.31L12 20.69L19.5 16.31V7.69L12 3.31Z" /></svg>, text: "Secure" },
        { icon: <svg viewBox="0 0 24 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" /></svg>, text: "REST APIs" },
      ],
    },
    {
      title: "Workflow Automation",
      tag: "Efficiency",
      description:
        "Automating complex business processes with n8n, custom integrations, and AI-powered workflows.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12.55L21,11.14L15.04,5.18L13.62,6.59L19.59,12.55M8.41,17.41L7,18.82L1,12.86L2.41,11.45L8.41,17.41M13.82,5.18L12.41,6.59L6.41,0.59L7.82,-0.82L13.82,5.18M10,18.82L11.41,17.41L17.41,23.41L16,24.82L10,18.82Z" /></svg>, text: "n8n Expert" },
        { icon: <svg viewBox="0 0 24 24"><path d="M6.5,11.5L9.5,8.5L8.09,7.09L3,12L8.09,16.91L9.5,15.5L6.5,12.5H17.5L14.5,15.5L15.91,16.91L21,12L15.91,7.09L14.5,8.5L17.5,11.5H6.5Z" /></svg>, text: "API Integration" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12,2A9,9 0 0,0 3,11V21L12,22L21,21V11A9,9 0 0,0 12,2M11,6A1,1 0 0,1 12,7A1,1 0 0,1 11,8A1,1 0 0,1 10,7A1,1 0 0,1 11,6M18,14H6V11H18V14M18,17H6V19H18V17Z" /></svg>, text: "AI Agents" },
        { icon: <svg viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H14.9L10.2,22.7C10,22.9 9.75,23 9.5,23H9Z" /></svg>, text: "Scheduling" },
      ],
    },
    {
      title: "UI/UX Design",
      tag: "Creative",
      description:
        "Creating beautiful, intuitive interfaces that provide exceptional user experiences and bring brands to life.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M9,9A2.5,2.5 0 0,0 6.5,11.5A2.5,2.5 0 0,0 9,14H9A2.5,2.5 0 0,0 11.5,11.5A2.5,2.5 0 0,0 9,9Z" /></svg>, text: "Figma" },
        { icon: <svg viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" /></svg>, text: "Visual Design" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>, text: "Animations" },
        { icon: <svg viewBox="0 0 24 24"><path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13V20H15V22H9V20H11V18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z" /></svg>, text: "Responsive" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Services</span>
          <h1 className="section-title text-gradient mb-4">
            What I Offer
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Professional services designed to bring your digital vision to life
            with cutting-edge technology and premium quality.
          </p>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            How I Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            A streamlined process designed to deliver exceptional results efficiently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Discover", description: "Understanding your goals and requirements" },
              { step: "02", title: "Design & Build", description: "Creating and developing the solution" },
              { step: "03", title: "Deploy & Support", description: "Launching and maintaining your project" },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <span className="text-4xl font-bold text-gradient">{item.step}</span>
                <h3 className="text-white font-semibold mt-2 mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ServicesPage;
