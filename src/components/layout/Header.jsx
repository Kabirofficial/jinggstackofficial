import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinkClasses = ({ isActive }) =>
        `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
            ? "bg-purple-600/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-purple-500/30"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`;

    const mobileNavLinkClasses = ({ isActive }) =>
        `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center ${isActive
            ? "bg-purple-900/40 text-purple-300 border border-purple-500/30"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`;

    const links = [
        { to: "/home", label: "Home" },
        { to: "/services", label: "Services" },
        { to: "/projects", label: "Projects" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                    ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-lg shadow-purple-900/10"
                    : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/home" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-300 rounded-full"></div>
                                <img
                                    src={logo}
                                    alt="JinggStack Logo"
                                    className="relative w-10 h-10 object-contain"
                                />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                JinggStack
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
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
                            className="inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-4 space-y-2 bg-black/60 backdrop-blur-xl border-t border-white/10">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={mobileNavLinkClasses}
                            onClick={() => setIsOpen(false)}
                            end
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 opacity-0 group-[.active]:opacity-100 transition-all"></span>
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;
