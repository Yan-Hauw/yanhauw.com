import React from "react";

// // next
// import Image from "next/image";

// const externaImageLoader = ({ src }: { src: string }) =>
//   `https://yanhauw.com/${src}`;

const ProfileSection = () => {
  return (
    <div
      id="profilesection"
      className="h-screen flex items-center justify-center"
    >
      <div className="border-gray-300 border-2 rounded-md h-24 w-80 flex p-1.5">
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
    </div>
  );
};

export default ProfileSection;
