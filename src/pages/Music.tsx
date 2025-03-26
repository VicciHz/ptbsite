import React from "react";
import { motion } from "framer-motion";
import '../css/music.css';

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
        <h2>Music Section</h2>
        <p>Music Stuff</p>

        {/* Embed Spotify iframe */}
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/4KzOzP7GN5gnSl3N7gDLBK?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Music;
