import React from "react";
import Image from "next/image";
import arrow from "../../public/arrow.svg";

const Bio = () => {
  return (
    <div className="flex flex-col gap-2 text-[15px]">
      <div className="text-secondary text-xl font-semibold ">#Bio</div>
      <div className="bio-item text-white flex gap-6">
        <span className="font-bold">2000</span>
        <span className="">Born in Morocco</span>
      </div>
      <div className="bio-item text-white flex gap-6">
        <span className="font-bold">2021</span>
        <span className="">
          Associate Degree in software engineering (DUT) from the High School of
          Technology (EST) in Agadir
        </span>
      </div>
      <div className="bio-item text-white flex gap-6">
        <span className="font-bold">2023</span>
        <span className="">
          Bachelor Degree in data science from the Faculty of Applied Sciences
          Ibn Zohr in ait melloul{" "}
        </span>
      </div>
      <div className="bio-item text-white flex gap-6">
        <span className="font-bold">2023 to present</span>
        <span className="">Freelancer developer</span>
      </div>
    </div>
  );
};

export default Bio;
