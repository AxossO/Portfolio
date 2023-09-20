import React, { useRef, useState } from "react";
import { projects } from "../utli";
import Project from "./Project";
import { Element } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { flip } from "../animation";
const Projects = () => {
  const [projectInfo] = useState(projects);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });
  return (
    <Element name="projects">
      <div className=" p-0 xl:p-20 relative">
        <div className="relative">
          <div className="text-center text-4xl mb-8 font-Phuda">
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={flip}
              className="title-class"
            >
              &lt;PROJECTS&gt;
            </motion.h2>
          </div>

          {projectInfo.map((proj, key) => (
            <Project proj={proj} key={key} />
          ))}
        </div>
        <a
          href="https://github.com/AxossO?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <button className="more bg-[#171818] rounded-lg shadow-inset">
            More
            <br />
            <span className="text-mainTextColor font-Roboto "> PRESS HERE</span>
          </button>
        </a>
        <div className="text-xl mt-20 font-Phuda">
          <h2 className="text-mainTextColor pb-8 text-3xl">{"</PROJECTS>"}</h2>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
