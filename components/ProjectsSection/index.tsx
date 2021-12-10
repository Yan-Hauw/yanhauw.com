// types
import { project } from "../../types/projects-section";

// components
import ProjectBox from "../ProjectBox";

// constants
import { projects } from "../../constants/projects";

const ProjectsSection = () => {
  return (
    <>
      <h1 id="projectssection" className="text-3xl m-24">
        Projects
      </h1>

      <div className="w-full">
        <div className="mx-auto w-min">
          {projects.map((project: project, index: number) => (
            <ProjectBox project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
