import React from "react";

// react-icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const HotBar = () => {
  return (
    <div className="flex py-2">
      <div className="text-xl text-black hover:font-semibold cursor-default">
        Portfolio
      </div>

      <a href="https://github.com/Yan-Hauw">
        <AiFillGithub size="1.5rem" className="ml-4 h-6 w-6" />
      </a>

      <a href="https://www.linkedin.com/in/yan-hauw-yrh">
        <AiFillLinkedin size="1.5rem" className="ml-4" />
      </a>

      <a href="https://github.com/Yan-Hauw/yanhauw.com">
        <div className="ml-4 text-xl text-gray-300 px-1.5 hover:text-black hover:font-semibold">
          Source
        </div>
      </a>

      <h2 id="home" className="opacity-0 cursor-default">
        Home
      </h2>
    </div>
  );
};

export default HotBar;
