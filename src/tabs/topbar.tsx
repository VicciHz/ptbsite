import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/TopBar.css";

const TopBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="topbar">
      <div className="logo">
        <a href="#" onClick={() => handleLinkClick("home")}>
          Purple Thunder Band
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <div className="nav-buttons1">
          <a
            href="#"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#bio-section"
            className={activeLink === "bio" ? "active" : ""}
            onClick={() => handleLinkClick("bio")}
          >
            About Us
          </a>
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
          <a
            href="#contact-section"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
