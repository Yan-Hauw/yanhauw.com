import React, { Children } from "react";

const IndexOfContent = (props: { children: any; active: boolean }) => {
  return (
    <div className={(props.active ? "font-medium " : "text-gray-500 ") + ""}>
      {props.children}
    </div>

    // <div className="fixed left-0 top-1/4">
    //   <ul>
    //     <li className="w-44 h-10 flex items-center justify-center">
    //       <h3
    //         id="navHome"
    //         className="text-center w-20 h-10 rounded-3xl flex items-center justify-center hover:bg-gray-300"
    //       >
    //         <a href="#profilesection" className="align-middle">
    //           Home
    //         </a>
    //       </h3>
    //     </li>

    //     <li className="w-44 h-10 flex items-center justify-center">
    //       <h3
    //         id="navProjects"
    //         className="text-center w-20 h-10 rounded-3xl flex items-center justify-center hover:bg-gray-300"
    //       >
    //         <a href="#profilesection" className="align-middle">
    //           Projects
    //         </a>
    //       </h3>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default IndexOfContent;
