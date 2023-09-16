import { motion } from "framer-motion";
import { fade, titleAnime } from "../animation";
import "./HoverAnimation";
import { Element, Link } from "react-scroll";
import DarkMode from "./DarkMode";

const Landing = ({ setTurnOn, turnOn, setDark, dark }) => {
  const turnNavHandler = () => {
    setTurnOn(!turnOn);
  };

  return (
    <Element name="home">
      <motion.div className="min-h-[87vh]   lg:min-h-screen flex items-center lg:pl-6 relative">
        <DarkMode
          turnOn={turnOn}
          setTurnOn={setTurnOn}
          setDark={setDark}
          dark={dark}
        />
        <div
          className="top-0 absolute text-4xl cursor-pointer hidden"
          onClick={turnNavHandler}
        ></div>
        <motion.div className="text-2xl md:text-4xl md:text-center md:flex-1 lg:text-5xl space-y-8 text-center lg:text-left">
          <div className={`hide text-animate-hover`}>
            <motion.h1
              variants={titleAnime}
              whileHover="hover"
              className="text-7xl md:text-8xl "
            >
              Hello,
            </motion.h1>
          </div>
          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime} className="text-7xl md:text-8xl">
              I'm Ahmad,
            </motion.h1>
          </div>

          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime} className="text-7xl md:text-8xl">
              Web Deveolper
            </motion.h1>
          </div>
          <motion.p
            className="text-xl text-animate-hover md:text-2xl  tracking-toWide  text-whiteColor"
            variants={fade}
          >
            Frontend Developer
          </motion.p>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <motion.button variants={fade} className="land-button  ">
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Landing;
