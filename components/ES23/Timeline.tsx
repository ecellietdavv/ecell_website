import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import {
  timelineDataDay1,
  timelineDataDay2,
} from '../../data/ES23/timelineData';
import DotsBG from './DotsBG';
import { AiFillLeftSquare, AiFillRightSquare } from 'react-icons/ai';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';

type Props = {
  date: Date;
};

type NodeData = {
  title: string;
  startTime: string;
  endTime?: string;
};
type NodeProps = {
  nodeData: NodeData;
  number: number;
  end: boolean;
};

const Timeline = (props: Props) => {
  const { date } = props;
  const [day, setDay] = useState(1);
  const timelineData = day === 1 ? timelineDataDay1 : timelineDataDay2;

  const TimelineNode = (props: NodeProps) => {
    const { nodeData, number, end } = props;
    const { startTime, endTime, title } = nodeData;
    const [viewMore, setViewMore] = useState(false);

    const sd = moment(startTime).toDate();
    const ed = endTime ? moment(endTime).toDate() : null;
    const d = moment(date).toDate();

    const returnClass = () => {
      if (ed === null) {
        return d > sd ? 'ring-green-700' : 'ring-yellow-500';
      }

      if (d > sd && d < ed) {
        return 'ring-green-500 animate-pulse';
      }

      if (d > sd && d > ed) {
        return 'ring-green-700';
      }

      return 'ring-yellow-500';
    };

    return (
      <motion.li
        animate={{
          x: [-100, 0],
          opacity: [0, 100],
        }}
        transition={{
          delay: number * 0.1,
          ease: 'easeInOut',
          duration: 1,
        }}
        viewport={{ once: true }}
        className="relative flex space-x-6 sm:block sm:space-x-0"
      >
        <div className="flex items-center">
          <div
            className={classNames(
              'z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-8 shrink-0',
              returnClass()
            )}
          >
            {number}
          </div>
          {!end ? (
            <div className="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
          ) : null}
        </div>
        <div className="mt-3 sm:pr-8 space-y-2">
          <h4
            className={classNames(
              'text-sm max-w-[250px] sm:max-w-[300px] font-semibold text-white',
              viewMore ? '' : 'line-clamp-2'
            )}
          >
            {title}
          </h4>
          {title.length > 70 ? (
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => {
                setViewMore(!viewMore);
              }}
            >
              <span>{viewMore ? 'View less' : 'View more'}</span>
              {viewMore ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
            </button>
          ) : null}
          <time className="block mb-2 text-sm font-normal leading-none text-gray-100">
            {moment(startTime).format('h:mm A')}
            {endTime ? (
              <span className="">
                {' '}
                <span>-</span> {moment(endTime).format('h:mm A')}
              </span>
            ) : null}
          </time>
        </div>
      </motion.li>
    );
  };

  return (
    <section
      id="es23_timeline"
      className="flex flex-col items-center justify-center relative py-10 sm:py-20"
    >
      <DotsBG />
      <Image
        src="/assets/background/TimelineBG.gif"
        className="absolute -z-10 object-cover"
        alt="Timeline BG"
        fill
      />
      <h1 className="heading">Timeline</h1>
      <div className="text-xl sm:text-2xl font-semibold my-3 text-white flex space-x-4 items-center z-10">
        <AiFillLeftSquare
          className="cursor-pointer"
          onClick={() => {
            setDay(1);
          }}
        />
        <span>
          Day {day} &#40;
          {moment(day === 1 ? '2023-04-11' : '2023-04-12').format('LL')}
          &#41;
        </span>
        <AiFillRightSquare
          className="cursor-pointer"
          onClick={() => {
            setDay(2);
          }}
        />
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 sm:gap-y-16 py-10 lg:py-20 items-start">
        {timelineData.map((data, key) => {
          return (
            <TimelineNode
              nodeData={data}
              key={key}
              number={key + 1}
              end={key + 1 === timelineData.length}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default Timeline;
