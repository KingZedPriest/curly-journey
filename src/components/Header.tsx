"use client";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/me-modified.png";
export default function Header() {
  return (
    <nav className="fixed top-0 z-10 w-full">
      <div className="flex items-center justify-between py-14">
       <Link href="/"> <Image
          src={me}
          alt="Charles Chukwuemeka's Image"
          className="w-10 sm:w-12 md:w-14 lg:w-16 grayscale hover:grayscale-0 duration-500 cursor-pointer"
        /></Link>
        <div className="hidden sm:flex gap-10">
          <Link
            href="/about"
            className="font-medium duration-500 hover:text-slate-400 md:text-lg lg:text-2xl"
            prefetch
          >
            About
          </Link>
          <Link
            href="/projects"
            className="font-medium duration-500 hover:text-slate-400 md:text-lg lg:text-2xl"
            prefetch
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="font-medium duration-500 hover:text-slate-400 md:text-lg lg:text-2xl"
            prefetch
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}



