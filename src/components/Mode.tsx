"use client";
import { useState, useEffect } from "react";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDevices } from "react-icons/md";

export default function Mode() {
  const [theme, setTheme] = useState<string>("system");
  const element = document.documentElement;
  const defaultMode = window.matchMedia("(prefers-color-scheme: dark)");
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme, element]);
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && defaultMode.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch()
  return (
    <main className="right-20 top-3/4 hidden sm:fixed sm:block">
      <div className="flex gap-5 rounded-xl bg-inherit p-2 shadow-md">
        <MdLightMode
          onClick={() => setTheme("light")}
          className={`${
            theme === "light" ? "text-[#0131b6]" : "text-inherit"
          } cursor-pointer`}
          size={20}
        />
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className={`${
            theme === "dark" ? "text-[#0131b6]" : "text-inherit"
          } cursor-pointer`}
          size={20}
        />
        <MdDevices
          onClick={() => setTheme("system")}
          className={`${
            theme === "system" ? "text-[#0131b6]" : "text-inherit"
          } cursor-pointer`}
          size={20}
        />
      </div>
    </main>
  );
}
