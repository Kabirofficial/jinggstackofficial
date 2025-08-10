import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ownerPhoto from '../assets/owner.jpg';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-5xl mx-auto px-4 py-16 sm:py-24">

        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold" style={{
            color: "rgba(178, 102, 255, 0.9)",
            textShadow: "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)"
          }}>
            About JinggStack
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            The story, philosophy, and person behind the code.
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-24">

          <div className="md:w-1/3 w-full flex-shrink-0">
            <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
              <img 
                src={ownerPhoto} 
                alt="Owner of JinggStack" 
                className="relative w-full h-auto rounded-lg shadow-lg border-2 border-purple-800"
              />
            </div>
          </div>

          <div className="md:w-2/3 w-full text-left">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Meet the Developer
            </h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Hello! I'm the founder and lead developer behind JinggStack. With a deep passion for technology and a meticulous eye for detail, I launched JinggStack as a freelance service to offer my expertise directly to clients who need high-quality, reliable, and modern digital solutions.
              </p>
              <p>
                My philosophy is simple: I'm not just a developer; <span className="text-purple-400 font-semibold">I am your dedicated partner in innovation</span>. I believe in a collaborative process, working closely with you to understand your vision and transform it into a tangible product that exceeds expectations. I am committed to writing clean, efficient code and designing user-centric interfaces that are both beautiful and functional.
              </p>
              <p>
                From architecting complex backends to building pixel-perfect frontends and automating intricate workflows, I handle every aspect of the development lifecycle with precision and care. My goal is to empower your business with technology that not only works flawlessly but also provides a significant return on investment.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8">
            Have a project in mind? I'm always excited to discuss new ideas and challenges. Let's connect and explore how we can work together.
          </p>
          <StyledLinkButton to="/contact">
            <span>Get in Touch</span>
          </StyledLinkButton>
        </section>

      </main>
    </div>
  );
};

const StyledLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-image: linear-gradient(144deg, #a855f7, #6a00ff 50%, #2e003e);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(106, 0, 255, 0.3) 0 15px 30px -5px;
  color: #ffffff;
  font-size: 18px;
  justify-content: center;
  padding: 3px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover, &:focus {
    outline: 0;
  }

  span {
    background-color: #000000;
    padding: 16px 24px;
    border-radius: 6px;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }
`;

export default AboutPage;