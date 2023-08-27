import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import About from "../components/About";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      className="home"
    >
      <div className="home-container">
        <Nav />
        <div className="content">
          <Landing />
          <About />
          <Projects />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
