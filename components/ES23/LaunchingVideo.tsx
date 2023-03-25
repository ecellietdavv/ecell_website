import React from 'react';

type Props = {};

const LaunchingVideo = (props: Props) => {
  return (
    <div className="h-screen flex flex-col space-y-16 justify-center items-center">
      <h1 className='text-4xl font-semibold  text-white '>Reimagine Events the smart way</h1>
      <iframe width="600" height="350" src="https://www.youtube.com/embed/bNpx7gpSqbY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>);
};

export default LaunchingVideo;
