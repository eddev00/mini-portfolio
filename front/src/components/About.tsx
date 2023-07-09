import React from "react";
import Image from "next/image";
import arrow from "../../public/arrow.svg";

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-secondary text-xl font-semibold ">#About me</div>
      <p className="text-white text-[15px]">
        &nbsp; My name is Mohamed Baarar, You can call me Moe, i’m someone who
        is passionate about creating and building things, I find great joy in
        exploring the vast and dynamic world of technology. From designing and
        developing websites and apps, to video games development and exploring
        the the vast world of data, I am constantly seeking out new challenges
        and opportunities to expand my skills and knowledge.
      </p>
      <div className="  flex gap-4 justify-center items-center text-black text-[16px] self-center bg-secondary py-2 px-6">
        <span>My portfolio</span>
        <Image src={arrow} width={6} height={6} alt="arrow" />
      </div>
    </div>
  );
};

export default About;
