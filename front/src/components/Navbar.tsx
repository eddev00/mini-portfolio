"use client";
import React from "react";

import logo from "../../public/logo.svg";
import menu from "../../public/menu.svg";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <nav className="">
      <div className=" mx-auto max-w-3xl flex  text-white items-center py-2 px-4 justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" />{" "}
        </Link>
        <div className="navbar_large breakpoint:hidden relative cursor-pointer">
          <div className="" onClick={toggle}>
            <Image width={24} src={menu} alt="burgermenu" />
          </div>
          <div
            onClick={toggle}
            className={`menu_items font-medium flex flex-col absolute bg-secondary right-0 w-[250px] p-2 mt-2 ${
              show ? " absolute" : " hidden"
            }`}
          >
            {" "}
            <Link href="/">
              <div className="text-black flex items-center hover:bg-black hover:text-white px-4 py-2">
                Home
              </div>
            </Link>
            <Link href="/Projects">
              <div className="text-black flex items-center hover:text-white  hover:bg-black px-4 py-2">
                Projects
              </div>{" "}
            </Link>
            <Link href="/https://www.linkedin.com/in/mohamed-baarar/">
              <div className="text-black flex items-center hover:text-white  hover:bg-black px-4 py-2">
                Connect with me
              </div>{" "}
            </Link>
          </div>
        </div>
        <div className="navbar_large hidden breakpoint:flex text-white font-medium gap-6">
          <Link href="/">
            <span className=" hover:bg-secondary hover:text-black py-2 px-4">
              Home
            </span>
          </Link>
          <Link href="/Projects">
            <span className=" hover:bg-secondary hover:text-black py-2 px-4">
              Projects
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohamed-baarar/ "
            target="_blank"
          >
            <span className=" hover:bg-secondary hover:text-black py-2 px-4">
              Connect with me
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
