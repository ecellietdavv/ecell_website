import React from 'react';

type Props = {};

const LaunchingVideo = (props: Props) => {
  return (
    <div className="sm:h-screen sm:max-h-[600px] lg:max-h-full flex text-center flex-col w-full justify-center items-center relative">
      <div className="z-10 space-y-6 sm:space-y-16 w-11/12 lg:w-3/5">
        <h1 className="text-3xl sm:text-4xl font-semibold uppercase text-white ">
          HAVE A LOOK AT ESUMMIT&apos;23
        </h1>
        <div className="relative overflow-hidden w-full pt-[56.25%] shadow-[0px_50px_100px_rgba(249,115,22,_0.7)]">
          <iframe
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src="https://www.youtube.com/embed/bNpx7gpSqbY"
            title="E-Summit 23 Launching Video"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LaunchingVideo;
