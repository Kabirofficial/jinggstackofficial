import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/jinggstacklogo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-[#36064D]">
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center">
        <span className="text-[15vw] font-black uppercase tracking-tighter text-[#FFFFFF]/5 whitespace-nowrap leading-none">
          JINGGSTACK
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl tracking-widest font-black uppercase flex items-center gap-4 mb-6">
              <img src={logo} alt="JINGGSTACK" className="h-10 w-auto object-contain" />
              <div className="flex">
                <span className="text-[#DA4848]">JINGG</span>
                <span className="text-[#FFFFFF]">STACK</span>
              </div>
            </Link>
            <p className="text-[#FFFFFF]/70 font-light max-w-sm leading-relaxed">
              Forging the future of software engineering. Ultra-modern web applications, intelligent AI systems, and robust automation.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] uppercase font-bold tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4 font-light text-[#FFFFFF]/80">
              <li><Link to="/home" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">Home Base</Link></li>
              <li><Link to="/projects" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">Missions</Link></li>
              <li><Link to="/services" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">Capabilities</Link></li>
              <li><Link to="/about" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">The Crew</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] uppercase font-bold tracking-widest text-sm mb-8">Comms</h4>
            <ul className="space-y-4 font-light text-[#FFFFFF]/80">
              <li><a href="mailto:jinggstack@gmail.com" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">jinggstack@gmail.com</a></li>
              <li><a href="https://github.com/Kabirofficial" target="_blank" rel="noreferrer" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/thayanikabir/" target="_blank" rel="noreferrer" className="hover:text-[#DA4848] transition-colors uppercase text-sm tracking-wider">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#FFFFFF]/50 text-xs tracking-widest uppercase font-light">
          <p>&copy; {currentYear} JINGGSTACK ENGINEERING. ALL SYSTEMS NOMINAL.</p>
          <p>DESIGNED FOR THE FUTURE</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
