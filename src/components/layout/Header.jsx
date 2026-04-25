import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/jinggstacklogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#36064D]/70 backdrop-blur-md border-[#FFFFFF]/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl tracking-widest font-black uppercase flex items-center gap-3">
          <img src={logo} alt="JINGGSTACK" className="h-8 w-auto object-contain" />
          <div className="flex">
            <span className="text-[#DA4848]">JINGG</span>
            <span className="text-[#FFFFFF]">STACK</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-bold uppercase">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-[#DA4848]" : "text-[#FFFFFF] hover:text-[#DA4848]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
           <span className={`block w-6 h-[2px] bg-[#FFFFFF] transition-transform ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
           <span className={`block w-6 h-[2px] bg-[#FFFFFF] transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
           <span className={`block w-6 h-[2px] bg-[#FFFFFF] transition-transform ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 bg-[#36064D]/95 backdrop-blur-xl border-t border-[#FFFFFF]/10 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-widest font-bold uppercase transition-colors duration-300 ${
                  isActive ? "text-[#DA4848]" : "text-[#FFFFFF] hover:text-[#DA4848]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
