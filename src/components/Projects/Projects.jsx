import React from "react";
import "./Projects.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Portfolio Site",
    description:
      "A personal portfolio built with React and Sass following BEM methodology.",
    link: "https://github.com/username/portfolio",
    tech: [SiHtml5, SiCss3, SiJavascript],
    image: "/images/projects/portfolio.png",
  },
  {
    id: 2,
    title: "Task Manager API",
    description:
      "A RESTful API for managing tasks, built with Node.js and Express.",
    link: "https://github.com/username/task-manager-api",
    tech: [SiNodedotjs, SiJavascript],
    image: "/images/projects/tasks.png",
  },
  {
    id: 3,
    title: "React Blog",
    description:
      "A blog platform with user authentication and routing using React Router.",
    link: "https://github.com/username/react-blog",
    tech: [SiReact, SiJavascript],
    image: "/images/projects/blog.png",
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects__title">Featured Projects</h2>
    <div className="projects__grid">
      {projects.map(({ id, title, description, link, tech, image }) => (
        <div className="projects__card" key={id}>
          <img
            src={image}
            alt={`${title} screenshot`}
            className="projects__card-image"
          />
          <h3 className="projects__card-title">{title}</h3>
          <p className="projects__card-description">{description}</p>
          <div className="projects__tech">
            {tech.map((IconComp, idx) => (
              <IconComp key={idx} className="projects__tech-icon" />
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-cta"
          >
            View Code
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
