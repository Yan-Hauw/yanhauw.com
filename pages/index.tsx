// types
import type { NextPage } from "next";

// components
import NextHead from "../components/NextHead";
import NavBar from "../components/NavBar";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />

      <NextHead />

      <ProfileSection />

      <ProjectsSection />
    </>
  );
};

export default Home;
