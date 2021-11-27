import React from "react";

// styles
import styles from "./index.module.css";

interface props {
  title: string;
  stacks: string[];
  description: string;
}

const ProjectBox: React.FC<props> = ({ title, stacks, description }) => {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projectCover} />

      <div className={styles.details}>
        <h3 className={styles.projectTitle}>{title}</h3>

        <div className={styles.techStacks}>
          {stacks.map((stack: string, index: number) => (
            <div className={styles.technology} key={index}>
              {stack}
            </div>
          ))}
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
