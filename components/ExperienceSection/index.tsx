import React from "react";

// components
import SectionHeader from "../SectionHeader";

const ExperienceSection = () => {
  return (
    <div>
      <SectionHeader id="experience" line>
        Work Experience
      </SectionHeader>

      <div className="text-center text-2xl font-bold mb-2">
        Frontend Web Developer Intern
      </div>

      <ul className="flex list-disc w-min mx-auto mb-8">
        <li className="mx-4">REACT</li>

        <li className="mx-4">TYPESCRIPT</li>

        <li className="mx-4">JAVASCRIPT</li>

        <li className="mx-4">CSS</li>
      </ul>

      <p className="text-center w-7/12 mx-auto mb-8">
        I learnt TypeScript and React function components to contribute to an
        e-commerce platform and an administrative platform for buying and
        selling furniture. I also built a frontend movie database web app.
      </p>
    </div>
  );
};

export default ExperienceSection;
