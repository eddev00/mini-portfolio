import React from "react";

import logo from "../../public/logo.png";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" mb-14">
      <div className=" mx-auto max-w-3xl flex  text-white items-center py-2 px-4 justify-between">
        <Image src={logo} alt="logo" />
        <span>Menu</span>
      </div>
    </nav>
  );
};

export default Navbar;
