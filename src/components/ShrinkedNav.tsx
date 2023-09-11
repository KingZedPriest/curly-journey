"use client";
import Link from "next/link";
import { BsMenuButtonWide } from "react-icons/bs";
import { GiCrossedSabres } from "react-icons/gi";

import { useState } from "react";

export default function ShrinkedNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed right-10 top-[3.5rem] z-20 sm:hidden">
        <div
          className={`${
            !isOpen ? "" : "hidden"
          } rounded-[50%] bg-[#0131b6] p-3`}
        >
          <BsMenuButtonWide
            size={20}
            onClick={showNav}
            className="cursor-pointer text-white"
          />
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } rounded-[50%] bg-[#0131b6] p-3 dark:opacity-60`}
        >
          <GiCrossedSabres
            size={20}
            onClick={showNav}
            className="cursor-pointer text-white"
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } menu fixed top-[6.2rem] z-20 flex h-40 w-[85%] flex-col justify-center rounded-md bg-inherit shadow-md shadow-black dark:shadow-white sm:hidden`}
      >
        <Link
          className="links bg-opacity- rounded-md border-black px-4 py-2 duration-500 hover:border-r-8 hover:text-white hover:bg-[#0131b6] dark:border-white"
          href="/about"
          prefetch
        >
          About
        </Link>
        <Link
          className="links bg-opacity- rounded-md border-black px-4 py-2 duration-500 hover:border-r-8 hover:text-white hover:bg-[#0131b6] dark:border-white"
          href="/about"
          prefetch
        >
          Projects
        </Link>
        <Link
          className="links rounded-md border-black bg-opacity-50 px-4 py-2 duration-500 hover:border-r-8 hover:text-white hover:bg-[#0131b6] dark:border-white"
          href="/about"
          prefetch
        >
          Contact
        </Link>
      </div>
    </>
  );
}
