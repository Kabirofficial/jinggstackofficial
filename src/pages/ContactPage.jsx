import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      value: "jinggstack@gmail.com",
      href: "mailto:jinggstack@gmail.com",
      description: "Direct Comms",
    },
    {
      icon: <FaLinkedin size={24} />,
      title: "LinkedIn",
      value: "Thayani Kabir",
      href: "https://www.linkedin.com/in/thayanikabir/",
      description: "Professional Network",
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      value: "@Kabirofficial",
      href: "https://github.com/Kabirofficial",
      description: "Source Code",
    },
    {
      icon: <FaKaggle size={24} />,
      title: "Kaggle",
      value: "@jinggxd",
      href: "https://www.kaggle.com/jinggxd",
      description: "AI Models & Data",
    },
  ];

  return (
    <div className="bg-[#36064D] text-[#FFFFFF] min-h-screen pt-32 pb-20 selection:bg-[#DA4848] selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      <main className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <section className="border-b border-[#FFFFFF]/10 pb-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
             <p className="text-[#DA4848] uppercase tracking-[0.3em] text-sm font-bold mb-4">Transmission</p>
             <h1 className="text-5xl md:text-8xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-[0.9]">
               Establish <br /> Contact
             </h1>
          </div>
          <div className="hidden md:block w-2 h-24 bg-[#DA4848]"></div>
        </section>

        {/* Contact Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 mb-32">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-[#36064D] p-10 md:p-16 hover:bg-[#FFFFFF]/5 transition-colors duration-300 relative group flex flex-col md:flex-row items-start md:items-center gap-8"
            >
              <div className="absolute top-8 right-8 text-[#FFFFFF]/20 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-[#DA4848] transition-colors">
                CH_0{index + 1}
              </div>
              <div className="w-16 h-16 flex items-center justify-center border border-[#FFFFFF]/20 text-[#FFFFFF]/50 group-hover:border-[#DA4848] group-hover:text-[#DA4848] group-hover:bg-[#DA4848]/10 transition-all duration-300 shrink-0">
                {method.icon}
              </div>
              <div className="flex-1">
                <p className="text-[#DA4848] text-xs uppercase tracking-widest font-bold mb-2">{method.title}</p>
                <p className="text-2xl font-black text-[#FFFFFF] mb-2">{method.value}</p>
                <p className="text-[#FFFFFF]/50 font-light text-sm">{method.description}</p>
              </div>
            </a>
          ))}
        </section>

        {/* Response Info */}
        <section className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-6">
              System Status: Active
            </h2>
            <p className="text-[#FFFFFF]/70 font-light max-w-xl mx-auto mb-10 text-lg">
              Comms are monitored continuously. Expect a response within <strong className="text-[#FFFFFF] font-bold">24 hours</strong>. For urgent mission-critical inquiries, specify in your transmission.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#FFFFFF]/50 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#DA4848] animate-pulse"></span>
                Available for Deployment
              </span>
              <span>Location: IST Sector</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContactPage;
