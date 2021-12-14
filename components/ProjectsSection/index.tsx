// types
import { project } from "../../types/projects-section";

// components
import ProjectBox from "../ProjectBox";
import SectionHeader from "../SectionHeader";

// constants
import { projects } from "../../constants/projects";

const ProjectsSection = () => {
  return (
    <div className="h-screen">
      <SectionHeader id="projects" line>
        Projects
      </SectionHeader>

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
