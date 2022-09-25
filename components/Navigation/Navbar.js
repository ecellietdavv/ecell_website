/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { handleScroll } from "../../utils/utilityFunctions";

function Navbar() {
  const [dark, setDark] = useState("false");

  const handleDarkMode = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(false);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(true);
    }
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "Initiatives", link: "/initiatives" },
    { name: "Blogs", link: "/blogs" },
  ]

  return (
    <nav className="bg-light dark:bg-dark shadow-lg shadow-mid/20  w-full py-2 flex dark:text-white text-dark fixed z-50 top-0">
      <div className="max-w-7xl flex w-full items-center justify-between mx-auto px-4 sm:px-6">

        <Link href="/">
          <Image className="cursor-pointer" loading="lazy" src={dark ? "/assets/Logos/logo_b.png" : "/assets/Logos/logo_w.png"} width={70} height={70} />
        </Link>

        <ul className="space-x-8 md:flex hidden py-2 px-4 ">
          {navItems && navItems?.map((value, idx) => {
            if (!value?.scrollTo) return <Link href={value.link} className="hover:underline cursor-pointer text-md" key={idx}>{value.name}</Link>
            return (
              <li className="hover:underline cursor-pointer text-md" key={idx} onClick={() => handleScroll(value.scrollTo)}>{value.icon}{value.name}</li>
            )
          })}
        </ul>

        <div className="flex space-x-4 items-center justify-center px-4">
          {dark ? (
            <DarkModeIcon className="cursor-pointer" onClick={handleDarkMode} />
          ) : (
            <WbSunnyIcon className="cursor-pointer" onClick={handleDarkMode} />
          )}

          <button type="button" onClick={() => handleScroll("footer")} className="md:block hidden bg-brand-400 py-2 px-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 text-white">Contact Us</button>

          <MenuIcon
            className="block md:hidden"
            data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
