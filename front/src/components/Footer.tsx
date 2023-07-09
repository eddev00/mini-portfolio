import React from "react";
import Image from "next/image";
import gif1 from "../../public/gif3.gif";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="text-black font-medium px-6 max-w-xl mx-auto flex flex-col gap-8 py-8">
      <Contact />
      <Image src={gif1} className="self-center" alt="gif1" />
      <div className="text-white text-xs text-center">
        © 2023 Mohamed Baarar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
