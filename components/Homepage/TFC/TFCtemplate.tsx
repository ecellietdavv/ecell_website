import Image from 'next/image';
import React from 'react';
import TFCMobile from './TFCMobile';
import { motion } from 'framer-motion';
import { tfcData } from '../../../data/tfcData';

type TFCProps = {
  id: string;
};

const TFCtemplate = ({ id }: TFCProps) => {
  return (
    <section id={id} className="dark:bg-dark py-8 bg-light">
      <TFCMobile />
      <div className="sm:block hidden">
        <h2 className="lg:text-4xl px-4 lg:px-0 text-3xl antialiased text-center font-bold dark:text-light">
          Welcome To E-Cell IET DAVV
        </h2>
        <div className="border-t-4 my-8 lg:w-1/5 md:w-1/5 w-2/4 mx-auto border-brand-500 border-opacity-20"></div>
        <div className="grid px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 dark:bg-dark grid-cols-1">
          {tfcData.map((value, idx) => {
            const { desc, img, name } = value;
            return (
              <motion.div
                className="shadow-lg flex py-8 flex-col justify-center space-y-4 items-center"
                key={idx}
                whileHover={{ scale: [1, 1.05] }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  loading="lazy"
                  height={192}
                  width={192}
                  src={img}
                  alt={name}
                />
                <h3 className="text-center font-semibold text-2xl dark:text-light">
                  {name}
                </h3>

                <p className="capitalize text-sm text-center dark:text-light my-2 mx-auto px-4 sm:px-10">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TFCtemplate;
