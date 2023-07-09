import React from "react";

const Hobbies = () => {
  return (
    <div className="flex flex-col gap-4 text-[15px]">
      <div className="text-secondary text-xl font-semibold "># I like </div>
      <span className="text-white">
        {" "}
        &nbsp;&nbsp;Building things, Movies, Music, Machine Learning, Football,
        Gaming{" "}
      </span>
    </div>
  );
};

export default Hobbies;
