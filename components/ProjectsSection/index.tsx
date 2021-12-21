// types
import { project } from "../../types/projects-section";

// components
import ProjectBox from "../ProjectBox";
import SectionHeader from "../SectionHeader";

// constants
import { projects } from "../../constants/projects";

const ProjectsSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-24" />

      <SectionHeader id="projects" line>
        Projects
      </SectionHeader>

      <div className="w-full ">
        <div className="w-11/12 sm:w-8/12 mx-auto flex flex-wrap justify-center gap-3">
          {projects.map((project: project, index: number) => (
            <ProjectBox project={project} key={index} />
          ))}
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
};

export default ProjectsSection;
