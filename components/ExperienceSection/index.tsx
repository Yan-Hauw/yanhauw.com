import React from "react";

// components
import SectionHeader from "../SectionHeader";

const ExperienceSection = () => {
  return (
    <div>
      <SectionHeader id="experience" line>
        Experience
      </SectionHeader>

      <div className="text-center text-3xl font-bold mb-6">
        Frontend Web Developer Intern
      </div>

      <ul className="flex flex-wrap justify-center list-disc sm:w-max mx-auto mb-6">
        <li className="mx-4">REACT</li>

        <li className="mx-4">TYPESCRIPT</li>

        <li className="mx-4">JAVASCRIPT</li>

        <li className="mx-4">CSS</li>
      </ul>

      <p className="text-center w-9/12 md:w-7/12 xl:w-5/12  mx-auto mb-8">
        I learnt TypeScript and React function components to contribute to the
        frontend of an e-commerce platform and an administrative platform for
        buying and selling furniture. During the internship, I also built a
        frontend movie database web app.
      </p>

      <div className="w-8/12 lg:w-6/12 2xl:w-5/12 mx-auto">
        <div className="w-max mx-auto my-1">
          <div>
            <span className="font-bold">Company: </span>Wizlah Pte. Ltd.
            Singapore
          </div>
        </div>

        <div className="w-max mx-auto my-1">
          <div>
            <span className="font-bold">Period: </span>May 2021 - September 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
