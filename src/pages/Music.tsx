import React from "react";
import { motion } from "framer-motion";
import "../css/music.css";

const Music: React.FC = () => {
  return (
    <motion.div
      className="music-section"
      id="music-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="music-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="music-grid">
          <div className="music-text">
            <h2>Our Music</h2>
            <p>
              Experience the sound of <strong>Purple Thunder Band</strong>! We blend the best of 70s blues rock and 
              80s glam metal, creating a powerful and electrifying experience. Listen to our latest tracks below.
            </p>
          </div>

          <div className="music-players">
            <iframe
              className="spotify-embed"
              src="https://open.spotify.com/embed/artist/4KzOzP7GN5gnSl3N7gDLBK?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Music;
