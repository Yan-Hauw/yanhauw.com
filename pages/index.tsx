// types
import type { NextPage } from "next";

// components
import NextHead from "../components/NextHead";
import TableOfContents from "../components/TableOfContents";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import HotBar from "../components/HotBar";
import ExperienceSection from "../components/ExperienceSection";

const Home: NextPage = () => {
  return (
    <>
      <TableOfContents />

      <HotBar />

      <NextHead />

      <ProfileSection />

      <ProjectsSection />

      <ExperienceSection />
    </>
  );
};

export default Home;
