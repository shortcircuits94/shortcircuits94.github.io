import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__tagline">
          Built with ☕, creativity, and clean code by Rebecca Scott
        </p>
        <div className="footer__contacts">
          <a href="tel:226-881-1559" className="footer__link">
            <FiPhone className="footer__icon" />
            <span>226-881-1559</span>
          </a>
          <a href="mailto:rebeccascott94@live.ca" className="footer__link">
            <FiMail className="footer__icon" />
            <span>Email Me</span>
          </a>
          <a
            href="https://linkedin.com/in/rebeccascott01"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <SiLinkedin className="footer__icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/shortcircuits94"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <SiGithub className="footer__icon" />
            <span>GitHub</span>
          </a>
          <a
            href="https://rebecca-scott.webflow.io"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FiGlobe className="footer__icon" />
            <span>Webflow</span>
          </a>
        </div>
        <p className="footer__copyright">© 2025 Rebecca Scott</p>
      </div>
    </footer>
  );
};

export default Footer;
