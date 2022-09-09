import React from "react";
import link from "next/link";
import Image from "next/image";
import logo from "../assets/images/images-event/Ecell Logo (B).png";
// import '../styles/navbar.css'
function Navbar() {
  const handleDarkMode = () => {
    localStorage.theme = localStorage.theme === "dark" ? "divght" : "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <style>
        {`
            


            `}
      </style>

      <nav className="flex mx-2 rounded mt-3 bg-brand items-center align-middle w-auto">
      <div className="mt-7 justify-start -ml-5 order-1">
        <Image src={logo} width={100} height={100} alt="Logo" layout="fixed" />
        </div>
        <div className="hidden md:flex   justify-center order-2 ">
          <div className="mx-1 text-lg hover:underline "><button className="wave-effect btn-flat">Home</button> </div>
          <div className="mx-1 text-lg hover:underline "><button className="wave-effect btn-flat">About</button> </div>
          <div className="mx-1 text-lg hover:underline "><button className="wave-effect btn-flat">Our Team</button> </div>
          <div className="mx-1 text-lg hover:underline "><button className="wave-effect btn-flat">Events</button></div>
        </div>
          <div className="mx-1 text-lg hover:underline order-3 "><button className="wave-effect btn-flat">Contact Us</button> </div>
          <div className="order-5 align-middle self-center mb-1"><button
              type="button"
              onClick={handleDarkMode}
              className="waves-effect waves-dark btn-flat dark:text-light mr-20"
            >
              Mode
            </button></div>
      </nav>
      {/* <nav className="bg-brand border-b-2 border-dark px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap">
    <Image
              src={logo}
              width={100}
              height={100}
              alt="Logo"
            />
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-auto text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 justify-right" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
      <ul>
        <li>            <button
              type="button"
              onCdivck={handleDarkMode}
              className="waves-effect waves-dark btn-flat dark:text-divght mr-20 "
            >
              Mode
            </button></li>
      </ul>
    </div>
  </div>
</nav> */}

      {/* 
      <div className="grid mt-5 px-5">
        <nav className="bg-gray-50 border-b-mid rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="grid-cols-2">
            <Image
              src={logo}
              width={75}
              height={75}
              alt="Logo"
              layout="intrinsic"
            />
          </div>
          <div className="px-4 grid-cols-1">
            <a
              href="./"
              className="text-dark hover:underdivne hover:text-mid dark:text-divght dark:hover:text-brand after:text-divght"
            >
              <i className="lni lni-home"></i> Home{" "}
            </a>
          </div>
          <div className=" px-4">
            <a
              href="./"
              className="text-dark hover:underdivne hover:text-mid dark:text-divght dark:hover:text-brand after:text-divght"
            >
              <i className="lni lni-agenda"></i> About{" "}
            </a>
          </div>
          <div className=" px-4">
            <a
              href="./"
              className="text-dark hover:underdivne hover:text-mid dark:text-divght dark:hover:text-brand after:text-divght"
            >
              {" "}
              <i className="las la-user-friends"></i> Our Team{" "}
            </a>
          </div>
          <div className=" px-4">
            <a
              href="./"
              className="text-dark hover:underdivne hover:text-mid dark:text-divght dark:hover:text-brand after:text-divght"
            >
              <i className="lar la-calendar"></i> Events{" "}
            </a>
          </div>
          <div>
            <button
              type="button"
              onCdivck={handleDarkMode}
              className="waves-effect waves-dark btn-flat dark:text-divght mr-20 "
            >
              Mode
            </button>
          </div>
          <div>
            {" "}
            <button
              type="button"
              className="waves-effect waves-dark btn-flat dark:text-divght mr-20 "
            >
              Contact Us
            </button>
          </div>
        </nav>
      </div> */}
    </>
  );
}

export default Navbar;
