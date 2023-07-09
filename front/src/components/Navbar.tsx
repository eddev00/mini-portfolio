"use client";
import React from "react";

import logo from "../../public/logo.png";
import menu from "../../public/menu.svg";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <nav className=" mb-14">
      <div className=" mx-auto max-w-3xl flex  text-white items-center py-2 px-4 justify-between">
        <Image src={logo} alt="logo" />
        <div className="navbar_large breakpoint:hidden relative cursor-pointer">
          <div className="" onClick={toggle}>
            <Image width={24} src={menu} alt="burgermenu" />
          </div>
          <div
            className={`menu_items font-medium flex flex-col absolute bg-secondary right-0 w-[250px] p-2 mt-2 ${
              show ? " absolute" : " hidden"
            }`}
          >
            <div className="text-black flex items-center hover:bg-black hover:text-white px-4 py-2">
              Home
            </div>
            <div className="text-black flex items-center hover:text-white  hover:bg-black px-4 py-2">
              Projects
            </div>
            <div className="text-black flex items-center hover:text-white  hover:bg-black px-4 py-2">
              Contact
            </div>
          </div>
        </div>
        <div className="navbar_large hidden breakpoint:flex text-white font-medium gap-6">
          <span className=" hover:bg-secondary hover:text-black py-2 px-4">
            Home
          </span>
          <span className=" hover:bg-secondary hover:text-black py-2 px-4">
            Projects
          </span>
          <span className=" hover:bg-secondary hover:text-black py-2 px-4">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
