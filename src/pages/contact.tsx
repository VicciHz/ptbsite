import React from "react";
import '../css/contact.css';
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="contact-section"
      id="contact-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="contact-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Reach out via <a href="https://www.instagram.com/purplethunderband/" target="_blank" rel="noopener noreferrer">Instagram DM</a> 
          or send us an email at: <br />
          <span className="email">purple.thunder.band@gmail.com</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Contact;
