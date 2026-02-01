import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black border-t border-purple-900/30 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <Link to="/home" className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="JinggStack"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                JinggStack
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                            Empowering businesses with cutting-edge web development and
                            intelligent automation solutions. Building the future, one line of
                            code at a time.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", to: "/home" },
                                { label: "Services", to: "/services" },
                                { label: "Projects", to: "/projects" },
                                { label: "About", to: "/about" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Connect
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:jinggstack@gmail.com"
                                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                                >
                                    jinggstack@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} JinggStack. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
