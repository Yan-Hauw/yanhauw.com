// types
import type { NextPage } from "next";
import { project } from "../types/projects-section";

// components
import NextHead from "../components/NextHead";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";

const Home: NextPage = () => {
  return (
    <>
      <NextHead />

      <ProfileSection />

      <ProjectsSection />
    </>
  );
};

export default Home;
