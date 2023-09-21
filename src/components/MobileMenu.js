import React from "react";

import { motion } from "framer-motion";
import { fade, liHoverAnimation } from "../animation";
import { HoverNavSvg } from "./HoverNavSvg";
import { Link } from "react-scroll";
import { BsFillMoonFill } from "react-icons/bs";

const MobileMenu = ({ dark, setDark, turnOn }) => {
  const clickHandler = () => {
    setDark(!dark);
  };
  return (
    <motion.div
      className={`${
        dark ? "yellow" : "black"
      } lg:hidden transition-all shadow-2xl rounded-b-3xl duration-200 ease-out mobile-menu  z-20 overflow-hidden pt-12 bg-black  w-full pl-0 h-[40vh]  top-0 fixed `}
      initial="hidden"
      animate={turnOn ? "show" : "hidden"}
      variants={fade}
    >
      <div
        onClick={clickHandler}
        className="moon z-30  fixed xl:absolute top-0  mt-3 xl:right-0 xl:pr-40"
      >
        <BsFillMoonFill
          className={`${dark ? "fill-black" : ""} w-8 h-6 ml-4 `}
        />
      </div>
      <div className=" py-3 px-0 text-xl z-40 absolute  w-full flex flex-col text-center items-center justify-cente">
        <ul className="overflow-hidden w-full pt-6  tracking-widest ">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <HoverNavSvg>
              <motion.li
                variants={liHoverAnimation}
                initial={false}
                className={`${
                  dark ? "text-black" : ""
                } cursor-pointer border-t-[1px] border-t-[#6f6e6c]`}
              >
                Home
              </motion.li>
            </HoverNavSvg>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <HoverNavSvg>
              <motion.li
                variants={liHoverAnimation}
                initial={false}
                className={`${
                  dark ? "text-black" : ""
                } cursor-pointer border-t-[1px] border-t-[#6f6e6c]`}
              >
                About Me
              </motion.li>
            </HoverNavSvg>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <HoverNavSvg>
              <motion.li
                variants={liHoverAnimation}
                initial={false}
                className={`${
                  dark ? "text-black" : ""
                } cursor-pointer border-t-[1px] border-t-[#6f6e6c]`}
              >
                Projects
              </motion.li>
            </HoverNavSvg>
          </Link>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <HoverNavSvg>
              <motion.li
                variants={liHoverAnimation}
                initial={false}
                className={`${
                  dark ? "text-black" : ""
                } cursor-pointer border-t-[1px] border-t-[#6f6e6c]`}
              >
                Contacts
              </motion.li>
            </HoverNavSvg>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
