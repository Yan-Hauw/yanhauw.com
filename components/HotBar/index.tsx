import React from "react";

// react-icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const HotBar = () => {
  return (
    <div className="hidden sm:block sm:w-6/12 sm:flex py-2 mx-auto">
      <div className="sm:w-6/12 sm:flex">
        <div className="text-xl text-black font-semibold cursor-default">
          Portfolio
        </div>
      </div>

      <h2 id="home" className="opacity-0 cursor-default">
        Home
      </h2>

      <div className="sm:w-6/12 sm:flex space-x-4 place-content-end">
        <a href="https://github.com/Yan-Hauw" className="my-auto">
          <AiFillGithub size="1.5rem" />
        </a>

        <a href="https://www.linkedin.com/in/yan-hauw-yrh" className="my-auto">
          <AiFillLinkedin size="1.5rem" />
        </a>

        <a href="https://github.com/Yan-Hauw/yanhauw.com">
          <div className="text-xl text-gray-400 font-semibold px-1.5 hover:text-black hover:font-semibold">
            Source
          </div>
        </a>
      </div>
    </div>
  );
};

export default HotBar;
