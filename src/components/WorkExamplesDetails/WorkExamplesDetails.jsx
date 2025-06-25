import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { workExamples } from "../../data/workexamples";
import "./WorkExamplesDetails.scss";

const WorkExampleDetails = () => {
  const { id } = useParams();
  const example = workExamples.find((item) => item.id === id);

  if (!example) return <Navigate to="/work" replace />;

  return (
    <section className="work-details">
      <h1 className="work-details__title">{example.title}</h1>

      <div className="work-details__images">
        {example.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${example.title} screenshot ${idx + 1}`}
            className="work-details__image"
          />
        ))}
      </div>

      <p className="work-details__description">{example.description}</p>

      <section className="work-details__section">
        <h2>Features</h2>
        <ul className="work-details__features">
          {example.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="work-details__section">
        <h2>Highlight</h2>
        <p className="work-details__highlight">{example.highlight}</p>
      </section>

      <section className="work-details__tech">
        <h4>Technologies Used</h4>
        <div className="work-details__tech-list">
          {example.tech.map((tech, idx) => (
            <span key={idx} className="work-details__tech-item">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <a
        href={example.url}
        target="_blank"
        rel="noopener noreferrer"
        className="work-details__button"
      >
        Visit Live Site
      </a>
    </section>
  );
};

export default WorkExampleDetails;
