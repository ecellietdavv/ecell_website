import React, { useState } from "react";
import link from "next/link";
import Image from "next/image";
import logo from "../assets/images/images-event/Ecell Logo (B).png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from '@mui/icons-material/Menu';
import logoB from "../assets/Logos/logo_b.png"
import logoW from "../assets/Logos/logo_w.png"

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
    { name: "Home", link: "" },
    { name: "About", link: "" },
    { name: "Our Team", link: "" },
    { name: "Events", link: "" },
  ];

  return (
    <nav className="bg-light dark:bg-dark w-full py-4 flex dark:text-white text-dark justify-between px-6 fixed top-0">
      <Image src={!dark? logoW : logoB} width={60} height={60}/>
      <ul className="space-x-8 md:flex hidden py-2 px-4 ">
        {navItems.map((value, idx) => {
          return <li className="hover:underline hover:cursor-pointer hover:text-brand-300" key={idx}>{value.icon}{value.name}</li>;
        })}
      </ul>
      <div className="flex space-x-4 items-center justify-center px-4">
        {dark ? (
          <DarkModeIcon className="cursor-pointer" onClick={handleDarkMode} />
        ) : (
          <WbSunnyIcon className="cursor-pointer" onClick={handleDarkMode} />
        )}
        <button className="md:block hidden bg-brand-400 dark:bg-brand-400 hover:bg-brand-600 py-2 px-4 rounded-full text-dark dark:hover:bg-brand-600 dark:text-white">Contact Us</button>
        <MenuIcon
          className="block md:hidden"
          data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
        />
      </div>
    </nav>
  );
}

export default Navbar;
