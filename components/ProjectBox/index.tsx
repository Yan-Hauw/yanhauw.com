import React from "react";

// types
import { project } from "../../types/projects-section";

// // next
// import Image from "next/image";

// const externaImageLoader = ({ src }: { src: string }) =>
//   `https://yanhauw.com/${src}`;

interface props {
  project: project;
}

const ProjectBox: React.FC<props> = ({ project }) => {
  return (
    <div className="rounded-xl overflow-hidden mb-2 w-96 shadow-lg">
      <div className="h-48 w-96">
        {/* <Image
          src={project.imageFile}
          loader={externaImageLoader}
          alt=""
          width={384}
          height={192}
        /> */}
      </div>

      <div className="px-4">
        <h3 className="mt-2">{project.title}</h3>

        <div className="flex">
          {project.stacks.map((stack: string, index: number) => (
            <div
              className="bg-blue-300 text-xs mr-1.5 px-2 py-1 rounded-xl"
              key={index}
            >
              {stack}
            </div>
          ))}
        </div>

        <p className="border-b-2 border-b-gray-300 py-4">
          {project.description}
        </p>

        <div className="my-2 flex justify-center">
          <a
            href={project.sourceLink}
            className="text-xl text-gray-300 px-1.5 hover:text-black hover:font-medium"
          >
            Source
          </a>

          <a
            href={project.demoLink}
            className="text-xl text-gray-300 px-1.5 hover:text-black hover:font-medium"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
