import { motion, useScroll, useTransform } from "framer-motion";
import { cardVariants, liHoverAnimation, svgHoverAnimate } from "../animation";
import { HoverNavSvg } from "./HoverNavSvg";
import { Link } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
const Nav = ({ turnOn, dark }) => {
  const [click, setClick] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div className={`nav ${!turnOn ? "visible" : ""}  ${dark ? "black" : ""}`}>
      <div className="nav-list">
        <div className="logo">
          <motion.div
            className="logo-container"
            onClick={clickHandler}
            variants={cardVariants}
            animate={click ? "show" : "hidden"}
            style={{ scale }}
          >
            How To Center A <span>Div?</span>
          </motion.div>
        </div>
        <div className="nav-container">
          <ul>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <HoverNavSvg>
                <motion.li variants={liHoverAnimation} initial={false}>
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
                <motion.li variants={liHoverAnimation} initial={false}>
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
                <motion.li variants={liHoverAnimation} initial={false}>
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
                <motion.li variants={liHoverAnimation} initial={false}>
                  Contacts
                </motion.li>
              </HoverNavSvg>
            </Link>
          </ul>
        </div>
        <div className="right-nav-contant">
          <HoverNavSvg>
            <a
              href="https://www.linkedin.com/in/ahmad-sayed-b57636244/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial={false}
                variants={svgHoverAnimate}
                className="box"
              >
                <h4>linkdin</h4>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </motion.svg>
              </motion.div>
            </a>
          </HoverNavSvg>
          <HoverNavSvg>
            <a
              href="https://github.com/AxossO"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial={false}
                variants={svgHoverAnimate}
                className="box"
              >
                <h4>Github</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                >
                  <path
                    fillRule="evenodd"
                    d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                  ></path>
                </svg>
              </motion.div>
            </a>
          </HoverNavSvg>
          <HoverNavSvg>
            <a
              href="mailto:ahmadsayed142d@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial={false}
                variants={svgHoverAnimate}
                className="box"
              >
                <h4>Mail</h4>
                <AiOutlineMail fill="black" className="mail" />
              </motion.div>
            </a>
          </HoverNavSvg>
          <HoverNavSvg>
            <motion.div
              initial={false}
              variants={svgHoverAnimate}
              className="box"
            >
              <h4>Discord</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
              </svg>
            </motion.div>
          </HoverNavSvg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
