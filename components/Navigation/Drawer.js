import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import { dropdownItems, navItems } from "../../utils/navigationLinks";
import { handleScroll } from "../../utils/utilityFunctions";
import Dropdown from "../UtilComponents/Dropdown";

function Drawer() {

  const appContext = useContext(AppContext)
  const { toggelDrawer, handleToggel } = appContext

  const transitionClass = toggelDrawer ? "fixed z-[60] top-0 sm:hidden block h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-dark translate-x-0 transition-transform duration-300 transform" : "fixed top-0 z-[60] sm:hidden block h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-dark -translate-x-full transition-transform duration-300 transform"

  return (
    <nav>
      <div className={transitionClass}>
        <h5 className="text-base font-semibold text-mid uppercase dark:text-light">Contents</h5>
        <button onClick={handleToggel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <AiOutlineClose className="w-5 h-5" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-4 my-4">
            {navItems.map((value, idx) => {
              const { name, link, Icon } = value
              return (
                <Link key={idx} href={link}><li onClick={handleToggel} className="cursor-pointer bg-mid/30 dark:text-white w-full dark:bg-mid py-3 text-center rounded-lg text-md" key={idx}>{name}</li></Link>
              )
            })}
            <Dropdown name="Collaborations" items={dropdownItems} />
          </ul>
          <button type="button" onClick={() => handleScroll("footer")} className="bg-brand-400 py-3 px-4 rounded-lg my-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 text-white w-full">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}

export default Drawer;
