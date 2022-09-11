/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "../assets/images/images-event/Feature_Mission.jpg"

const About = () => {
  return (
    <section className="bg-light dark:bg-dark text-dark dark:text-white">
      <div className="grid md:grid-cols-2 sm:items-center sm:h-screen overflow-hidden text-center sm:text-left sm:mx-20">
        <div className="flex flex-col space-y-14">
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

        {/* <div className="pt-14 hidden md:flex">
          <div className="isometric-card card-1  dark:bg-slate-600 "></div>
          <div className="isometric-card card-2 dark:bg-slate-600"></div>
          <div className="isometric-card card-3 dark:bg-slate-600"></div>
        </div> */}

        <div className="carousel w-5/6 mx-auto pt-5 md:hidden block ">
          <div id="animation-carousel" className="relative" data-carousel="static">

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="hidden rounded-lg duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="active">
                <Image src={logo} alt="image 1"></Image>
                {/* <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>
              <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                {/* <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>
              <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                {/* <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>
              <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                {/* <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>
              <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                {/* <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>
            </div>

            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 dark:text-white text-dark sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-dark sm:w-6 sm:h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
