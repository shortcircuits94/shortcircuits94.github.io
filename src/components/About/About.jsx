import React from "react";
import "./About.scss";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";

const About = () => (
  <section className="about" id="about">
    <div className="about__intro">
      <h2 className="about__name">
        Rebecca
        <br />
        Scott
      </h2>
      <h3 className="about__title">SOFTWARE ENGINEER</h3>
    </div>
    <div className="about__container">
      <div className="about__left">
        <div className="about__profile">
          <h4 className="about__subtitle">PROFILE</h4>
          <p className="about__text">
            Web developer with over five years of experience creating
            user-focused web applications and delivering impactful solutions.
            Entered web development driven by a passion for technology and
            creative problem-solving. Known for adaptability, continuous
            learning, and a user-centered approach to crafting digital
            experiences.
          </p>
        </div>
        <div className="about__skills">
          <h4 className="about__subtitle">SKILLS</h4>
          <ul className="about__list">
            <li>
              Figma, Design Thinking, Wireframes, User Research, User Testing,
              UI Design
            </li>
            <li>
              HTML, CSS, JavaScript, Node, React, Express, MySQL, Agile
              Development, DOM APIs, Web APIs, User Authentication, OAuth,
              Heroku, GitHub, Jest, PHP
            </li>
            <li>Adobe Creative Suites, Google Analytics</li>
            <li>Webflow, Wordpress</li>
          </ul>
        </div>
      </div>
      <div className="about__right">
        <div className="about__education">
          <h4 className="about__subtitle">EDUCATION</h4>
          <ul className="about__list">
            <li>
              <strong>BrainStation</strong> | Diploma, Software Engineering —
              Oct 2024 - Jan 2025, Online
            </li>
            <li>
              <strong>St Clair College</strong> | Internet Applications & Web
              Development — Sept 2016 - Apr 2018, Windsor, ON
            </li>
          </ul>
        </div>
        <div className="about__contact">
          <h4 className="about__subtitle">CONTACT</h4>
          <div className="about__contact-list">
            <a href="tel:226-881-1559" className="about__contact-link">
              <FiPhone className="about__contact-icon" />
              <span>226-881-1559</span>
            </a>
            <a
              href="mailto:rebeccascott94@live.ca"
              className="about__contact-link"
            >
              <FiMail className="about__contact-icon" />
              <span>rebeccascott94@live.ca</span>
            </a>
            <a
              href="https://linkedin.com/in/rebeccascott01"
              target="_blank"
              rel="noopener noreferrer"
              className="about__contact-link"
            >
              <SiLinkedin className="about__contact-icon" />
              <span>linkedin.com/in/rebeccascott01</span>
            </a>
            <a
              href="https://github.com/shortcircuits94"
              target="_blank"
              rel="noopener noreferrer"
              className="about__contact-link"
            >
              <SiGithub className="about__contact-icon" />
              <span>github.com/shortcircuits94</span>
            </a>
            <a
              href="https://rebecca-scott.webflow.io"
              target="_blank"
              rel="noopener noreferrer"
              className="about__contact-link"
            ></a>
          </div>
        </div>
      </div>
      <div className="about__experience">
        <h4 className="about__subtitle">EXPERIENCE</h4>
        <div className="about__experience-list">
          {[
            {
              title: "Founding Developer",
              company: "Nomad",
              dates: "Jan 2025 – Present, Remote",
              description:
                "Built and maintained full-stack apps using modern frameworks and agile methods.",
            },
            {
              title: "Digital Marketer",
              company: "Ace I.T Canada",
              dates: "Nov 2023 – Jun 2025, London, ON",
              description:
                "Led cross-platform strategies, enhanced brand visibility, and drove customer engagement.",
            },
            {
              title: "Web Designer",
              company: "BluePrint CPAs",
              dates: "Jan 2021 – Jan 2023, Chatham, ON",
              description:
                "Developed custom websites in Webflow, leveraged APIs, and optimized user engagement via Google Analytics.",
            },
            {
              title: "Application Developer",
              company: "Let’s Face It",
              dates: "Jan 2020 – Aug 2020, Sarnia, ON",
              description:
                "Built a mental health app with a focus on accessibility, usability, and ethical standards.",
            },
            {
              title: "WordPress Developer",
              company: "Site Help Pros",
              dates: "Jan 2020 – Apr 2020, Chatham, ON",
              description:
                "Developed dynamic sites using Enfold/Divi, custom CSS, and SEO optimization.",
            },
          ].map((item, index) => (
            <div key={index} className="about__experience-card">
              <h5 className="about__experience-role">
                {item.title} <span>— {item.company}</span>
              </h5>
              <p className="about__experience-dates">{item.dates}</p>
              <p className="about__experience-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
