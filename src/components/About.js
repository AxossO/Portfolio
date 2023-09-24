import React, { useRef, useState } from "react";
import { Utli } from "../utli";
import IconsList from "./IconsList";
import { motion, useInView } from "framer-motion";
import { toLeft, toRight } from "../animation";
import { Element } from "react-scroll";
import { CompImage } from "./HoverNavSvg";
const About = ({ dark }) => {
  const [data] = useState(Utli);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });

  return (
    <Element name="about">
      <motion.div className="min-h-[60vh] relative py-0 p-0 xl:pr-40 overflow-x-hidden ">
        <motion.div className="flex flex-col xl:flex-row space-y-10 xl-space-y-0  text-center xl:text-left ">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={toRight}
            className="basis-[45%] flex flex-wrap justify-between  items-center px-4 xl:px-0 "
          >
            <h1 className="pb-4 xl:text-6xl text-5xl text-mainTextColor mx-auto xl:mx-0">
              ABOUT ME
            </h1>
            <p className="leading-6 tracking-wide font-Adlam">
              I am a passionate Front-End Developer hailing from Egypt, and I
              find my greatest joy in the art of coding. My journey in web
              development has been an exciting and fulfilling one, driven by a
              burning desire to create beautiful and responsive websites that
              captivate users on all screens.
            </p>
            <br />
            <p className="leading-6 tracking-wide  font-Adlam">
              My toolkit consists of HTML, CSS, JavaScript, and React, which I
              wield with finesse to craft web experiences that are not only
              visually stunning but also highly functional. I take great pride
              in my ability to ensure that every website I create seamlessly
              adapts to different devices and screen sizes, providing an
              excellent user experience for all.
            </p>
            <br />
            <p className="leading-6 tracking-wide  font-Adlam">
              What sets me apart is my unwavering passion for continuous
              learning and growth. In the ever-evolving world of web
              development, I believe that staying ahead means always moving
              forward. I eagerly embrace new technologies and trends, using them
              as stepping stones to enhance my skills and expand my horizons. In
              a nutshell, I am not just a Front-End Developer; I am a dedicated
              enthusiast who is committed to delivering excellence in every line
              of code. I look forward to sharing my journey and my creations
              with you as we explore the exciting world of web development
              together.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={toLeft}
            className="flex-1"
          >
            <CompImage />
          </motion.div>
          {/* <div className="flex-1">
            <div className="py-8 px-4 f font-Roboto">
              <h2 className="text-2xl pl-1">HTML</h2>
              <motion.div className="prog">
                <motion.div
                  variants={lineSkillsAnimate}
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  style={{ width: "90%" }}
                  data-progress="90%"
                  className="line"
                ></motion.div>
              </motion.div>
            </div>
            <div className="py-8 px-4 f font-Roboto">
              <h2 className="text-2xl pl-1">CSS</h2>
              <div className="prog">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  variants={lineSkillsAnimate}
                  style={{ width: "90%" }}
                  data-progress="90%"
                  className="line"
                ></motion.div>
              </div>
            </div>
            <div className="py-8 px-4 f font-Roboto">
              <h2 className="text-2xl pl-1">Javascript</h2>
              <div className="prog">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  variants={lineSkillsAnimate}
                  style={{ width: "70%" }}
                  data-progress="70%"
                  className="line"
                ></motion.div>
              </div>
            </div>
            <div className="py-8 px-4 f font-Roboto">
              <h2 className="text-2xl pl-1">React</h2>
              <div className="prog">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  variants={lineSkillsAnimate}
                  style={{ width: "65%" }}
                  data-progress="65%"
                  className="line"
                ></motion.div>
              </div>
            </div>
          </div> */}
        </motion.div>
        <div className="icons-list">
          {data.map((data, key) => (
            <IconsList key={key} data={data} />
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

export default About;
