// types
import type { NextPage } from "next";

// components
import NextHead from "../components/NextHead";
import TableOfContents from "../components/TableOfContents";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import HotBar from "../components/HotBar";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

const Home: NextPage = () => {
  return (
    <div className="">
      <TableOfContents />

      <HotBar />

      <NextHead />

      <ProfileSection />

      <ProjectsSection />

      <div className="w-full sm:h-48" />

      <ExperienceSection />

      <div className="w-full sm:h-12" />

      <ContactSection />
    </div>
  );
};

export default Home;
