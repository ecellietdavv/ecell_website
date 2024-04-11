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
            Welcome to E-Cell IET DAVV, a student-driven initiative focused on developing an entrepreneurial spirit amongst young minds. Our mission is to provide a platform for aspiring entrepreneurs and innovators to explore and execute their ideas. We are proud to have helped numerous startups grow and achieve success, with our members winning various entrepreneurship challenges such as National Entrepreneurs challenge at IIT BOMBAY, runner up at Entrepreneurship development drive hosted by IIT MADRAS and being recognized by esteemed institutions. Our goals are to help students develop essential skills such as teamwork, leadership, and critical thinking, preparing them to face the challenges of the corporate world confidently. We strive to create opportunities for our members to network, collaborate, and learn from experienced professionals, further enhancing their growth prospects. Join us as we empower the next generation of entrepreneurs and change-makers.
          </p>
        </div>

        <div className="hidden sm:flex xl:-rotate-45 px-10 py-10 xl:py-0 lg:px-24 xl:px-0 flex-col items-center overflow-hidden space-y-4 w-full">
          <div className="w-full flex items-end h-96 space-x-4">
            <div
              className="bg-gray-600 relative overflow-hidden drop-shadow-xl h-full w-full xl:h-1/2 xl:w-1/3 bg-blend-multiply"
              style={{ background: `url(${images[0]})` }}
            >
              <Image
                alt="Ecell IET DAVV About Image 1"
                className="xl:rotate-45"
                loading="lazy"
                src={images[0]}
                layout="fill"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div
              className="bg-gray-600 relative overflow-hidden drop-shadow-xl h-full w-full xl:w-2/3 bg-blend-multiply"
              style={{ background: `url(${images[1]})` }}
            >
              <Image
                alt="Ecell IET DAVV About Image 2"
                className="xl:rotate-45"
                loading="lazy"
                src={images[1]}
                layout="fill"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div
            className="w-full relative overflow-hidden bg-gray-600 h-96 drop-shadow-xl bg-blend-multiply"
            style={{ background: `url(${images[2]})` }}
          >
            <Image
              alt="Ecell IET DAVV About Image 3"
              className="xl:rotate-45"
              loading="lazy"
              src={images[2]}
              layout="fill"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      <AboutCarousel images={images} />
    </section>
  );
};

export default About;
