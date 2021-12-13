// types
import type { NextPage } from "next";

// components
import NextHead from "../components/NextHead";
import TableOfContents from "../components/TableOfContents";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";

const Home: NextPage = () => {
  return (
    <>
      <TableOfContents />

      <NextHead />

      <ProfileSection />

      <ProjectsSection />
    </>
  );
};

export default Home;
