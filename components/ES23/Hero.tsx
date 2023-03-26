import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const handlePointerMove = (e: any) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative gradientBackground"
    >
      <div className="bg-gradient-to-r flex from-black to-transparent h-full w-full z-10 absolute top-0 left-0">
        <div className="flex justify-center items-center sm:w-1/2 flex-col">
          <div className="space-y-12 w-3/4">
            <div className="">
              <span className="text-lg lg:text-xl xl:text-2xl uppercase text-white font-medium">
                INTRODUCING
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl uppercase text-white font-bold">
                Esummit&apos;23
              </h1>
            </div>

            <p className="lg:text-md xl:text-lg text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, dolores expedita consequuntur esse nemo odio natus
              dolore cumque sunt debitis aliquam reiciendis saepe? Perspiciatis
              quae esse quod, asperiores sapiente pariatur?
            </p>

            <button className="relative inline-flex items-center px-12 py-3 overflow-hidden lg:text-md xl:text-lg font-medium text-orange-500 border-2 border-orange-500 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">REGISTER NOW</span>
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col justify-center items-center">
          {/* <Image
            src="/assets/logos/ES23.svg"
            height={400}
            width={400}
            alt="ESummit'23 Logo"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
