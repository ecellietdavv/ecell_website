import React from 'react';

type SectionDividerProps = {
  img: string;
  name?: string;
};

function SectionDivider({ img, name }: SectionDividerProps) {
  return (
    <div
      style={{
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url('${img}')`,
      }}
      className={`h-[300px] md:h-[540px] relative w-full flex justify-center items-center`}
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex justify-center absolute z-10 items-center">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-white">
          {name}
        </h1>
      </div>
    </div>
  );
}

export default SectionDivider;
