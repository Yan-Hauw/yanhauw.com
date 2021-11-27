// types
import { project } from "../../types/projects-section";

// components
import ProjectBox from "../ProjectBox";

// constants
import { projects } from "../../constants/projects";

// styles
import styles from "./index.module.css";

const ProjectsSection = () => {
  return (
    <div id="projectssection" className={styles.container}>
      <div>
        {projects.map((project: project, index: number) => (
          <ProjectBox
            title={project.title}
            stacks={project.stacks}
            description={project.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
