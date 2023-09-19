import React, { useState } from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import About from "../components/About";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  const [turnOn, setTurnOn] = useState(!true);
  const [dark, setDark] = useState(false);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      className={`home-par ${dark ? "yellow" : ""} `}
    >
      <div className="flex">
        <Nav setTurnOn={setTurnOn} turnOn={turnOn} dark={dark} />
        <MobileMenu   turnOn={turnOn} dark={dark} setDark={setDark} />
        <div
          className={`content p-2 md:p-5 w-full  lg:pl-[11.5rem] ${
            dark ? "black-text" : ""
          } `}
        >
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
