// types
import type { NextPage } from "next";

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
