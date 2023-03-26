import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { eventData } from '../../data/ES23/eventData';
import { motion } from 'framer-motion';

type Event = {
  name: string;
  desc: string;
  img: string;
};

type EventCardProps = {
  event: Event;
  idx: number;
};

const EventCard = ({ event, idx }: EventCardProps) => {
  const { name, desc, img } = event;
  return (
    <motion.div
      whileInView={{
        y: [100, 0],
        opacity: [0, 100],
      }}
      transition={{
        delay: idx * 0.1,
        ease: 'easeInOut',
      }}
      viewport={{ once: true }}
      className={classNames(
        'flex flex-col md:gap-6 text-white justify-center items-center space-y-4 max-w-sm mx-auto group'
      )}
    >
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          layout="fill"
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-all ease-in-out duration-500"
          src={img}
          alt={name}
        />
      </div>
      <div className="w-full space-y-4">
        <p className="text-white font-semibold text-2xl lg:text-3xl">{name}</p>
        <p className="text-sm lg:text-md text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
};

const FlagshipEvents = () => {
  return (
    <div className="lg:min-h-screen sm:max-h-[600px] md:max-h-full sm:overflow-hidden flex flex-col items-center justify-center relative">
      <h1 className="heading">Flagship Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16 w-5/6 mx-auto py-10 lg:py-20">
        {eventData.map((event, idx) => {
          return <EventCard key={idx} idx={idx} event={event} />;
        })}
      </div>
    </div>
  );
};

export default FlagshipEvents;
