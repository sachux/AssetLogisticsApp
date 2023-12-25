import React from "react";
import Separator from "../../common/separator";
import  CreateForm  from "../form";

import "./projects.css";
function Projects() {
  const data=null;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Customer</label>
      {/* <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div> */}

      <div width="500px">
        <p>
          Do you have any query or issue to be resolved. Create a request now though us and receive the service at your door step.
        </p>
        <ul>
            <li>A broken electronic gadget</li>
            <li>Installation Request</li>
            <li>Plumbing Work</li>
        </ul>
        
      </div>

      <CreateForm/>
    </div>
  );
}

export default Projects;