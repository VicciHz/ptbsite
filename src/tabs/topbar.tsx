import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/TopBar.css";

const TopBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // When a link is clicked, update active link and close the menu (if open)
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="topbar">
      <div className="logo">
        <a href="#home-section" onClick={() => handleLinkClick("home")}>
          Purple Thunder Band
        </a>
      </div>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <div className="nav-buttons1">
          <a
            href="#home-section"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#contact-section"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </div>
        <h1 className="line">|</h1>
        <div className="nav-buttons2">
          <a
            href="#members-section"
            className={activeLink === "members" ? "active" : ""}
            onClick={() => handleLinkClick("members")}
          >
            Members
          </a>
          <a
            href="#music-section"
            className={activeLink === "music" ? "active" : ""}
            onClick={() => handleLinkClick("music")}
          >
            Music
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
