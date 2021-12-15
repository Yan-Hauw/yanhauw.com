import React from "react";

//components
import Button from "../Button";

// next
import Image from "next/image";

// // images
// import websitePhoto from "../../public/website-photo.jpeg";

const externaImageLoader = ({ src }: { src: string }) =>
  `https://yanhauw.com${src}`;

const ProfileSection = () => {
  return (
    <div className="h-screen">
      <div className="h-1/6 sm:h-1/4" />

      <div className="w-8/12 sm:w-96 border-gray-300 border rounded-md sm:flex p-5 mx-auto mb-12">
        <div className="h-32 w-32 rounded-full overflow-hidden shrink-0 block mx-auto">
          <Image
            src="/website-photo.jpeg"
            alt=""
            loader={externaImageLoader}
            layout="responsive"
            height={128}
            width={128}
          />
        </div>

        <div className="mx-3 flex-1">
          <h1 className="text-3xl text-center sm:text-left font-semibold mb-2">
            Yan Hauw
          </h1>

          <p className="text-sm">
            Junior CS major at UCLA. Interested in building software with Python
            and JavaScript. Looking for a Summer 2022 internship.
          </p>
        </div>
      </div>

      <div className="mx-auto bg-blue-500 w-20 rounded-xl">
        <Button />
      </div>
    </div>
  );
};

export default ProfileSection;
