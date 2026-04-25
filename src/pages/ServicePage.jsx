import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, tag, description, features, index }) => {
  return (
    <div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 hover:border-[#DA4848] transition-colors duration-500 p-10 md:p-14 relative group flex flex-col h-full">
      <div className="absolute top-8 right-8 text-[#FFFFFF]/20 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-[#DA4848] transition-colors">
        SRV_0{index + 1}
      </div>
      
      {tag && (
        <div className="mb-8">
          <span className="text-[#DA4848] text-xs font-bold uppercase tracking-[0.2em]">{tag}</span>
        </div>
      )}

      <h3 className="text-3xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-6">{title}</h3>
      <p className="text-[#FFFFFF]/70 font-light leading-relaxed mb-10 text-sm md:text-base">
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 flex-1">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center border border-[#FFFFFF]/20 text-[#FFFFFF]/50 group-hover:border-[#DA4848] group-hover:text-[#DA4848] transition-colors duration-300 shrink-0">
              <div className="w-4 h-4 fill-current">{feature.icon}</div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]/80">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-[#FFFFFF]/10 mt-auto">
        <Link to="/contact" className="inline-flex items-center text-[#FFFFFF] text-xs font-bold uppercase tracking-[0.2em] group-hover:text-[#DA4848] transition-colors">
          Initialize <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      title: "AI/ML Development",
      tag: "Core Infrastructure",
      description: "Building intelligent systems with RAG, LLMs, computer vision, and custom AI agents that solve real-world problems.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12,2L2,7L12,12L22,7L12,2M12,14L2,9V17L12,22L22,17V9L12,14Z" /></svg>, text: "RAG Systems" },
        { icon: <svg viewBox="0 0 24 24"><path d="M15 13H16.5V15.82L15 14.64M21.17 3C21.73 3 22.17 3.39 22.17 3.83V16.17C22.17 16.61 21.73 17 21.17 17H7.83C7.39 17 7 16.61 7 16.17V3.83C7 3.39 7.39 3 7.83 3H21.17M21 15V5H8V15H21M6 19V7H4V19H17V21H6C5 21 4 20 4 19Z" /></svg>, text: "Custom LLMs" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.31L4.5 7.69V16.31L12 20.69L19.5 16.31V7.69L12 3.31Z" /></svg>, text: "Agents" },
        { icon: <svg viewBox="0 0 24 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" /></svg>, text: "Vector DBs" },
      ],
    },
    {
      title: "Full Stack Development",
      tag: "Architecture",
      description: "Crafting powerful, scalable web applications with modern technologies for forward-thinking companies.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12,2L2,7L12,12L22,7L12,2M12,14L2,9V17L12,22L22,17V9L12,14Z" /></svg>, text: "React & Node" },
        { icon: <svg viewBox="0 0 24 24"><path d="M15 13H16.5V15.82L15 14.64M21.17 3C21.73 3 22.17 3.39 22.17 3.83V16.17C22.17 16.61 21.73 17 21.17 17H7.83C7.39 17 7 16.61 7 16.17V3.83C7 3.39 7.39 3 7.83 3H21.17M21 15V5H8V15H21M6 19V7H4V19H17V21H6C5 21 4 20 4 19Z" /></svg>, text: "MongoDB/SQL" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.31L4.5 7.69V16.31L12 20.69L19.5 16.31V7.69L12 3.31Z" /></svg>, text: "Secure" },
        { icon: <svg viewBox="0 0 24 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" /></svg>, text: "REST APIs" },
      ],
    },
    {
      title: "Workflow Automation",
      tag: "Logistics",
      description: "Automating complex business processes with n8n, custom integrations, and AI-powered workflows.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12.55L21,11.14L15.04,5.18L13.62,6.59L19.59,12.55M8.41,17.41L7,18.82L1,12.86L2.41,11.45L8.41,17.41M13.82,5.18L12.41,6.59L6.41,0.59L7.82,-0.82L13.82,5.18M10,18.82L11.41,17.41L17.41,23.41L16,24.82L10,18.82Z" /></svg>, text: "n8n Expert" },
        { icon: <svg viewBox="0 0 24 24"><path d="M6.5,11.5L9.5,8.5L8.09,7.09L3,12L8.09,16.91L9.5,15.5L6.5,12.5H17.5L14.5,15.5L15.91,16.91L21,12L15.91,7.09L14.5,8.5L17.5,11.5H6.5Z" /></svg>, text: "API Integration" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12,2A9,9 0 0,0 3,11V21L12,22L21,21V11A9,9 0 0,0 12,2M11,6A1,1 0 0,1 12,7A1,1 0 0,1 11,8A1,1 0 0,1 10,7A1,1 0 0,1 11,6M18,14H6V11H18V14M18,17H6V19H18V17Z" /></svg>, text: "AI Agents" },
        { icon: <svg viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H14.9L10.2,22.7C10,22.9 9.75,23 9.5,23H9Z" /></svg>, text: "Scheduling" },
      ],
    },
    {
      title: "UI/UX Design",
      tag: "Aesthetics",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences and bring brands to life.",
      features: [
        { icon: <svg viewBox="0 0 24 24"><path d="M9,9A2.5,2.5 0 0,0 6.5,11.5A2.5,2.5 0 0,0 9,14H9A2.5,2.5 0 0,0 11.5,11.5A2.5,2.5 0 0,0 9,9Z" /></svg>, text: "Figma" },
        { icon: <svg viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" /></svg>, text: "Visual Design" },
        { icon: <svg viewBox="0 0 24 24"><path d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>, text: "Animations" },
        { icon: <svg viewBox="0 0 24 24"><path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13V20H15V22H9V20H11V18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z" /></svg>, text: "Responsive" },
      ],
    },
  ];

  return (
    <div className="bg-[#36064D] text-[#FFFFFF] min-h-screen pt-32 pb-20 selection:bg-[#DA4848] selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      <main className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <section className="border-b border-[#FFFFFF]/10 pb-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
             <p className="text-[#DA4848] uppercase tracking-[0.3em] text-sm font-bold mb-4">Capabilities</p>
             <h1 className="text-5xl md:text-8xl uppercase font-black tracking-tighter text-[#FFFFFF] leading-[0.9]">
               Systems & <br /> Services
             </h1>
          </div>
          <div className="hidden md:block w-2 h-24 bg-[#DA4848]"></div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 mb-32">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </section>

        {/* Process Section */}
        <section className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl uppercase font-black tracking-tighter text-[#FFFFFF] mb-4">
              Operational Protocol
            </h2>
            <p className="text-[#FFFFFF]/70 font-light max-w-2xl mx-auto text-lg">
              A highly structured, deterministic process designed to deploy software with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { step: "01", title: "Discover", description: "System analysis and requirement gathering. Establishing the parameters." },
              { step: "02", title: "Architect", description: "Designing the infrastructure, writing the code, building the models." },
              { step: "03", title: "Deploy", description: "Launching into production. Monitoring systems for absolute stability." },
            ].map((item) => (
              <div key={item.step} className="bg-[#36064D] border border-[#FFFFFF]/20 p-8 hover:border-[#DA4848] transition-colors duration-300">
                <span className="text-5xl font-black text-[#FFFFFF]/10 block mb-4">{item.step}</span>
                <h3 className="text-xl uppercase font-bold text-[#FFFFFF] mb-3">{item.title}</h3>
                <p className="text-[#FFFFFF]/60 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ServicesPage;
