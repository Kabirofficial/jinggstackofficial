import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope size={28} />,
      title: "Email",
      value: "jinggstack@gmail.com",
      href: "mailto:jinggstack@gmail.com",
      color: "hover:border-purple-500/50",
      iconColor: "group-hover:text-purple-400",
      description: "Best for project inquiries",
    },
    {
      icon: <FaLinkedin size={28} />,
      title: "LinkedIn",
      value: "Thayani Kabir",
      href: "https://www.linkedin.com/in/thayanikabir/",
      color: "hover:border-blue-500/50",
      iconColor: "group-hover:text-blue-400",
      description: "Let's connect professionally",
    },
    {
      icon: <FaGithub size={28} />,
      title: "GitHub",
      value: "@Kabirofficial",
      href: "https://github.com/Kabirofficial",
      color: "hover:border-white/50",
      iconColor: "group-hover:text-white",
      description: "Check out my projects",
    },
    {
      icon: <FaKaggle size={28} />,
      title: "Kaggle",
      value: "@jinggxd",
      href: "https://www.kaggle.com/jinggxd",
      color: "hover:border-cyan-500/50",
      iconColor: "group-hover:text-cyan-400",
      description: "AI/ML notebooks & competitions",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Contact</span>
          <h1 className="section-title text-gradient mb-4">
            Let's Work Together
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Ready to build something amazing? Reach out through any of these channels.
          </p>
        </motion.section>

        {/* Contact Cards */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`block glass rounded-2xl p-8 transition-all duration-300 group ${method.color}`}
            >
              <div className="flex items-start gap-5">
                <div className={`text-gray-400 transition-all duration-300 ${method.iconColor} group-hover:scale-110`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{method.title}</p>
                  <p className="text-white font-semibold text-lg mb-1">{method.value}</p>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.section>

        {/* Response Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass rounded-3xl p-8 sm:p-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Quick Response Guaranteed
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            I typically respond within <span className="text-purple-400 font-medium">24 hours</span>.
            For urgent inquiries, please mention it in your message.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for freelance
            </span>
            <span>Based in India (IST)</span>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ContactPage;
