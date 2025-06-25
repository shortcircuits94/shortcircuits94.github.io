import React from "react";
import { workExamples } from "../../data/workexamples";
import { Link } from "react-router-dom";
import "./WorkExamples.scss";

const WorkExamples = () => (
  <section className="work" id="work">
    <h1 className="work__page-title">My Website Work Examples</h1>
    <p className="work__intro">
      Check out some of the cool websites I've built — each with its own unique
      style and tech stack.
    </p>
    <div className="work__grid">
      {workExamples.map(({ id, title, url, images = [], tech }) => (
        <div className="work__card" key={id}>
          <div className="work__card-image-wrapper">
            <img
              src={images[0]}
              alt={`${title} homepage screenshot`}
              className="work__card-image"
            />
          </div>
          <h3 className="work__card-title">{title}</h3>
          <div className="work__card-tech">
            {tech.map((t, i) => (
              <span className="work__card-tech-item" key={i}>
                {t}
              </span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="work__card-button"
          >
            View Live Site
          </a>
          <Link to={`/work/${id}`} className="work__card-details-link">
            Learn More &rarr;
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExamples;
