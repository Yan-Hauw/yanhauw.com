import React from "react";

//components
import Button from "../Button";

// // next
// import Image from "next/image";

// const externaImageLoader = ({ src }: { src: string }) =>
//   `https://yanhauw.com/${src}`;

const ProfileSection = () => {
  return (
    <div className="h-screen">
      <div className="h-2/6"></div>

      <div className="border-gray-300 border rounded-md h-24 w-80 flex p-1.5 mx-auto mb-12">
        <div className="h-20 w-20 bg-purple-600 rounded-full overflow-hidden">
          {/* <Image
            src="Bottle.jpeg"
            loader={externaImageLoader}
            alt=""
            layout="responsive"
            height={78}
            width={78}
          /> */}
        </div>

        <div className="mx-3">
          <h1 className="text-3xl font-semibold mb-2">Yan Hauw</h1>

          <p className="text-sm">Junior CS major at UCLA.</p>
        </div>
      </div>

      <div className="mx-auto bg-blue-500 w-20 rounded-xl">
        <Button />
      </div>
    </div>
  );
};

export default ProfileSection;
