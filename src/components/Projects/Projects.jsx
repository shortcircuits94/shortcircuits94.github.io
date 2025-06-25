import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects__title">Featured Projects</h2>
    <div className="projects__grid">
      {projects.map(({ id, title, description, images = [], tech }) => (
        <div className="projects__card" key={id}>
          <img
            src={images[0]}
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

          <Link to={`/projects/${id}`} className="projects__card-cta">
            View Project
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
