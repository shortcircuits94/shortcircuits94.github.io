import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="Rebecca Scott Logo" />
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div
        className={`header__menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="header__menu-icon"></span>
      </div>

      {/* Navigation Links */}
      <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
        <>
          <Link to="/work" className="header__link" onClick={handleLinkClick}>
            Work
          </Link>
          <Link
            to="/projects"
            className="header__link"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
        </>
      </nav>
    </header>
  );
};

export default Header;
