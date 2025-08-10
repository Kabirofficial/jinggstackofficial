import React from 'react';
import { Link } from 'react-router-dom';
import emailsvg from '../assets/email.svg';
import instasvg from '../assets/instagram.svg';
import linkedinsvg from '../assets/linkedin.svg';

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 sm:py-28">
      <main className="max-w-2xl mx-auto">
        
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold" style={{
            color: "rgba(178, 102, 255, 0.9)",
            textShadow: "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)"
          }}>
            Connect With Me
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            I'm always excited to discuss new projects and opportunities. Here are the best ways to get in touch.
          </p>
        </section>

        <section className="w-full text-left bg-gray-900/50 border border-purple-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">Direct Channels</h2>
            <div className="space-y-6">
              
              <a href="mailto:jinggstack@gmail.com" className="flex items-center gap-4 group">
                <img src={emailsvg} alt="Email Icon" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                <div>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-purple-400 text-lg">jinggstack@gmail.com</p>
                    <p className="text-sm text-gray-500">Best for project inquiries</p>
                </div>
              </a>
              
              <a href="https://www.instagram.com/jinggstack/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <img src={instasvg} alt="Instagram Icon" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                <div>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-purple-400 text-lg">@jinggstack</p>
                    <p className="text-sm text-gray-500">Follow for updates and design inspiration</p>
                </div>
              </a>
              
               <a href="https://www.linkedin.com/company/106959735" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <img src={linkedinsvg} alt="LinkedIn Icon" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                <div>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-purple-400 text-lg">JinggStack</p>
                    <p className="text-sm text-gray-500">Connect professionally</p>
                </div>
              </a>

            </div>
        </section>
        
      </main>
    </div>
  );
};

export default ContactPage;