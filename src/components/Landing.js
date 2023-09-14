import { motion } from "framer-motion";
import { fade, titleAnime } from "../animation";
import "./HoverAnimation";
import { Element, Link } from "react-scroll";
import DarkMode from "./DarkMode";
import { RxHamburgerMenu } from "react-icons/rx";

const Landing = ({ setTurnOn, turnOn, setDark, dark }) => {
  const turnNavHandler = () => {
    setTurnOn(!turnOn);
  };

  return (
    <Element name="home">
      <motion.div className="min-h-screen flex items-center pl-6 relative">
        <DarkMode
          turnOn={turnOn}
          setTurnOn={setTurnOn}
          setDark={setDark}
          dark={dark}
        />
        <div
          className="top-0 absolute text-4xl cursor-pointer hidden"
          onClick={turnNavHandler}
        >
          <RxHamburgerMenu />
        </div>
        <motion.div className="text-5xl space-y-8">
          <div className={`hide text-animate-hover`}>
            <motion.h1
              variants={titleAnime}
              whileHover="hover"
              className="text-8xl"
            >
              Hello,
            </motion.h1>
          </div>
          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime} className=" text-8xl">
              I'm Ahmad,
            </motion.h1>
          </div>

          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime} className=" text-8xl">
              Web Deveolper
            </motion.h1>
          </div>
          <motion.p
            className="text-animate-hover text-2xl  tracking-toWide  text-whiteColor"
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
            <motion.button variants={fade} className="land-button ">
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Landing;
