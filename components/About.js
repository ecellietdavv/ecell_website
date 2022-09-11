/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "../assets/images/images-event/Feature_Mission.jpg"
const About = () => {
  return (
    <>
    {/* <script>
        let clientID= "DaF1iNEA6eAKGxIQJ7e7iGYx751vZbjiExHq-5ESaEw";
        let endpoint = `https://api.unsplash.com/photos/random?client_id=${clientID}`;

        fetch(endpoint)
          .then(function (response) {
             console.log( response.json())
          })
    </script> */}
      <style>
        {`
        .isometric-card{
            margin: 0 auto;
  transform: rotateX(53deg) rotateZ(25deg) rotateY(3deg);
  transform-style: preserve-3d;
  background-color: #fcfcfc;
  will-change: transform;
  width: 240px;
  height: 240px;
  border-radius: 2rem;
  box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  transition: 0.4s ease-in-out transform, 0.3s ease-in-out box-shadow;
}
.card-1{
    
}
.card-2{
    
}
.card-3{
}
.isometric-card:hover{
    transform: translate3d(0px, -16px, 0px) rotateX(53deg)  rotateZ(25deg) rotateY(3deg);
  box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    54px 54px 28px -10px rgba(34, 33, 81, 0.15);
}        
        `}
      </style>
      <div className="grid md:grid-cols-2 bg-light dark:bg-dark text-dark dark:text-white">
        <div className="ml-9 mr-9">
          <h1 className="text-3xl underline underline-offset-8">About Us</h1>
          <p className="mt-5 dark:text-slate-300">
            It is often said that "science of today is technology of tomorrow".
            And in, ACIIE, IET-DAVV we are determined to achieve this very goal.
            Entrepreneurs with a technical background like our students have an
            amazing capability to innovate both on the technical and business
            fronts.
          </p>
          <button className="rounded-xl mt-10 bg-brand-600 hover:bg-brand-500 font-semibold px-4 p-2">
            <a href="">Know More</a>
          </button>
        </div>
        <div className="pt-14 hidden md:flex  ">
          <div className="isometric-card card-1 dark:bg-slate-600"></div>
          <div className="isometric-card card-2 dark:bg-slate-600"></div>
          <div className="isometric-card card-3 dark:bg-slate-600"></div>
        </div>
        <div className="carousel pt-5 md:hidden block ">
            
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
    </>
  );
};

export default About;
