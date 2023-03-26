import classNames from 'classnames';
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
        'p-10 text-white bg-dark',
        idx % 2 === 0 ? 'flex text-rose-500 space-x-8' : 'flex-reverse'
      )}
    >
      <p className="text-orange-500">{name}</p>
      <p>{desc}</p>
    </div>
  );
};

const FlagshipEvents = (props: Props) => {
  return (
    <div className="min-h-screen">
      {eventData.map((event, idx) => {
        return <EventCard key={idx} idx={idx} event={event} />;
      })}
    </div>
  );
};

export default FlagshipEvents;
