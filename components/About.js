/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-light sm:max-h-screen dark:bg-dark text-dark dark:text-white mb-10 lg:mb-0">
      <div className="grid md:grid-cols-2 sm:items-center sm:h-screen overflow-hidden text-center sm:text-left">
        <div className="flex flex-col space-y-14 sm:mx-20">
          <h1 className="text-6xl underline underline-offset-8">About Us</h1>
          <p className=" dark:text-slate-300 mx-auto sm:mx-0 w-3/4">
            It is often said that "science of today is technology of tomorrow".
            And in, ACIIE, IET-DAVV we are determined to achieve this very goal.
            Entrepreneurs with a technical background like our students have an
            amazing capability to innovate both on the technical and business
            fronts.
          </p>
          <button className="rounded-xl text-white mx-auto sm:mx-0 bg-brand-600 w-fit hover:bg-brand-500 font-semibold px-10 p-2">
            Know More
          </button>
        </div>

        <div className="flex -rotate-45 flex-col h-full overflow-hidden space-y-4 w-full">
          <div className="w-full flex items-end h-1/2 space-x-4">
            <div className="bg-gray-600 drop-shadow-xl h-1/2 w-1/3"></div>
            <div className="bg-gray-600 drop-shadow-xl h-full w-2/3"></div>
          </div>
          <div className="w-full bg-gray-600 h-1/2 drop-shadow-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
