import React, { FC, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { IconBaseProps } from 'react-icons/lib';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillCalendarDateFill, BsFillPeopleFill } from 'react-icons/bs';
import { sanityClient } from '../../utils/sanity';
import { getRegistrationsQuery } from '../../utils/queries';
import moment from 'moment';

const Stats = () => {
  const [registrations, setRegistrations] = useState<number>(0);

  useEffect(() => {
    const getRegistrations = async () => {
      const registrations = await sanityClient.fetch(getRegistrationsQuery);
      setRegistrations(registrations.length);
    };

    getRegistrations();
  }, []);

  const StatsCard = ({
    name,
    value,
    Icon,
    numeric,
  }: {
    name: string;
    value: number | string;
    Icon: FC<IconBaseProps>;
    numeric: boolean;
  }) => {
    return (
      <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-mid/20 dark:bg-dark/20">
        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-mandys-pink-100">
          <Icon className="text-4xl" />
        </div>
        <div className="flex flex-col justify-center align-middle">
          <p className="capitalize text-froly-200">{name}</p>
          <p className="text-3xl font-semibold dark:text-white leading-none">
            {numeric ? (
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
  return (
    <section className="p-6 my-16 bg-slate-300 dark:bg-mid">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          name="Registrations"
          numeric={true}
          value={registrations}
          Icon={BsFillPeopleFill}
        />
        <StatsCard
          name="Date"
          numeric={false}
          value={'20-21 Mar'}
          Icon={BsFillCalendarDateFill}
        />
        <StatsCard
          name="Time"
          numeric={false}
          value={'10 AM-6 PM'}
          Icon={BiTimeFive}
        />
        <StatsCard
          name="Starts"
          numeric={false}
          value={moment('20230320', 'YYYYMMDD').fromNow()}
          Icon={BiTimeFive}
        />
      </div>
    </section>
  );
};

export default Stats;
