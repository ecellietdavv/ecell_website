import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { dropdownItems, navItems } from '../../utils/navigationLinks';
import { StoreContext } from '../../utils/Store';
import { handleScroll } from '../../utils/utilityFunctions';
import Dropdown from '../UtilComponents/Dropdown';

function Drawer() {
  const { state, dispatch } = useContext(StoreContext);
  const { openDrawer } = state;

  const handleDrawer = () => {
    openDrawer
      ? dispatch({ type: 'CLOSE_DRAWER' })
      : dispatch({ type: 'OPEN_DRAWER' });
  };

  const handleContact = () => {
    handleScroll('footer');
    dispatch({ type: 'CLOSE_DRAWER' });
  };

  const transitionClass = openDrawer
    ? 'fixed z-[60] top-0 lg:hidden block h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-dark translate-x-0 transition-transform duration-300 transform'
    : 'fixed top-0 z-[60] lg:hidden block h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-dark -translate-x-full transition-transform duration-300 transform';

  return (
    <nav>
      <div className={transitionClass}>
        <h5 className="text-base font-semibold text-mid uppercase dark:text-light">
          Contents
        </h5>
        <button
          onClick={handleDrawer}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <AiOutlineClose className="w-5 h-5" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="flex flex-col space-y-4 my-4">
            {navItems.map((value, idx) => {
              const { name, link } = value;
              return (
                <Link key={idx} href={link}>
                  <li
                    onClick={handleDrawer}
                    className="cursor-pointer bg-mid/30 dark:text-white w-full dark:bg-mid py-3 text-center rounded-lg text-md"
                    key={idx}
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
            <Dropdown name="Collaborations" items={dropdownItems} />
            <a href="https://rachna-frontend.vercel.app/">Innovision</a>

          </ul>
          <button
            type="button"
            onClick={handleContact}
            className="text-white w-full justify-center bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 rounded-lg sm:rounded-full px-4 py-3 sm:py-2 text-center inline-flex items-center space-x-2"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Drawer;
