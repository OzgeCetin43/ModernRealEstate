import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import {
  ourTeamMembersLeft,
  ourTeamMembersRight,
} from "../../assets/data/ourTeamMembers";
import hero from "../../assets/images/team-hero.png";

import Reveal from "../Reveal/Reveal";

import "./ourTeam.scss";

const OurTeam: React.FC = () => {
  return (
    <div className="our-team-container">
      <Reveal>
        <h1 className="our-team-container-title">Best Team in USA</h1>
      </Reveal>
      <Reveal>
        <div className="our-team-decoration">
          <div className="horizontal-line" />
          <FaStar />
          <div className="horizontal-line" />
        </div>
      </Reveal>
      <div className="our-team-members">
        <div className="our-team-members-left">
          {ourTeamMembersLeft.map(({ id, name, image, comment }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 1.5, delay: id }}
              className="our-team-member-left"
            >
              <div className="team-member-info">
                <h3 className="team-member-name">{name}</h3>
                <p className="team-member-comment">{comment}</p>
              </div>
              <img src={image} alt="team member" />
            </motion.div>
          ))}
        </div>
        <img src={hero} alt="team member" />
        <div className="our-team-members-right">
          {ourTeamMembersRight.map(({ id, name, image, comment }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 1.5, delay: id }}
              className="our-team-member-right"
            >
              <img src={image} alt="team member" />
              <div className="team-member-info">
                <h3 className="team-member-name">{name}</h3>
                <p className="team-member-comment">{comment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
