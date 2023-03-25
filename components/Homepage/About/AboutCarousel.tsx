import Image from 'next/image';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

type AboutCarouselProps = {
  images: string[];
};

function AboutCarousel({ images }: AboutCarouselProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <div className="p-4 sm:hidden block ">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={10}
        leftChevron={
          <BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />
        }
        rightChevron={
          <BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />
        }
        chevronWidth={100}
        infiniteLoop={true}
        slidesToScroll={1}
        showSlither={false}
      >
        <div className="relative h-52 w-96">
          <Image
            alt="Ecell IET DAVV About Image 1"
            loading="lazy"
            src={images[0]}
            className="object-cover"
            fill
          />
        </div>
        <div className="relative h-52 w-96">
          <Image
            alt="Ecell IET DAVV About Image 2"
            loading="lazy"
            src={images[1]}
            className="object-cover"
            fill
          />
        </div>
        <div className="relative h-52 w-96">
          <Image
            alt="Ecell IET DAVV About Image 3"
            loading="lazy"
            src={images[2]}
            className="object-cover"
            fill
          />
        </div>
      </ItemsCarousel>
    </div>
  );
}

export default AboutCarousel;
