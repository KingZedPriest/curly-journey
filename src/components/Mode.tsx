"use client"
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Mode() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "dark",
  );
  const element = document.documentElement;
  const defaultMode = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    function onWindowMatch() {
      if (localStorage.theme === "dark") {
        setTheme("dark");
      } else if (localStorage.theme === "light") {
        setTheme("light");
      } else if (defaultMode.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }

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
        onWindowMatch();
        break;
    }
  }, [theme, element, defaultMode.matches]);

  return (
    <main className="right-10 top-3/4 hidden sm:fixed sm:block">
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
      </div>
    </main>
  );
}
