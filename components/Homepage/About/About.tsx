/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import AboutCarousel from './AboutCarousel';

type AboutProps = {
  id: string;
};

const About = ({ id }: AboutProps) => {
  const images = [
    '/assets/about-images/0.png',
    '/assets/about-images/1.png',
    '/assets/about-images/2.png',
  ];

  return (
    <section
      id={id}
      title="About Section"
      className="bg-light max-w-screen-2xl dark:bg-dark pt-10 text-dark dark:text-white"
    >
      <div className="grid xl:grid-cols-2 max-w-7xl mx-auto sm:items-center overflow-hidden text-center xl:text-left">
        <div className="flex flex-col space-y-10 py-10 xl:py-0 xl:space-y-14 sm:mx-6 text-sm sm:text-base">
          <div className="flex flex-col space-y-1 w-fit mx-auto xl:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl w-fit">
              About Us
            </h2>
            <div className="w-full h-10 relative">
              <Image
                src="/assets/svg/Underline.svg"
                alt="underline"
                layout="fill"
              />
            </div>
          </div>

          <p className="dark:text-slate-300 text-sm lg:text-lg mx-auto xl:mx-0 w-3/4 xl:w-5/6 space-y-3">
            It's a widely accepted saying that "Entrepreneurs are people who
            solve problems instead of complaining about them" and here at
            Entrepreneurship Cell, IET DAVV, it's our goal to make the students
            of today, the entrepreneurs of tomorrow. Entrepreneurs with
            technical knowledge like our students have an extraordinary capacity
            to innovate as well as on both, the technical and business fronts.
            It's our mission not only to introduce disciplined entrepreneurship
            to our students but to nourish their entrepreneurial spirit to
            transform their dreams and aspiration into reality.
          </p>
        </div>

        <div className="hidden sm:flex xl:-rotate-45 px-10 py-10 xl:py-0 lg:px-24 xl:px-0 flex-col items-center overflow-hidden space-y-4 w-full">
          <div className="w-full flex items-end h-96 space-x-4">
            <div
              className="bg-gray-600 drop-shadow-xl h-full w-full xl:h-1/2 xl:w-1/3 bg-blend-multiply"
              style={{ background: `url(${images[0]})` }}
            >
              <Image
                alt="Ecell IET DAVV About Image 1"
                className="xl:rotate-45"
                loading="lazy"
                src={images[0]}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className="bg-gray-600 drop-shadow-xl h-full w-full xl:w-2/3 bg-blend-multiply"
              style={{ background: `url(${images[1]})` }}
            >
              <Image
                alt="Ecell IET DAVV About Image 2"
                className="xl:rotate-45"
                loading="lazy"
                src={images[1]}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div
            className="w-full bg-gray-600 h-96 drop-shadow-xl bg-blend-multiply"
            style={{ background: `url(${images[2]})` }}
          >
            <Image
              alt="Ecell IET DAVV About Image 3"
              className="xl:rotate-45"
              loading="lazy"
              src={images[2]}
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
