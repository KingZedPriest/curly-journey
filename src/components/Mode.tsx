"use client";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Mode() {
  const [theme, setTheme] = useState<string>("");


useEffect(() => {
  const storedTheme: string = localStorage.getItem("theme") ?? "dark";
  setTheme(storedTheme);
}, []);

  useEffect(() => {
    // Define them here, cause By default, Next.js only renders the page on the client side, 
    //after the request has been made to the server. 
    //This means that the document object is not available in the server-side code.

    const element = document.documentElement;
    const defaultMode = window.matchMedia("(prefers-color-scheme: dark)");

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
  }, [theme]);

  return (
    <main className="fixed right-12 top-3/4 lg:right-24">
      <div className="flex gap-5 rounded-xl bg-inherit p-2 shadow-sm shadow-black dark:shadow-white">
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
