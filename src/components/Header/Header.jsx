import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (targetId) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      scrollToSection(targetId);
    } else {
      navigate("/", { state: { scrollToId: targetId } });
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("top"); // scroll to top or your hero section id
          }}
        >
          <img src={Logo} alt="Rebecca Scott Logo" />
        </a>
      </div>

      <div
        className={`header__menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="header__menu-icon"></span>
      </div>

      <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
        <button
          className="header__link"
          onClick={() => handleLinkClick("work")}
        >
          Work
        </button>
        <button
          className="header__link"
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </button>
      </nav>
    </header>
  );
};

export default Header;
