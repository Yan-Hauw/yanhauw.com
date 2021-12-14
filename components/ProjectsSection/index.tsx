// types
import { project } from "../../types/projects-section";

// components
import ProjectBox from "../ProjectBox";

// constants
import { projects } from "../../constants/projects";

const ProjectsSection = () => {
  return (
    <div className="h-screen">
      <h2 id="projectssection" className="text-3xl ml-48 mb-6">
        Projects
      </h2>

      <div className="w-full">
        <div className="mx-auto w-min">
          {projects.map((project: project, index: number) => (
            <ProjectBox project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
