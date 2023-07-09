import React from "react";
import Image from "next/image";

const ProjectItem = ({ image, title, paragraph }: any) => {
  return (
    <div className="text-white flex flex-col items-center gap-2 breakpoint:w-[45%] ">
      <div className="bg-black border border-secondary breakpoint:h-[180px]">
        <div className=" h-full flex items-center">
          <Image src={image} className=" w-[90%] mx-auto py-4 " alt="gif1" />
        </div>
      </div>
      <span className=" text-center capitalize ">{title}</span>
      <span className=" text-center font-normal text-[14px]">{paragraph}</span>
    </div>
  );
};

export default ProjectItem;
