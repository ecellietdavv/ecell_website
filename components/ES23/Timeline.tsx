import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/ES23/timelineData';
import DotsBG from './DotsBG';

type Props = {
  date: Date;
};

type NodeData = {
  title: string;
  startDate: string;
  endDate?: string;
};
type NodeProps = {
  nodeData: NodeData;
  number: number;
  end: boolean;
};

const Timeline = (props: Props) => {
  const { date } = props;
  const TimelineNode = (props: NodeProps) => {
    const { nodeData, number, end } = props;
    const { startDate, endDate, title } = nodeData;

    const sd = moment(startDate).toDate();
    const ed = endDate ? moment(endDate).toDate() : null;
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
        whileInView={{
          x: [-100, 0],
          opacity: [0, 100],
        }}
        transition={{
          delay: number * 0.1,
          ease: 'easeInOut',
          duration: 4,
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
        <div className="mt-3 sm:pr-8">
          <h4 className="text-lg font-semibold text-white whitespace-nowrap">
            {title}
          </h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-100">
            {moment(startDate).format('Do MMM YYYY')}
            {endDate ? (
              <span className="">
                {' '}
                <span>-</span> {moment(endDate).format('Do MMM YYYY')}
              </span>
            ) : null}
          </time>
        </div>
      </motion.li>
    );
  };

  return (
    <section
      id="timeline"
      className="sm:h-screen sm:max-h-[600px] md:max-h-[900px] xl:max-h-full sm:overflow-hidden flex flex-col items-center justify-center relative"
    >
      <DotsBG />
      <Image
        src="/assets/background/TimelineBG.gif"
        className="absolute -z-10 object-cover"
        alt="Timeline BG"
        fill
      />
      <h1 className="heading">Timeline</h1>
      <ol className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 sm:gap-y-16 py-10 lg:py-20">
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
