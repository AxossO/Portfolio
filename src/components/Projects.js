import React, { useState } from "react";
import { projects } from "../utli";
import Project from "./Project";
import { Element } from "react-scroll";

const Projects = () => {
  const [projectInfo] = useState(projects);
  return (
    <Element name="projects">
      <div className="projects">
        <div className="project-container">
          <div className="title">
            <h2>&lt;PROJECTS&gt;</h2>
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
            <span> PRESS HERE</span>
          </button>
        </a>
        <div className="end-title">
          <h2>{"</PROJECTS>"}</h2>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
