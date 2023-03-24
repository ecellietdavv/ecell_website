import Image from 'next/image';
import React, { useState } from 'react';
import { tfcData } from '../../../data/tfcData';
import { urlFor } from '../../../utils/sanity';

const TFCMobile = () => {
  const [active, setActive] = useState(0);
  const { desc, img, name } = tfcData[active];

  return (
    <div className="sm:hidden">
      <h2 className="lg:text-4xl px-4 lg:px-0 text-3xl antialiased text-center font-bold dark:text-light">
        Welcome To E-Cell IET DAVV
      </h2>
      <div className="border-t-4 my-8 lg:w-1/5 md:w-1/5 w-2/4 mx-auto border-brand-500 border-opacity-20"></div>
      <div className="grid grid-cols-3 w-full justify-center items-center px-6">
        {['Think', 'Feel', 'Collaborate'].map((val, idx) => {
          return (
            <button
              onClick={() => setActive(idx)}
              className={
                active === idx
                  ? 'text-center px-6 py-2 bg-brand-600 text-white border-none shadow-md'
                  : 'text-center px-6 py-2 bg-light border-none shadow-md'
              }
              type="button"
              key={idx}
            >
              {val}
            </button>
          );
        })}
      </div>
      <div className="grid px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 dark:bg-dark grid-cols-1">
        <div className="shadow-lg flex py-8 flex-col justify-center space-y-4 items-center">
          <Image loading="lazy" height={192} width={192} src={img} alt={name} />
          <h3 className="text-center font-semibold text-2xl dark:text-light">
            {name}
          </h3>

          <p className="text-sm text-center dark:text-light my-2 mx-auto px-4 sm:px-10">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TFCMobile;
