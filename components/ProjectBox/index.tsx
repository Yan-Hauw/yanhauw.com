import React from "react";

// types
import { project } from "../../types/projects-section";

// next
import Image from "next/image";

const externaImageLoader = ({ src }: { src: string }) =>
  `https://yanhauw.com${src}`;

interface props {
  project: project;
}

const ProjectBox: React.FC<props> = ({ project }) => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden mb-2 w-96 shadow-lg max-w-sm">
        <div className="h-48 max-w-sm">
          <Image
            src={project.imageFile}
            loader={externaImageLoader}
            alt=""
            layout="responsive"
            width={384}
            height={192}
          />
        </div>

        <div className="h-px bg-gray-200" />

        <div className="px-4">
          <h3 className="mt-2 font-bold">{project.title}</h3>

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
              className="text-xl text-gray-300 px-1.5 hover:text-black hover:text-2xl"
            >
              Source
            </a>

            {project.demoLink && (
              <a
                href={project.demoLink}
                className="text-xl text-gray-300 px-1.5 hover:text-2xl hover:text-black"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
