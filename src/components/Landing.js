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
      <motion.div className="landing">
        <DarkMode setDark={setDark} dark={dark} />
        <div className="toggle" onClick={turnNavHandler}>
          <RxHamburgerMenu />
        </div>
        <motion.div className="hello">
          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime} whileHover="hover">
              Hello,
            </motion.h1>
          </div>
          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime}>I'm Ahmad,</motion.h1>
          </div>

          <div className={`hide text-animate-hover`}>
            <motion.h1 variants={titleAnime}>Web Deveolper</motion.h1>
          </div>
          <motion.p className="text-animate-hover" variants={fade}>
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
            <motion.button variants={fade}>Contact Me</motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Landing;
