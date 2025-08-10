import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-[#6a00ff] text-white'
        : 'text-gray-300 hover:bg-[#6a00ff]/30 hover:text-white'
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-[#6a00ff] text-white'
        : 'text-gray-300 hover:bg-[#6a00ff]/30 hover:text-white'
    }`;

  const links = [
    { to: '/home', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/home" className="flex items-center space-x-2">
              <img src={logo} alt="JinggStack Logo" className="w-9 h-9" />
              <span className="font-bold text-xl text-white">JinggStack</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to} className={navLinkClasses} end>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={mobileNavLinkClasses}
                onClick={() => setIsOpen(false)}
                end
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;