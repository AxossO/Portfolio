import React, { useRef, useState } from "react";
import { Utli } from "../utli";
import IconsList from "./IconsList";
import { motion, useInView } from "framer-motion";
import { lineSkillsAnimate } from "../animation";
import { Element } from "react-scroll";
const About = () => {
  const [data, setData] = useState(Utli);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });

  return (
    <Element name="about">
      <div className="about">
        <div className="about-container">
          <div className="box">
            <h1>About Me & skills</h1>
            <p>
              A small gallery of recent projects chosen by me. I've done them
              all together with amazing people from companies around the globe.
              It's only a drop in the ocean compared to the entire list.
            </p>
            <br />
            <p>
              A small gallery of recent projects chosen by me. I've done them
              all together with amazing people from companies around the globe.
              It's only a drop in the ocean compared to the entire list.
            </p>
            <br />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <div className="skillz-box">
            <div className="skills">
              <h2>HTML</h2>
              <motion.div className="prog">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  style={{ width: "90%" }}
                  data-progress="90%"
                  className="line"
                ></motion.div>
              </motion.div>
            </div>
            <div className="skills">
              <h2>CSS</h2>
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
            <div className="skills">
              <h2>Javascript</h2>
              <div className="prog">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  variants={lineSkillsAnimate}
                  style={{ width: "40%" }}
                  data-progress="40%"
                  className="line"
                ></motion.div>
              </div>
            </div>
            <div className="skills">
              <h2>JS Skills</h2>
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
          </div>
        </div>
        <div className="icons-list">
          {data.map((data, key) => (
            <IconsList key={key} data={data} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default About;
