import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { eventData } from '../../data/ES23/eventData';
import { motion } from 'framer-motion';
import { IoOpenOutline } from 'react-icons/io5';
import Link from 'next/link';

type Event = {
  name: string;
  desc: string;
  img: string;
  registration_form: string;
};

type EventCardProps = {
  event: Event;
  idx: number;
};

const EventCard = ({ event, idx }: EventCardProps) => {
  const { name, desc, img, registration_form } = event;
  return (
    <motion.div
      animate={{
        y: [100, 0],
        opacity: [0, 100],
      }}
      transition={{
        delay: idx * 0.5,
        ease: 'easeInOut',
        duration: 1,
      }}
      viewport={{ once: true }}
      className={classNames(
        'flex flex-col md:gap-6 text-white justify-center items-center space-y-4 max-w-sm mx-auto group cursor-pointer'
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
        <Link
          href={registration_form}
          rel="noreffer"
          target="_blank"
          prefetch={false}
          className="text-white font-semibold text-2xl lg:text-3xl flex items-center group-hover:underline space-x-3"
        >
          <span>{name}</span> <IoOpenOutline />
        </Link>
        <p className="text-sm lg:text-md text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
};

const Events = () => {
  return (
    <section
      id="es23_events"
      className="lg:min-h-screen sm:max-h-[600px] md:max-h-full sm:overflow-hidden flex flex-col items-center justify-center relative"
    >
      <h1 className="heading">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16 w-5/6 mx-auto py-10 lg:py-20">
        {eventData.map((event, idx) => {
          return <EventCard key={idx} idx={idx} event={event} />;
        })}
      </div>
    </section>
  );
};

export default Events;
