import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '../../utils/sanity';
import SectionDescCard from '../UtilComponents/SectionDescCard';
import GradientButton from '../UtilComponents/GradientButton';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import ItemsCarousel from 'react-items-carousel';
import { useEffect } from 'react';
import Link from 'next/link';
import PortableText from 'react-portable-text';
import { Event } from '../../types/typings';
import { randomImage } from '../../utils/randomAssets';

type StartupProps = {
  startups: Event[];
  id: string;
};

type StartupCardData = {
  startup: Event;
};

const Startups = ({ startups, id }: StartupProps) => {
  const StartupCard = ({ startup }: StartupCardData) => {
    const { img, name, desc, blog } = startup;
    const slug = blog?.slug.current;
    const [show, setShow] = useState(false);
    return (
      <div
        className="flex pb-4 group cursor-pointer flex-col text-center text-dark dark:text-light justify-start items-center h-full space-y-2 bg-light rounded-lg border border-light shadow-md dark:bg-dark dark:border-mid"
        key={slug}
        onClick={() => setShow(!show)}
      >
        <div className="h-52 bg-dark/10 dark:bg-light overflow-hidden flex justify-center items-center p-6">
          <Image
            loading="lazy"
            src={urlFor(img).url()}
            alt={name}
            height={490}
            width={600}
            className="object-contain group-hover:scale-105 ease-in-out duration-200"
          />
        </div>

        <h3
          className={`${
            show
              ? 'text-brand-500 text-xl font-bold border-brand-500'
              : 'text-xl font-bold'
          }`}
        >
          {name}
        </h3>
        {show ? (
          <div className="px-6 line-clamp-3">
            <PortableText
              className=""
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={desc}
              serializers={{
                h1: (props) => {
                  return <h1 className="text-2xl font-bold my-5" {...props} />;
                },
                h2: (props) => {
                  return <h2 className="text-xl font-bold my-5" {...props} />;
                },
                h3: (props) => {
                  return <h3 className="text-xl font-bold my-5" {...props} />;
                },
                h4: (props) => {
                  return <h4 className="text-xl font-bold my-5" {...props} />;
                },
                li: ({ children }) => {
                  return <li className="ml-4 list-disc">{children}</li>;
                },
                link: ({ href, children }) => {
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            />
            {slug && (
              <span className="font-semibold">
                <Link href={`/blogs/${slug}`}>Read More ...</Link>
              </span>
            )}
          </div>
        ) : null}
        {show ? (
          <AiOutlineUp
            className={`${show ? 'text-brand-500' : ''} text-center w-full`}
          />
        ) : (
          <AiOutlineDown
            className={`${show ? 'text-brand-500' : ''} text-center w-full`}
          />
        )}
      </div>
    );
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [width, setWidth] = useState(1080);

  useEffect(() => {
    setWidth(window?.innerWidth);
  }, [width]);

  const getNoOfCards = () => {
    if (width >= 1080) return 3;
    else if (width >= 640) return 2;
    else return 1;
  };

  return (
    <section id={id} className="dark:bg-dark">
      <SectionDescCard
        name="Flagship Startups"
        desc="Startups from E-CELL IET DAVV."
      />

      <div className="w-full">
        <div className="max-w-7xl mx-auto justify-center px-6 items-center py-10">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={getNoOfCards()}
            gutter={20}
            leftChevron={
              <BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />
            }
            rightChevron={
              <BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />
            }
            chevronWidth={100}
            infiniteLoop={true}
            slidesToScroll={1}
            showSlither={width >= 640}
          >
            {startups &&
              startups?.map((startup, idx) => {
                return <StartupCard key={idx} startup={startup} />;
              })}
          </ItemsCarousel>
        </div>
      </div>

      <div className="flex justify-center item-center pb-10">
        <GradientButton
          name="All Startups"
          link="/startups"
          Icon={AiOutlineArrowRight}
        />
      </div>
    </section>
  );
};

export default Startups;
