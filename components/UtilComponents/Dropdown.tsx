import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

type Item = {
  name: string;
  link: string;
};

type DropdownProps = {
  items: Item[];
  name: string;
};

function Dropdown({ items, name }: DropdownProps) {
  const [toggle, setToggle] = useState(false);
  const handleToggel = () => {
    setToggle(!toggle);
  };

  const dropdown = toggle
    ? 'bg-white my-4 shadow-lg dark:bg-mid w-full sm:absolute m-0 transform'
    : 'hidden';

  return (
    <div className="relative group">
      <button
        onClick={handleToggel}
        className="text-white w-full justify-center bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 rounded-lg sm:rounded-full px-4 py-3 sm:py-2 text-center inline-flex items-center space-x-2"
        type="button"
      >
        <span>{name}</span>
        <AiOutlineDown className="animate-bounce group-hover:animate-none" />
      </button>

      <div className={dropdown}>
        <ul className="text-sm text-gray-700 dark:text-gray-200">
          {items &&
            items?.map((item, idx: number) => {
              const { link, name } = item;
              return (
                <Link key={idx} href={link}>
                  <li
                    onClick={handleToggel}
                    key={idx}
                    className="block py-4 px-4 cursor-pointer border-b-2 sm:dark:hover:bg-dark/20 sm:hover:bg-mid/20 bg-mid/30"
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
