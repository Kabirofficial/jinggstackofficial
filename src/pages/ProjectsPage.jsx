import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import netfliximg from "../assets/webimg/netflix.jpeg";
import nikebrandpageimg from "../assets/webimg/nikebrandpage.jpeg";
import riotimg from "../assets/webimg/riot.jpeg";
import dicegameimg from "../assets/webimg/dicegame.jpeg";
import spotifyimg from "../assets/webimg/spotify.jpeg";
import primevideoimg from "../assets/webimg/primevideo.jpeg";
import jsprojectsimg from "../assets/webimg/jsminiproject.png";
import futuristicportfolioimg from "../assets/webimg/futuristicportfolio.png";
import yumyardImg from "../assets/webimg/YumYard.png";

const ProjectCard = ({ project }) => {
  return (
    <CardWrapper imageUrl={project.imageUrl}>
      <div className="parent">
        <div className="card">
          <div className="hover-prompt">
            <span className="prompt-text">Hover Me</span>
          </div>
          <div className="content">
            <span className="title">{project.title}</span>
            <span className="text">{project.description}</span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <FaGithub className="svg" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <FaExternalLinkAlt className="svg" />
                </a>
              )}
            </div>
            <div className="view-more">
              {project.technologies.slice(0, 2).map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

const ProjectsPage = () => {
  const projectsData = [
    {
      id: 1,
      title: "Kabir's Futuristic Portfolio",
      description:
        "A cyberpunk-themed portfolio website with 3D elements, animations, and responsive design.",
      technologies: ["Three.js", "SCSS", "JS"],
      imageUrl: futuristicportfolioimg,
      repoUrl: "https://github.com/Kabirofficial/kabir-futuristic-portfolio",
      liveUrl: "https://kabirofficial.github.io/kabir-futuristic-portfolio/",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "A frontend clone of Netflix with a responsive layout, styled cards, and hover interactions.",
      technologies: ["HTML", "CSS"],
      imageUrl: netfliximg,
      repoUrl: "https://github.com/Kabirofficial/Netflix-clone",
    },
    {
      id: 3,
      title: "Nike Brand Page",
      description:
        "A product-based brand landing page inspired by Nike, featuring scroll effects and clean animations.",
      technologies: ["React", "Tailwind CSS"],
      imageUrl: nikebrandpageimg,
      repoUrl: "https://github.com/Kabirofficial/nike-brand-page",
    },
    {
      id: 4,
      title: "Riot Clone",
      description:
        "Riot Games-inspired UI clone using HTML, CSS, and JavaScript to replicate the website layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: riotimg,
      repoUrl: "https://github.com/Kabirofficial/riot-clone",
    },
    {
      id: 5,
      title: "Dice Game",
      description:
        "A simple dice rolling game built in React to explore useState and game logic handling.",
      technologies: ["React", "CSS"],
      imageUrl: dicegameimg,
      repoUrl: "https://github.com/Kabirofficial/DiceGame",
    },
    {
      id: 6,
      title: "JS Mini Projects",
      description:
        "A series of small projects like a weather app, QR generator, calculator, and more.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: jsprojectsimg,
      repoUrl: "https://github.com/Kabirofficial/JavaScript-Small-Projects",
    },
    {
      id: 7,
      title: "Spotify Clone",
      description:
        "A frontend Spotify UI clone featuring stylish song cards, animated controls, and responsive layout.",
      technologies: ["HTML", "CSS", "JS"],
      imageUrl: spotifyimg,
      repoUrl: "https://github.com/Kabirofficial/spotify-clone",
    },
    {
      id: 8,
      title: "Prime Video Clone",
      description:
        "A responsive frontend Amazon Prime Video homepage clone with custom layout and hover effects.",
      technologies: ["HTML", "CSS", "JS"],
      imageUrl: primevideoimg,
      repoUrl: "https://github.com/Kabirofficial/Prime-Video-Frontend-Clone-",
    },
    {
      id: 9,
      title: "YumYard Recipe App",
      description:
        "A modern recipe app built with React. Features include adding, viewing, and favoriting recipes.",
      technologies: ["MERN", "Tailwind"],
      imageUrl: yumyardImg,
      repoUrl: "https://github.com/your-username/YumYard",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl font-extrabold"
            style={{
              color: "rgba(178, 102, 255, 0.9)",
              textShadow:
                "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)",
            }}
          >
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            A selection of my work. Each project is a journey in design and
            development.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 justify-items-center">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
};

const CardWrapper = styled.div`
  .parent {
    width: 320px;
    height: 400px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 25px;
    background: linear-gradient(
        135deg,
        rgba(106, 0, 255, 0.6) 0%,
        rgba(46, 0, 62, 0.7) 100%
      ),
      url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(106, 0, 255, 0) 40px 50px 25px -40px,
      rgba(106, 0, 255, 0.2) 0px 25px 25px -5px;
    position: relative;
  }

  .hover-prompt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    pointer-events: none;
    opacity: 1;
  }

  .prompt-text {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
  }

  .card:hover .hover-prompt {
    opacity: 0;
    transform: translate(-50%, -60%);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate3d(0, 0, 26px);
    padding: 20px;
    width: 90%;
    text-align: center;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 15px;
  }

  .card:hover .content {
    opacity: 1;
    transform: translate(-50%, -50%) translate3d(0, 0, 50px);
  }

  .title {
    display: block;
    color: #ffffff;
    font-weight: 900;
    font-size: 20px;
    text-shadow: 0 0 10px rgba(178, 102, 255, 0.8);
  }

  .text {
    display: block;
    color: rgba(233, 213, 255, 0.8);
    font-size: 14px;
    margin-top: 10px;
  }

  .bottom {
    padding: 10px 15px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .social-buttons-container {
    display: flex;
    gap: 12px;
    transform-style: preserve-3d;
  }

  .social-button {
    width: 35px;
    height: 35px;
    background: rgba(42, 1, 94, 0.7);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(106, 0, 255, 0.5) 0px 7px 5px -5px;
    transition: all 0.3s ease;

    .svg {
      width: 18px;
      height: 18px;
      fill: #d8b4fe;
      transition: all 0.3s ease;
    }

    &:hover {
      background: #a855f7;
      transform: scale(1.1);
      .svg {
        fill: white;
      }
    }
  }

  .view-more {
    display: flex;
    gap: 5px;
  }

  .tech-tag {
    background: rgba(0, 0, 0, 0.4);
    color: #c084fc;
    font-weight: bold;
    font-size: 10px;
    padding: 4px 8px;
    border-radius: 5px;
  }

  .parent:hover .card {
    transform: rotate3d(0, 1, 0, 15deg) scale(1.05);
    box-shadow: rgba(106, 0, 255, 0.3) 30px 50px 25px -40px,
      rgba(106, 0, 255, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(106, 0, 255, 0.4) -5px 20px 10px 0px;
  }
`;

export default ProjectsPage;
