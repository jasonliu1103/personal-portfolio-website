import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import websitepic from "../assets/website.png";
import darkwebsitepic from '../assets/darkwebsitepic.png';
import pulseboardlight from "../assets/pulseboardlight.png";
import pulseboarddark from "../assets/pulseboarddark.png";

const projectsdata = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website created with React that highlights my work experience and projects.",
    link: "", 
    githublink: "https://github.com/jasonliu1103/personalportfoliowebsite", 
    tools: "React.js, CSS, JavaScript",
    image: websitepic, 
    darkImage: darkwebsitepic,
  },
  {
    id: 2,
    title: "Pulseboard",
    description: "Full-stack Spotify analytics dashboard with scheduled data syncs, SQL-backed historical insights, and AI playlist generation.",
    link: "", 
    githublink: "https://github.com/jasonliu1103/spotify-api-pulseboard", 
    tools: "React.js, Next.js, Spotify API, Tailwind CSS, TypeScript, PostgreSQL, Prisma",
    image: pulseboardlight,
    darkImage: pulseboarddark,
  }
];

const Projects = ({ theme }) => {
  return (
    <section id="projects">
      <div className="projects">
        <h1 className="project-section-title">Projects</h1>
        {projectsdata.map((project) => (
          <div key={project.id} className="project-card">
            <img src={theme === "dark" && project.darkImage ? project.darkImage : project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tools">
              <strong>Tools:</strong> {project.tools}
            </p>
            <div className="link-container">
            <a
              href={project.githublink}
              className="project-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> 
            </a>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
