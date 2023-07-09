import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4 text-[15px]">
      <div className="text-secondary text-xl font-semibold "># Skills </div>
      <span className="text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="w-[70%]">Full stack Web development </div>
            <span className=" capitalize text-sm font-normal text-gray-400 ">
              Django, Reactjs, Nextjs, Nodejs, mongodb, SQL, Tailwind, CSS,
              javascript, typescript.
            </span>
          </div>
          <div className="flex flex-col">
            <div className="w-[70%]">Video games development </div>
            <span className="capitalize text-sm font-normal text-gray-400 ">
              Unity, C#.
            </span>
          </div>
          <div className="flex flex-col">
            <div className="w-[70%]">Data Science and analysis </div>
            <span className="capitalize text-sm font-normal text-gray-400 ">
              Python, Data collecting and processing, Data visualization,
              generating insights, ML models development, Machine Learning,
              Power Bi Dashboards.
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Skills;
