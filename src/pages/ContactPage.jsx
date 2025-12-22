import React from "react";
import emailsvg from "../assets/email.svg";
import instasvg from "../assets/instagram.svg";
import linkedinsvg from "../assets/linkedin.svg";

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 sm:py-28 pt-32">
      <main className="max-w-4xl mx-auto">
        <section className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointing-events-none"></div>

          <h1
            className="text-4xl sm:text-6xl font-black mb-6 relative z-10"
            style={{
              color: "rgba(178, 102, 255, 0.9)",
              textShadow: "0 0 20px rgba(102, 0, 153, 0.7)",
            }}
          >
            Connect With Me
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 relative z-10 leading-relaxed">
            I'm always excited to discuss new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </section>

        <section className="w-full max-w-2xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative bg-[#111827] border border-purple-500/30 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              Direct Channels
            </h2>

            <div className="space-y-8">
              <a
                href="mailto:jinggstack@gmail.com"
                className="flex items-start gap-6 group/item p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full border border-purple-500/30 group-hover/item:border-purple-500/80 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                  <img src={emailsvg} alt="Email" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-200 group-hover/item:text-purple-400 transition-colors">
                    jinggstack@gmail.com
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Best for project inquiries and detailed discussions.
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/jinggstack/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group/item p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full border border-purple-500/30 group-hover/item:border-purple-500/80 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                  <img src={instasvg} alt="Instagram" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-200 group-hover/item:text-purple-400 transition-colors">
                    @jinggstack
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Follow for daily updates, design inspiration, and
                    behind-the-scenes.
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/106959735"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group/item p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full border border-purple-500/30 group-hover/item:border-purple-500/80 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                  <img src={linkedinsvg} alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-200 group-hover/item:text-purple-400 transition-colors">
                    JinggStack
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Connect professionally and view my latest career updates.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
