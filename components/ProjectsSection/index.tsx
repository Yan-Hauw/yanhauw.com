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
          <ProjectBox project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
