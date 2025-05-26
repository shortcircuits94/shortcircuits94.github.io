import React from "react";
import "./WorkExamples.scss";

const examples = [
  {
    id: 1,
    title: "Rebecca Scott Portfolio",
    url: "https://rebecca-scott.webflow.io",
    image: "/images/work/portfolio-screenshot.png",
    tech: ["Webflow"],
  },
  {
    id: 2,
    title: "BluePrint CPAS Site",
    url: "https://blueprintcpas.webflow.io",
    image: "/images/work/blueprint-screenshot.png",
    tech: ["Webflow", "API integration"],
  },
  {
    id: 3,
    title: "Site Help Pros",
    url: "https://sitehelppros.com",
    image: "/images/work/sitehelp-screenshot.png",
    tech: ["WordPress", "PHP"],
  },
];

const WorkExamples = () => (
  <section className="work" id="work">
    <h2 className="work__title">Websites</h2>
    <div className="work__grid">
      {examples.map(({ id, title, url, image, tech }) => (
        <div className="work__card" key={id}>
          <div className="work__card-image-wrapper">
            <img
              src={image}
              alt={`${title} screenshot`}
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
            View Site
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExamples;
