import React from 'react';
import { IconType } from 'react-icons/lib';
import CountUp from 'react-countup';
import { BsFillPersonFill, BsFillStarFill } from 'react-icons/bs';
import { MdAppRegistration } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

type StatsCardProps = {
  name: string;
  value: number | string;
  Icon: IconType;
};

const StatsCard = ({ name, value, Icon }: StatsCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row p-4 space-y-2 sm:space-y-0 sm:space-x-4 rounded-lg md:space-x-6 bg-mid/20">
      <div className="flex justify-center items-center rounded-lg text-mandys-pink-100">
        <Icon className="h-10 w-10" />
      </div>
      <div className="flex flex-col space-y-1 justify-center items-center text-center">
        <p className="capitalize lg:text-md xl:text-lg text-gray-400">{name}</p>
        <p className="text-3xl lg:text-3xl xl:text-5xl font-semibold dark:text-white leading-none">
          {typeof value === 'number' ? (
            <span>
              <CountUp end={value} duration={1} /> +
            </span>
          ) : (
            value
          )}
        </p>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 0] }}
      transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
      viewport={{ once: true }}
      className="sm:h-screen sm:max-h-[600px] lg:max-h-full sm:overflow-hidden flex items-center justify-end relative"
    >
      <div className="hidden sm:block w-full absolute z-0 top-20">
        <Marquee
          gradient={true}
          speed={100}
          gradientColor={[0, 0, 0]}
          direction="left"
          className="uppercase text-gray-400 font-bold text-7xl h-36 -rotate-12"
        >
          <span className="px-12 text-orange-500">VISION OF TRANSCENDENCE</span>
          <span className="px-12 text-rose-500">VISION OF TRANSCENDENCE</span>
        </Marquee>
      </div>

      <div className="bg-dark rounded-xl lg:rounded-l-xl z-10 mx-auto sm:mx-0 w-11/12 xl:w-5/6 2xl:w-3/4 px-8 sm:px-12 py-10 text-gray-200">
        <div className="flex justify-between space-y-4 sm:space-y-0 flex-col sm:flex-row">
          <div className="flex flex-col">
            <h3 className="text-lg lg:text-lg xl:text-xl">Some Of Our</h3>
            <h2 className="heading">Statistics</h2>
          </div>
          <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex
            voluptatum laudantium unde rem fugiat, tenetur corrupti libero
            cumque consectetur mollitia ipsum id debitis quas dignissimos.
            Repudiandae dolorum voluptas tempore!
          </p>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          <StatsCard name="Events" value={10} Icon={BsFillStarFill} />
          <StatsCard name="Speakers" value={20} Icon={BsFillPersonFill} />
          <StatsCard
            name="Registrations"
            value={100}
            Icon={MdAppRegistration}
          />
          <StatsCard name="Sponsors" value={5} Icon={SiGithubsponsors} />
        </div>
      </div>
    </motion.section>
  );
};

export default Statistics;
