/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import AboutCarousel from "./AboutCarousel";
import { urlFor } from "../../../utils/sanity";
import PortableText from "react-portable-text";
import GradientButton from "../../UtilComponents/GradientButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const About = ({ content, id }) => {
  return (
    <section id={id} title="About Section" className="bg-light xl:max-h-screen max-h-full dark:bg-dark text-dark dark:text-white">
      <div className="grid xl:grid-cols-2 max-w-[1920px] mx-auto sm:items-center xl:h-screen overflow-hidden text-center xl:text-left">
        <div className="flex flex-col space-y-10 py-10 xl:py-0 xl:space-y-14 mx-6 text-sm sm:text-base sm:mx-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl underline underline-offset-8">About Us</h1>
          <PortableText
            className='dark:text-slate-300 mx-auto xl:mx-0 lg:w-3/4 space-y-3'
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={content?.body}
          // serializers={{
          //     h1: (props) => {
          //         <h1 className='text-2xl font-bold my-5' {...props} />
          //     },
          //     h2: (props) => {
          //         <h2 className='text-xl font-bold my-5' {...props} />
          //     },
          //     li: ({ children }) => {
          //         <li className='ml-4 list-disc'>{children}</li>
          //     },
          //     link: ({ href, children }) => {
          //         <a href={href} className='text-blue-500 hover:underline'>{children}</a>
          //     },
          // }}
          />
          <div className="flex justify-center xl:justify-start item-center">
            <GradientButton name="Know More" link="/" Icon={AiOutlineArrowRight} />
          </div>
        </div>

        <div className="hidden sm:flex xl:-rotate-45 px-10 py-10 xl:py-0 lg:px-24 xl:px-0 flex-col items-center overflow-hidden space-y-4 w-full">
          <div className="w-full flex items-end h-96 space-x-4">
            <div className="bg-gray-600 drop-shadow-xl h-full w-full xl:h-1/2 xl:w-1/3">
              <Image loading="lazy" src={urlFor(content?.images?.img1).url()} layout="fill" objectFit="cover" />
            </div>
            <div className="bg-gray-600 drop-shadow-xl h-full w-full xl:w-2/3">
              <Image loading="lazy" src={urlFor(content?.images?.img2).url()} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="w-full bg-gray-600 h-96 drop-shadow-xl">
            <Image loading="lazy" src={urlFor(content?.images?.img3).url()} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <AboutCarousel images={content?.images} />
    </section>
  );
};

export default About;
