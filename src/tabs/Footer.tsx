import React from "react";
import "../css/footer.css"; // Import a separate CSS file for footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Victor Hernandez. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.conservationcouncil.ca/one-fish-two-fish-maybe-thats-too-few-fish/">Fish</a>
          <a href="https://github.com/VicciHz" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/victor__hz" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
