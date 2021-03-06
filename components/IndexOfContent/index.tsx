import React, { Children } from "react";

const IndexOfContent = (props: { children: any; active: boolean }) => {
  return (
    <div
      className={
        (props.active ? "font-medium " : "text-gray-500 ") +
        "w-auto flex items-center justify-center"
      }
    >
      <div className="text-center w-28 h-10 rounded-3xl flex items-center justify-center hover:bg-gray-200">
        {props.children}
      </div>
    </div>
  );
};

export default IndexOfContent;
