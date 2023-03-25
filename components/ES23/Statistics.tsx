import React from 'react';
import { IconType } from 'react-icons/lib';
import CountUp from 'react-countup';
import { BsFillPersonFill, BsFillStarFill } from 'react-icons/bs';
import { MdAppRegistration } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';

type StatsCardProps = {
  name: string;
  value: number | string;
  Icon: IconType;
};

const StatsCard = ({ name, value, Icon }: StatsCardProps) => {
  return (
    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-mid/20 dark:bg-dark/20">
      <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-mandys-pink-100">
        <Icon className="text-4xl" />
      </div>
      <div className="flex flex-col justify-center align-middle">
        <p className="capitalize text-lg text-gray-400">{name}</p>
        <p className="text-5xl font-semibold dark:text-white leading-none">
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
    <main className="h-screen flex items-center justify-end">
      <div className="bg-dark rounded-l-xl shadow-[0px_50px_100px_rgba(249,115,22,_0.7)] w-3/4 px-12 py-10 text-gray-200">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl">Some Of Our</h3>
            <h2 className="text-4xl text-white font-bold uppercase">
              Statistics
            </h2>
          </div>
          <p className="max-w-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex
            voluptatum laudantium unde rem fugiat, tenetur corrupti libero
            cumque consectetur mollitia ipsum id debitis quas dignissimos.
            Repudiandae dolorum voluptas tempore!
          </p>
        </div>

        <div className="w-full grid grid-cols-4 gap-4 py-10">
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
    </main>
  );
};

export default Statistics;
