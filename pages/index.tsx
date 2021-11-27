// types
import type { NextPage } from "next";
import { project } from "../types/projects-section";

// components
import NextHead from "../components/NextHead";
import ProfileSection from "../components/ProfileSection";
import ProjectBox from "../components/ProjectBox";

// styles
import styles from "../components/ProjectsSection/index.module.css";

const Home: NextPage = () => {
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
    <>
      <NextHead />

      <ProfileSection />

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
    </>
  );
};

export default Home;
