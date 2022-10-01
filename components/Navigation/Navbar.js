/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import Image from "next/image";

import {BsSunFill} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi';
import Link from "next/link";
import { handleScroll } from "../../utils/utilityFunctions";
import Dropdown from "../UtilComponents/Dropdown";
import AppContext from "../../context/AppContext";
import { dropdownItems, navItems } from "../../utils/navigationLinks";

function Navbar() {
  const appContext = useContext(AppContext)
  const { dark, handleDarkMode } = appContext
  const { handleToggel } = appContext

  const handleContact = ()=>{
    handleScroll("footer")
    handleToggel()
  }

  return (
    <nav className="bg-light dark:bg-dark shadow-lg shadow-mid/20  w-full py-2 flex dark:text-white text-dark fixed z-50 top-0">
      <div className="max-w-7xl flex w-full items-center justify-between mx-auto px-4 sm:px-6">

        <Link href="/">
          <Image className="cursor-pointer" loading="lazy" src={!dark ? "/assets/Logos/logo_b.png" : "/assets/Logos/logo_w.png"} width={70} height={70} />
        </Link>

        <ul className="space-x-8 lg:flex items-center hidden py-2 px-4 ">
          {navItems && navItems?.map((value, idx) => {
              return <Link href={value.link} className="hover:underline cursor-pointer text-md" key={idx}>{value.name}</Link>
          })}
          <Dropdown name="Collaborations" items={dropdownItems} />
        </ul>

        <div className="flex space-x-4 items-center justify-center px-4">
          {!dark ? (
            <MdDarkMode className="cursor-pointer text-2xl" onClick={handleDarkMode} />
          ) : (
            <BsSunFill className="cursor-pointer text-2xl" onClick={handleDarkMode} />
          )}

          <button type="button" onClick={handleContact} className="lg:block hidden bg-brand-400 py-2 px-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 text-white">Contact Us</button>

          <GiHamburgerMenu
            className="block lg:hidden cursor-pointer text-2xl"
            onClick={handleToggel}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
