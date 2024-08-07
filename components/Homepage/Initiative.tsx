import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../utils/sanity';
import SectionDescCard from '../UtilComponents/SectionDescCard';
import GradientButton from '../UtilComponents/GradientButton';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft, BiLogIn } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Initiative } from '../../types/typings';
import PortableText from 'react-portable-text';

type InitiativeHomepageProps = {
  initiatives: Initiative[];
  id: string;
};

type InitiativeCardProps = {
  insitiative: Initiative;
  idx: number;
};

const Initiative = ({ initiatives, id }: InitiativeHomepageProps) => {
  const IntiativeCard = ({ insitiative, idx }: InitiativeCardProps) => {
    const { img, name, desc, date, blog } = insitiative;
    return (
      <motion.div
        whileInView={{ y: [100, 0] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        key={idx}
        className={
          idx % 2 === 0
            ? 'flex p-4 sm:p-0 relative flex-col md:flex-row md:justify-between items-center w-full right-timeline '
            : ' flex p-4 sm:p-0 relative flex-col md:justify-between md:flex-row-reverse items-center w-full'
        }
      >
        <div className="order-1 md:w-5/12">
          <Image
            loading="lazy"
            width={600}
            height={200}
            className="object-cover rounded-t-lg md:rounded-lg"
            src={urlFor(img).url()}
            alt={name}
          />
        </div>

        <div className="z-20 right-2 top-2 absolute md:static md:block flex items-center order-1 dark:bg-light bg-dark shadow-xl w-8 h-8 rounded-full">
          <h1 className=" mx-auto font-semibold text-lg text-center text-light dark:text-dark">
            {idx + 1}
          </h1>
        </div>

        <div
          className={
            idx % 2 === 0
              ? 'order-1 h-full rounded-b-lg bg-dark dark:bg-mid text-white md:rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-full'
              : 'order-1 text-white h-full rounded-b-lg bg-brand-600 md:rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-full'
          }
        >
          <div className="flex justify-between items-center">
            <h3 className="mb-1 font-bold text-md lg:text-xl">{name}</h3>
            <p className="mb-1 text-base">{date}</p>
          </div>
          <PortableText
            className="text-sm leading-snug tracking-wide text-opacity-100 mb-4"
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
          {blog && (
            <Link href={`/blogs/${blog.slug.current}`}>Read More ...</Link>
          )}
        </div>
      </motion.div>
    );
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [width, setWidth] = useState(1080);

  useEffect(() => {
    setWidth(window?.innerWidth);
  }, [width]);

  const getNoOfCards = () => {
    if (width >= 640) return 2;
    else return 1;
  };

  return (
    <section id={id} className="bg-light dark:bg-dark">
      <SectionDescCard name="Initiatives" desc="Initiatives" />

      <div className="container mx-auto w-full h-full">
        <div className="relative hidden md:grid sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-1 py-10 md:p-10 h-full">
          <div className="border-2-2 hidden md:block absolute border-opacity-20 border-mid h-full border left-1/2"></div>
          {initiatives &&
            initiatives?.map((insitiative, idx: number) => {
              return (
                <IntiativeCard idx={idx} insitiative={insitiative} key={idx} />
              );
            })}
        </div>

        <div className="px-2 py-8 md:hidden">
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
            {initiatives &&
              initiatives?.map((insitiative: Initiative, idx: number) => {
                return (
                  <IntiativeCard
                    key={idx}
                    idx={idx}
                    insitiative={insitiative}
                  />
                );
              })}
          </ItemsCarousel>
        </div>
      </div>

      <div className="flex justify-center item-center pb-10">
        <GradientButton
          name="All Initiatives"
          link="/initiatives"
          Icon={AiOutlineArrowRight}
        />
      </div>
    </section>
  );
};

export default Initiative;
