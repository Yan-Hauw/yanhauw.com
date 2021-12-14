import React from "react";

const ExperienceSection = () => {
  return (
    <div>
      <h2 className="opacity-0 cursor-default">Experience</h2>

      <div id="experience" className="text-center text-4xl mb-8">
        Work experience
      </div>

      <div className="mx-auto w-48 h-1 bg-black mb-12"></div>

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
