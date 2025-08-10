import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-center py-5 mt-auto border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} JinggStack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;