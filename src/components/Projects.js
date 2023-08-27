import React, { useState } from "react";
import { projects } from "../utli";
import Project from "./Project";

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(projects);
  return (
    <div className="projects">
      <div className="project-container">
        {projectInfo.map((data, key) => (
          <Project data={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
