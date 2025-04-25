import React from "react";
import "./Banner.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiMysql,
  SiPhp,
  SiGithub,
  SiHeroku,
  SiJest,
} from "react-icons/si";
import { FaProjectDiagram, FaKey } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { IoDocumentText, IoServerOutline } from "react-icons/io5";

// Use icons for: HTML, CSS, JS, Node, React, Express, MySQL, PHP,
// Agile (project diagram), DOM APIs, Web APIs, User Auth, OAuth, Heroku, GitHub, Jest
const icons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiMysql,
  SiPhp,
  FaProjectDiagram,
  IoDocumentText,
  IoServerOutline,
  FiUserCheck,
  FaKey,
  SiHeroku,
  SiGithub,
  SiJest,
];

// Duplicate array for seamless loop
const items = [...icons, ...icons];

const Banner = () => (
  <section className="banner">
    <div className="banner__carousel">
      {items.map((IconComp, idx) => (
        <div className="banner__item" key={idx}>
          <IconComp className="banner__icon" />
        </div>
      ))}
    </div>
  </section>
);

export default Banner;
