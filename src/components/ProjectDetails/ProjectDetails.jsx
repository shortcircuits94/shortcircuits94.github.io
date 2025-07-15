import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { projects } from "../../data/projects";
import "./ProjectDetails.scss";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) return <Navigate to="/" replace />;

  return (
    <section className="project">
      <div className="project__header">
        <h1 className="project__title">{project.title}</h1>
      </div>

      <div className="project__body">
        {/* Overview */}
        <section className="project__section">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        {project.caseStudy && (
          <section className="project__section">
            <h2>Case Study</h2>
            <div className="project__case-study">
              {project.caseStudy.map((block, index) => {
                const isParagraph = !block.trim().startsWith("-");
                const imageIndex = Math.floor(index / 2);
                const shouldShowImage = isParagraph && index % 2 === 1;

                return (
                  <div key={index} className="project__case-block">
                    <ReactMarkdown>{block}</ReactMarkdown>

                    {shouldShowImage &&
                      project.images &&
                      project.images[imageIndex] && (
                        <img
                          src={project.images[imageIndex]}
                          alt={`${project.title} screenshot ${index}`}
                          className="project__case-image"
                        />
                      )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="project__section">
          <h2>Tech Stack</h2>
          <div className="project__tech">
            {project.tech.map((Icon, idx) => (
              <Icon key={idx} className="project__tech-icon" />
            ))}
          </div>
        </section>

        {/* Code Links */}
        <section className="project__section">
          <h2>Code Links</h2>
          {project.github && project.github.length > 0 ? (
            <>
              {project.github.length === 1 && (
                <a
                  href={project.github[0]}
                  className="project__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code on GitHub
                </a>
              )}
              {project.github.length === 2 && (
                <>
                  <a
                    href={project.github[0]}
                    className="project__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Front-End on GitHub
                  </a>
                  <a
                    href={project.github[1]}
                    className="project__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Back-End on GitHub
                  </a>
                </>
              )}
              {project.github.length > 2 &&
                project.github.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    className="project__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code on GitHub #{idx + 1}
                  </a>
                ))}
            </>
          ) : project.link ? (
            <a
              href={project.link}
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code on GitHub
            </a>
          ) : (
            <p>No code available.</p>
          )}
        </section>
      </div>
    </section>
  );
};

export default ProjectDetails;
