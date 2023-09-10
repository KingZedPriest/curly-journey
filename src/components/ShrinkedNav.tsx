"use client"
import Link from "next/link";
import { BsMenuButtonWide } from "react-icons/bs"
import { GiCrossedSabres } from "react-icons/gi"

import { useState } from "react";

export default function ShrinkedNav() {
 const [isOpen, setIsOpen] = useState<boolean>(false)
 const showNav = () => {
    setIsOpen(!isOpen)
 }
  return (
    <>
    <div className="fixed z-20 right-10 top-[3.5rem] sm:hidden">
    <div className={`${!isOpen ? "": "hidden"} bg-[#0131b6] rounded-[50%] p-3`}>
        < BsMenuButtonWide size={20} onClick={showNav} className="cursor-pointer"/>
    </div>
    <div className={`${isOpen ? "": "hidden"} bg-[#0131b6] rounded-[50%] p-3 dark:opacity-60`}>
        < GiCrossedSabres size={20} onClick={showNav} className="cursor-pointer"/>
    </div>
    </div>
    <div className={`${isOpen ? "": "hidden"} ease-in-out duration-1000 sm:hidden bg-inherit relative top-[6.2rem] h-40 w-[100%] mx-auto rounded-md shadow-md shadow-black dark:shadow-white`}>

    </div>
    </>
  );
}
