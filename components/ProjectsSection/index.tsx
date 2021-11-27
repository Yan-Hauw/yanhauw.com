import React from "react";

// components
import ProjectBox from "../ProjectBox";

// styles
import styles from "./index.module.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bruinwalk Scraper",
      stacks: ["Python", "MongoDB"],
      description: "A web scraper for scraping bruinwalk.com",
    },
    {
      title: "yanhauw.com",
      stacks: ["TypeScript", "CSS"],
      description: "My personal website",
    },
  ];

  return (
    <div id="projectssection" className={styles.container}>
      <div>
        {projects.map((project, index) => (
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
