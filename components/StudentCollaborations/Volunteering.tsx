import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { perks } from '../../data/CAProgramPerks';
import GradientButton from '../UtilComponents/GradientButton';

type Perk = {
  title: string;
  desc: string;
};

type VolunteeringType = {
  id: string;
  img: string;
  link: string;
};

function Volunteering({ id, img, link }: VolunteeringType) {
  const PerkCard = ({ title, desc }: Perk) => {
    return (
      <div className="flex space-x-2 sm:space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          ></path>
        </svg>
        <div className="space-y-2">
          <p className="text-lg font-medium leading-snug">{title}</p>
          <p className="leading-snug">{desc}</p>
        </div>
      </div>
    );
  };
  return (
    <section id={id} className="dark:bg-dark dark:text-gray-100">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
          {perks &&
            perks.map((perk, idx) => {
              const { desc, name } = perk;
              return <PerkCard key={idx} title={name} desc={desc} />;
            })}

          <div className="pt-8 pl-2">
            <GradientButton
              link={link}
              name="Fill The Form"
              Icon={AiOutlineArrowRight}
            />
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <Image
              height={480}
              width={480}
              src={img}
              alt="ca-image"
              className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Volunteering;
