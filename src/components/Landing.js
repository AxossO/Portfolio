import React, { useState } from "react";
import { motion } from "framer-motion";
import { fade, titleAnime } from "../animation";
const Landing = ({ setTurnOn, turnOn }) => {
  const turnNavHandler = () => {
    setTurnOn(!turnOn);
  };
  return (
    <motion.div className="landing">
      <div className="toggle" onClick={turnNavHandler}>
        ON OFF
      </div>
      <motion.div className="hello">
        <div className="hide">
          <motion.h1 variants={titleAnime}> Hello,</motion.h1>
        </div>
        <div className="hide">
          <motion.h1 variants={titleAnime}>I'm Ahmad,</motion.h1>
        </div>

        <div className="hide">
          <motion.h1 variants={titleAnime}>Web Deveolper</motion.h1>
        </div>

        <motion.p variants={fade}>Frontend Developer</motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
