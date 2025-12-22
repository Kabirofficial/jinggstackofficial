import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, className = "", ...props }) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-purple-600 rounded-lg group hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-800 shadow-lg shadow-purple-900/40";

  const hoverEffect = (
    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`} {...props}>
        {hoverEffect}
        <span className="relative flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {hoverEffect}
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
