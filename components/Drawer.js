import React from "react";
import { AiOutlineInfoCircle, AiOutlineForm, AiOutlinePhone, AiFillHome, AiOutlineTeam, AiOutlineClose } from "react-icons/ai";

function Drawer() {

  const handleScroll = (id) => {
    var element = document.getElementById(id);
    var closeButton = document.getElementById("close");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    closeButton.click()
  }

  const navItems = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Events", link: "events" },
    { name: "Initiatives", link: "initiatives" },
    { name: "Our Team", link: "teams" },
  ];

  return (
    <nav>
      <div id="drawer-navigation" className="fixed z-[100] sm:hidden block h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-dark" tabIndex="-1" aria-labelledby="drawer-navigation-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-mid uppercase dark:text-light">Contents</h5>
        <button id="close" type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <AiOutlineClose aria-hidden="true" className="w-5 h-5" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-4 my-4">
            {navItems.map((value, idx) => {
              const { name, link, Icon } = value
              return <li className="cursor-pointer bg-gray-300 dark:text-white w-full dark:bg-mid py-3 text-center rounded-lg text-md" key={idx} onClick={() => handleScroll(link)}>{name}</li>;
            })}
          </ul>
          <button type="button" onClick={() => handleScroll("footer")} className="bg-brand-400 py-2 px-4 rounded-lg my-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 text-white w-full">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}

export default Drawer;
