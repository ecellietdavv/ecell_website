import moment from 'moment';
import Image from 'next/image';
import React, { useRef } from 'react';
import { speakerData } from '../../data/ES23/speakerData';
import { randomPersonImage } from '../../utils/randomAssets';

type Speaker = {
  name: string;
  img: string;
};

type SpeakerCardProps = {
  speaker: Speaker;
  eventName: string;
  eventDate: string;
};

const SpeakerCard = ({ speaker, eventDate, eventName }: SpeakerCardProps) => {
  const { name, img } = speaker;
  const date = moment(eventDate).date();
  const month = moment(eventDate).format('MMM');
  return (
    <div className="relative flex items-end justify-start w-full min-w-[300px] text-left bg-center bg-cover h-96">
      <Image
        src={img}
        alt="name"
        fill
        className="z-0"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
      <div className="absolute z-10 top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        <p className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100">
          {eventName}
        </p>
        <div className="flex flex-col justify-start text-center text-gray-100">
          <span className="text-3xl font-semibold leading-none tracking-wide">
            {date}
          </span>
          <span className="leading-none uppercase">{month}</span>
        </div>
      </div>
      <h2 className="z-10 p-5">
        <span className="font-semibold text-2xl hover:underline text-gray-100">
          {name}
        </span>
      </h2>
    </div>
  );
};

const Speakers = () => {
  const scrollRef = useRef<HTMLDivElement | undefined>();

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 800, behavior: 'smooth' });
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -800, behavior: 'smooth' });
  };

  return (
    <section
      id="es23_speakers"
      className="sm:h-screen sm:max-h-[600px] md:max-h-[900px] xl:max-h-full sm:overflow-hidden flex flex-col items-center justify-center relative space-y-8"
    >
      <div className="flex justify-between items-center w-5/6">
        <h1 className="heading text-left">Meet Our Speakers</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 text-white">
          <button
            title="previous"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
            onClick={handleScrollLeft}
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            title="next"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
            onClick={handleScrollRight}
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl w-5/6 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div
          ref={scrollRef}
          className="flex gap-5 w-full overflow-auto scrollbar-none"
        >
          {speakerData.map((it, idx) => {
            const { speaker, eventDate, eventName } = it;
            return (
              <SpeakerCard
                eventDate={eventDate}
                eventName={eventName}
                speaker={speaker}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
