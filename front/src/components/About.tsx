import React from "react";
import Image from "next/image";
import arrow from "../../public/arrow.svg";

import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-secondary text-xl font-semibold "># About me</div>
      <p className="text-white text-[16px]  leading-6 ">
        &nbsp;&nbsp; My name is Mohamed Baarar. I am someone who is passionate
        about creating and building things. I find great joy in exploring the
        vast and dynamic world of technology. From designing, developing
        websites and apps to video game development and exploring the vast world
        of data, I am constantly seeking out new challenges and opportunities to
        expand my skills and knowledge.
      </p>
      <Link href="/Projects">
        <div className="  flex gap-4 justify-center items-center text-black text-[16px] self-center bg-secondary py-2 px-6 w-60 mx-auto">
          <span>My portfolio</span>
          <Image src={arrow} width={6} height={6} alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export default About;
