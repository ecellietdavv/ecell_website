import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PortableText from 'react-portable-text';
import { Initiative } from '../../types/typings';
import { randomImage } from '../../utils/randomAssets';
import { urlFor } from '../../utils/sanity';
import ViewMore from '../UtilComponents/ViewMore';

type TimelineProps = {
  initiatives: Initiative[];
  name: string;
  desc: string;
  id: string;
};

type TimelineCardProps = {
  initiative: Initiative;
};
function Timeline({ initiatives, name, desc, id }: TimelineProps) {
  const TimelineCard = ({ initiative }: TimelineCardProps) => {
    const { name, date, img, desc, blog } = initiative;
    const imgUrl = img ? urlFor(img)?.url() : randomImage;
    return (
      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-400">
        <Image
          loading="lazy"
          width={600}
          height={300}
          className="object-cover py-2 rounded-t-lg md:rounded-lg"
          src={imgUrl}
          alt={name}
        />
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-xl font-semibold tracking-wide">{name}</h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">
              {date}
            </time>
          </div>

          {blog?.slug?.current && (
            <Link
              href={`/blogs/${blog?.slug?.current}`}
              className="border-none bg-transparent"
            >
              Read More..
            </Link>
          )}
        </div>
        <PortableText
          className="mt-3"
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
      </div>
    );
  };

  const [loadMore, setLoadMore] = useState(1);
  const [reset, setReset] = useState(1);
  const [height, setHeight] = useState(700);

  useEffect(() => {
    const cardsOnScreenView = window?.innerWidth >= 640 ? 2 : 2;
    const calcHeight = window?.innerWidth >= 640 ? 1100 : 1000;
    const calcReset = initiatives?.length / cardsOnScreenView;
    setReset(calcReset);
    setHeight(calcHeight);
  }, []);

  const handleLoading = () => {
    loadMore >= reset ? setLoadMore(1) : setLoadMore(loadMore + 1);
  };

  return (
    <section
      id={id}
      style={{ height: height * loadMore }}
      className={`dark:bg-dark overflow-hidden pb-20 relative dark:text-gray-100`}
    >
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-brand-400">
              <h3 className="text-3xl font-semibold">{name}</h3>
              <p className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                {desc}
              </p>
            </div>
          </div>
          <div className="relative col-span-12 sm:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative sm:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {initiatives &&
                initiatives.map((initiative, idx) => {
                  return <TimelineCard initiative={initiative} key={idx} />;
                })}
            </div>
          </div>
        </div>
      </div>

      <ViewMore action={handleLoading} reset={loadMore >= reset} />
    </section>
  );
}

export default Timeline;
