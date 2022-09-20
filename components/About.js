/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import AboutCarousel from "./AboutCarousel";

const About = () => {
  return (
    <section id="about" className="bg-light xl:max-h-screen dark:bg-dark text-dark dark:text-white">
      <div className="grid xl:grid-cols-2 max-w-[1920px] mx-auto sm:items-center xl:h-screen overflow-hidden text-center xl:text-left">
        <div className="flex flex-col space-y-10 py-10 xl:py-0 xl:space-y-14 mx-6 text-sm sm:text-base sm:mx-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl underline underline-offset-8">About Us</h1>
          <p className="dark:text-slate-300 mx-auto xl:mx-0 lg:w-3/4">
            It's a widely accepted saying that "Entrepreneurs are people who solve problems instead of complaining about them" and here at Entrepreneurship Cell, IET DAVV, it's our goal to make the students of today, the entrepreneurs of tomorrow. 
          </p>
          <p className="dark:text-slate-300 mx-auto xl:mx-0 lg:w-3/4">
          Entrepreneurs with technical knowledge like our students have an extraordinary capacity to innovate as well as on both, the technical and business fronts. It's our mission not only to introduce disciplined entrepreneurship to our students but to nourish their entrepreneurial spirit to transform their dreams and aspiration into reality.
          </p>
          <button className="rounded-xl text-white mx-auto xl:mx-0 bg-brand-600 w-fit hover:bg-brand-500 font-semibold px-10 p-2">
            Know More
          </button>
        </div>

        <div className="hidden sm:flex xl:-rotate-45 px-10 py-10 xl:py-0 lg:px-24 xl:px-0 flex-col items-center overflow-hidden space-y-4 w-full">
          <div className="w-full flex items-end h-96 space-x-4">
            <div className="bg-gray-600 drop-shadow-xl h-full w-full xl:h-1/2 xl:w-1/3">
              <Image loading="lazy"  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(60).webp" layout="fill" objectFit="cover" />
            </div>
            <div className="bg-gray-600 drop-shadow-xl h-full w-full xl:w-2/3">
              <Image loading="lazy"  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(61).webp" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="w-full bg-gray-600 h-96 drop-shadow-xl">
            <Image loading="lazy"  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(62).webp" layout="fill" objectFit="cover" />
          </div>
        </div>

        <AboutCarousel />
      </div>
    </section>
  );
};

export default About;
