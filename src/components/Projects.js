import React, { useState } from "react";
import { projects } from "../utli";
import Project from "./Project";
import { Element } from "react-scroll";

const Projects = () => {
  const [projectInfo] = useState(projects);
  return (
    <Element name="projects">
      <div className=" p-0 lg:p-20 relative">
        <div className="relative">
          <div className="text-center text-4xl mb-8 font-Phuda">
            <h2 className="text-mainTextColor pt-12 lg:pt-0">
              &lt;PROJECTS&gt;
            </h2>
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
          <button className="more">
            For more
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
