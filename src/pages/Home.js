import React, { useState } from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import About from "../components/About";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  const [turnOn, setTurnOn] = useState(false);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      className="home"
    >
      <div className="home-container">
        <Nav setTurnOn={setTurnOn} turnOn={turnOn} />
        <div className="content">
          <Landing setTurnOn={setTurnOn} turnOn={turnOn} />
          <About />
          <Projects />
        </div>
      </div>

      <Contact />
    </motion.div>
  );
};

export default Home;
