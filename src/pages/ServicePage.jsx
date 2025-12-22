import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ServiceCard = ({ title, tag, description, features }) => {
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
    <div className="relative w-full max-w-sm group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative h-full bg-[#111827] border border-purple-500/30 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pattern-dots pointer-events-none"></div>

        {tag && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-200 bg-purple-900/50 border border-purple-500/50 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)] transform rotate-3">
              {tag}
            </span>
          </div>
        )}

        <div className="mb-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <p className="text-gray-400 mb-8 text-sm leading-relaxed min-h-[80px]">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#2e003e] border border-purple-500/30 text-purple-300 shadow-sm shrink-0">
                <div className="w-4 h-4 fill-current">{feature.icon}</div>
              </div>
              <span className="text-xs font-medium text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-purple-500/20 flex items-center justify-end">
          <button
            onClick={handleGetStartedClick}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      title: "Full Stack Development",
      tag: "Premium",
      description:
        "Crafting powerful, scalable web applications with bleeding-edge technologies for forward-thinking companies.",
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M12,2L2,7L12,12L22,7L12,2M12,14L2,9V17L12,22L22,17V9L12,14Z" />
            </svg>
          ),
          text: "React & Python",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M15 13H16.5V15.82L15 14.64M21.17 3C21.73 3 22.17 3.39 22.17 3.83V16.17C22.17 16.61 21.73 17 21.17 17H7.83C7.39 17 7 16.61 7 16.17V3.83C7 3.39 7.39 3 7.83 3H21.17M21 15V5H8V15H21M6 19V7H4V19H17V21H6C5 21 4 20 4 19Z" />
            </svg>
          ),
          text: "Scalable Arch",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.31L4.5 7.69V16.31L12 20.69L19.5 16.31V7.69L12 3.31Z" />
            </svg>
          ),
          text: "Secure",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" />
            </svg>
          ),
          text: "API Integration",
        },
      ],
    },
    {
      title: "Frontend Development",
      tag: "Creative",
      description:
        "Building beautiful, responsive, and intuitive user interfaces that provide an exceptional user experience and bring your brand to life.",
      features: [
        {
          icon: (
            <svg viewBox="0 0 512 512">
              <path d="M418.2 23.4c-20-33.4-52.2-5.4-66.4 12.5s-2.2 46.1 12.5 66.4c14.8 20.2 46.1 2.2 66.4-12.5s5.4-52.2-12.5-66.4z" />
            </svg>
          ),
          text: "React",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
            </svg>
          ),
          text: "Visual Design",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          ),
          text: "Animations",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13V20H15V22H9V20H11V18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z" />
            </svg>
          ),
          text: "Responsive",
        },
      ],
    },
    {
      title: "Backend Development",
      tag: "Robust",
      description:
        "Engineering secure, scalable, and efficient server-side logic, APIs, and databases to power your application's core.",
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12.55L21,11.14L15.04,5.18L13.62,6.59L19.59,12.55M8.41,17.41L7,18.82L1,12.86L2.41,11.45L8.41,17.41M13.82,5.18L12.41,6.59L6.41,0.59L7.82,-0.82L13.82,5.18M10,18.82L11.41,17.41L17.41,23.41L16,24.82L10,18.82Z" />
            </svg>
          ),
          text: "Python/Node.js",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M6.5,11.5L9.5,8.5L8.09,7.09L3,12L8.09,16.91L9.5,15.5L6.5,12.5H17.5L14.5,15.5L15.91,16.91L21,12L15.91,7.09L14.5,8.5L17.5,11.5H6.5Z" />
            </svg>
          ),
          text: "REST APIs",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M12,2A9,9 0 0,0 3,11V21L12,22L21,21V11A9,9 0 0,0 12,2M11,6A1,1 0 0,1 12,7A1,1 0 0,1 11,8A1,1 0 0,1 10,7A1,1 0 0,1 11,6M18,14H6V11H18V14M18,17H6V19H18V17Z" />
            </svg>
          ),
          text: "Databases",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H14.9L10.2,22.7C10,22.9 9.75,23 9.5,23H9Z" />
            </svg>
          ),
          text: "Cloud",
        },
      ],
    },
    {
      title: "Logo & Brand Design",
      tag: "Identity",
      description:
        "Creating unique and memorable logos and brand identities that capture your company's essence and make a lasting impression.",
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M9,9A2.5,2.5 0 0,0 6.5,11.5A2.5,2.5 0 0,0 9,14H9A2.5,2.5 0 0,0 11.5,11.5A2.5,2.5 0 0,0 9,9Z" />
            </svg>
          ),
          text: "Figma",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5" />
            </svg>
          ),
          text: "Vector Graphics",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,12A1.5,1.5 0 0,1 13,10.5A1.5,1.5 0 0,1 14.5,9A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 14.5,12M9.5,12A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 11,10.5A1.5,1.5 0 0,1 9.5,12M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M19,2H5A2,2 0 0,0 3,4V22L7,18H19A2,2 0 0,0 21,16V4A2,2 0 0,0 19,2Z" />
            </svg>
          ),
          text: "Style Guides",
        },
        {
          icon: (
            <svg viewBox="0 0 24 24">
              <path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.7,16.04 9.67,17.5 12,17.5M8.5,10H10.5V12H8.5V10M13.5,10H15.5V12H13.5V10M20,8H4V6H20V8M20.94,4H3.06C2.5,4 2,4.5 2,5V19C2,19.55 2.45,20 3,20H21C21.55,20 22,19.55 22,19V5C22,4.5 21.5,4 20.94,4Z" />
            </svg>
          ),
          text: "Creative Concepts",
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 sm:px-6 lg:px-8 pt-24">
      <main className="max-w-7xl mx-auto">
        <section className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointing-events-none"></div>

          <h1
            className="text-4xl sm:text-6xl font-black mb-6 relative z-10"
            style={{
              color: "rgba(178, 102, 255, 0.9)",
              textShadow: "0 0 20px rgba(102, 0, 153, 0.7)",
            }}
          >
            My Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 relative z-10">
            A curated list of my professional offerings, designed to bring your
            digital vision to life.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
