import React from "react";
import { motion } from "framer-motion";
import { fade } from "../animation";
const DarkMode = ({ setTurnOn, turnOn, dark }) => {
  const onHandler = () => {
    setTurnOn(!turnOn);
  };
  return (
    <div className="  cursor-pointer ">
      <div className="">
        <motion.button
          variants={fade}
          id="menu-btn"
          className={`${
            !turnOn ? "" : "open"
          } z-30  cursor-pointer fixed top-0 right-0 mt-3 mr-3  lg:hidden focus:outline-none hamburger `}
          onClick={onHandler}
        >
          <span className={`${dark ? "black" : "white"} hamburger-top`}></span>
          <span
            className={`${dark ? "black" : "white"} hamburger-middle`}
          ></span>
          <span
            className={`${dark ? "black" : "white"} hamburger-bottom`}
          ></span>
        </motion.button>
        <div className="sun"></div>
      </div>
    </div>
  );
};

export default DarkMode;
