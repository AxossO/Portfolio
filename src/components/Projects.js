import React, { useState } from "react";
import { projects } from "../utli";
import Project from "./Project";

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(projects);
  return (
    <div className="projects">
      <div className="project-container">
        <div className="title">
          <h2>&lt;PROJECTS&gt;</h2>
        </div>

        {projectInfo.map((data, key) => (
          <Project data={data} key={key} />
        ))}
      </div>
      <div className="end-title">
        <h2>&lt;PROJECTS&gt;</h2>
      </div>
    </div>
  );
};

export default Projects;
