/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import AboutCarousel from './AboutCarousel';
import { urlFor } from '../../../utils/sanity';
import PortableText from 'react-portable-text';
import GradientButton from '../../UtilComponents/GradientButton';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { randomImage } from '../../../utils/randomAssets';

const About = ({ content, id }) => {
  const images = {
    img1: content?.images?.img1
      ? urlFor(content?.images?.img1)?.url()
      : randomImage,
    img2: content?.images?.img1
      ? urlFor(content?.images?.img2)?.url()
      : randomImage,
    img3: content?.images?.img1
      ? urlFor(content?.images?.img3)?.url()
      : randomImage,
  };
  return (
    <section
      id={id}
      title="About Section"
      className="bg-light max-w-screen-2xl dark:bg-dark pt-10 text-dark dark:text-white"
    >
      <div className="grid xl:grid-cols-2 max-w-7xl mx-auto sm:items-center overflow-hidden text-center xl:text-left">
        <div className="flex flex-col space-y-10 py-10 xl:py-0 xl:space-y-14 sm:mx-6 text-sm sm:text-base">
          <div className="flex flex-col space-y-1 w-fit mx-auto xl:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl w-fit">
              {content?.heading}
            </h1>
            <div className="w-full h-10 relative">
              <Image
                src="/assets/svg/Underline.svg"
                alt="underline"
                layout="fill"
              />
            </div>
          </div>
          <PortableText
            className="dark:text-slate-300 text-sm lg:text-lg mx-auto xl:mx-0 w-3/4 xl:w-5/6 space-y-3"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={content?.body}
          />
          {/* <div className="flex justify-center xl:justify-start item-center">
            <GradientButton name="Know More" link="/" Icon={AiOutlineArrowRight} />
          </div> */}
        </div>

        <div className="hidden sm:flex xl:-rotate-45 px-10 py-10 xl:py-0 lg:px-24 xl:px-0 flex-col items-center overflow-hidden space-y-4 w-full">
          <div className="w-full flex items-end h-96 space-x-4">
            <div
              className="bg-gray-600 drop-shadow-xl h-full w-full xl:h-1/2 xl:w-1/3 bg-blend-multiply"
              style={{ background: `url(${images?.img1})` }}
            >
              <Image
                alt="Ecell IET DAVV About Image 1"
                className="xl:rotate-45"
                loading="lazy"
                src={images?.img1}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className="bg-gray-600 drop-shadow-xl h-full w-full xl:w-2/3 bg-blend-multiply"
              style={{ background: `url(${images?.img2})` }}
            >
              <Image
                alt="Ecell IET DAVV About Image 2"
                className="xl:rotate-45"
                loading="lazy"
                src={images?.img2}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div
            className="w-full bg-gray-600 h-96 drop-shadow-xl bg-blend-multiply"
            style={{ background: `url(${images?.img3})` }}
          >
            <Image
              alt="Ecell IET DAVV About Image 3"
              className="xl:rotate-45"
              loading="lazy"
              src={images?.img3}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <AboutCarousel images={images} />
    </section>
  );
};

export default About;
