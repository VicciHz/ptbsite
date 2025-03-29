import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/members.css";

import vicci from "/assets/vicci.jpg";
import pontus from "/assets/pontus.jpg";
import frans from "/assets/frans.png";
import oliver from "/assets/oliver.png";
import emil from "/assets/emil.png";
import yehor from "/assets/yehor.png";

const membersData = [
  {
    name: "Victor Hernandez",
    role: "Lead Vocals, Guitarist",
    image: vicci,
    age: "2006",
    bio: "Victor is the Lead Vocalist and one of the guitarists. He is also the band's primary songwriter and producer. Victor joined the band in mid 2021 and recently started a solo career too..",
  },
  {
    name: "Pontus Holmqvist",
    role: "Bass Guitar, Backing Vocalist",
    image: pontus,
    age: "2009",
    bio: "Pontus is the Lead Bassist and one of the backing vocalists. He, together with Frans, founded the band in 2018 and is the coolest member.",
  },
  {
    name: "Frans Eliasson",
    role: "Guitar",
    image: frans,
    age: "2009",
    bio: "Frans is one of the guitarists. He, together with Pontus, founded the band in 2018 and is the shortest member. He has contributed to writing the song *Swedish Rock*.",
  },
  {
    name: "Oliver Kirslund",
    role: "Guitar, Backing Vocalist",
    image: oliver,
    age: "2010",
    bio: "Oliver is one of the guitarists and is also the one with the most guitar solos. He is known for living very far away from civilization. Oliver joined the band in mid 2024.",
  },
  {
    name: "Emil Ekstedt",
    role: "Keyboard, Backing Vocalist",
    image: emil,
    age: "2010",
    bio: "Emil is the keyboardist and one of the backing vocalists. He is the band's 'quiet kid', making him the most mysterious person in the band. He joined the band in mid 2024.",
  },
  {
    name: "Yehor Nyzhnyk",
    role: "Drums",
    image: yehor,
    age: "2007",
    bio: "Yehor is the band's lead drummer and the newest member. Little is known about him, like Emil. He joined the band in late 2024.",
  },
];

const MembersHead: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <motion.div
      className="members-section"
      id="members-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="section-title">Purple Thunder Band Members</h1>

      <div className="members-grid">
        {membersData.map((member, index) => (
          <motion.div
            key={index}
            className="member-card"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={member.image} alt={member.name} className="member-image" />
            <h2>{member.name}</h2>
            <p className="age">{member.age}</p>
            <p className="role">{member.role}</p>

            <AnimatePresence>
              {hoveredMember === index && (
                <motion.div
                  className="member-bio"
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} 
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p>{member.bio}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MembersHead;