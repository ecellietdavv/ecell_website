import React, { useState } from "react";
import link from "next/link";
import Image from "next/image";
import logo from "../assets/images/images-event/Ecell Logo (B).png";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import '../styles/navbar.css'
function Navbar() {

  const [dark, setDark] = useState("false")
  const handleDarkMode = () => {
    localStorage.theme = localStorage.theme === "dark" ? "divght" : "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(false)
    } else {
      document.documentElement.classList.remove("dark");
      setDark(true)
    }
  };

  const navItems = [
    { name: "About", link: "" },
    { name: "Contact", link: "" },
    { name: "YT", link: "" },
    { name: "Good", link: "" },
  ]

  return (
    <nav className="bg-dark flex justify-between px-4 fixed top-0">
      <p>Ecell</p>
      <ul className="flex space-x-4 text-white px-4">
        {
          navItems.map((value, idx) => {
            return (
              <li key={idx}>{value.name}</li>
            )
          })
        }
      </ul>
      <div className="flex space-x-4 items-center justify-center px-4">
        {dark ? <DarkModeIcon className="cursor-pointer" onClick={handleDarkMode} /> : <WbSunnyIcon className="cursor-pointer" onClick={handleDarkMode} />}
        <button>Contact Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
