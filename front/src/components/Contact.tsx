import React from "react";
import Image from "next/image";

import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import instagram from "../../public/insta.svg";
import email from "../../public/email.svg";

const Contact = () => {
  return (
    <div className="flex flex-col  gap-2 text-[15px]">
      <div className="text-secondary text-xl font-semibold mb-2"># Contact</div>
      <div className="text-white font-semibold">Connect with me</div>
      <div className="flex justify-center items-center font-semibold gap-4 flex-wrap ">
        <div className=" bg-secondary flex flex-col justify-center  items-center px-4 py-2 min-w-[115px] cursor-pointer gap-1 ">
          <Image src={email} width={"30"} alt="email" />
          <span>Email</span>
        </div>
        <div className=" bg-secondary flex flex-col justify-center items-center px-4 py-2 min-w-[115px] cursor-pointer gap-1">
          <Image src={github} width={"30"} alt="email" />
          <span>Github</span>
        </div>
        <div className=" bg-secondary flex flex-col justify-center items-center px-4 py-2 min-w-[115px] cursor-pointer gap-1">
          <Image src={linkedin} width={"30"} alt="email" />
          <span>Linkedin</span>
        </div>
        <div className=" bg-secondary flex flex-col justify-center items-center px-4 py-2 min-w-[115px] cursor-pointer gap-1">
          <Image src={instagram} width={"30"} alt="email" />
          <span>Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
