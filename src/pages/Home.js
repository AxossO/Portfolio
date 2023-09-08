import React, { useState } from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import About from "../components/About";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [turnOn, setTurnOn] = useState(true);
  const [dark, setDark] = useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      className={`home-par ${dark ? "yellow" : ""} `}
    >
      <div className="home-container">
        <Nav setTurnOn={setTurnOn} turnOn={turnOn} dark={dark} />
        <div className={`content ${dark ? "black-text" : ""} `}>
          <Landing
            setTurnOn={setTurnOn}
            turnOn={turnOn}
            dark={dark}
            setDark={setDark}
          />
          <About dark={dark} />
          <Projects />
          <Contact />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
