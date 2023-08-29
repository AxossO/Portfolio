import React, { useState } from "react";
import { projects } from "../utli";
import Project from "./Project";
import { Element } from "react-scroll";

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(projects);
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
        <div className="end-title">
          <h2>&lt;PROJECTS&gt;</h2>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
