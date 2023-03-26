import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { eventData } from '../../data/ES23/eventData';

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
    <div
      className={classNames(
        'p-10 flex md:gap-6 text-white bg-dark py-16',
        idx % 2 === 0 ? ' justify-center items-end text-rose-500 space-x-8' : 'flex-row-reverse justify-center items-end'
      )}
    >
      <div className="relative w-20 h-20 sm:w-36 sm:h-36 xl:w-80 xl:h-80">
        <Image layout="fill" objectFit="cover"  src={img} alt='E_Summit_23' />
      </div>
      <div className=' md:w-1/4'>
        <p className="text-white text-3xl">{name}</p>
        <p className='text-md text-[#c7c7c7]'>{desc}</p>
      </div>
      
    </div>
  );
};

const FlagshipEvents = (props: Props) => {
  return (
    <div className="min-h-screen ">
      {eventData.map((event, idx) => {
        return <EventCard key={idx} idx={idx} event={event} />;
      })}
    </div>
  );
};

export default FlagshipEvents;
