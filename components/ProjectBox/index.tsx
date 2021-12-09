import React from "react";

// types
import { project } from "../../types/projects-section";

// next
import Image from "next/image";

// styles
import styles from "./index.module.css";

const externaImageLoader = ({ src }: { src: string }) =>
  `https://yanhauw.com/${src}`;

interface props {
  project: project;
}

const ProjectBox: React.FC<props> = ({ project }) => {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projectCover}>
        <Image
          src={project.imageFile}
          loader={externaImageLoader}
          alt=""
          width={384}
          height={192}
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <div className={styles.techStacks}>
          {project.stacks.map((stack: string, index: number) => (
            <div className={styles.technology} key={index}>
              {stack}
            </div>
          ))}
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.links}>
          <a href={project.sourceLink} className={styles.link}>
            Source
          </a>

          <a href={project.demoLink} className={styles.link}>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
