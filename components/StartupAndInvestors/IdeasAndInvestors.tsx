import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PortableText from 'react-portable-text';
import { urlFor } from '../../utils/sanity';
import GradientButton from '../UtilComponents/GradientButton';

function IdeasAndInvestors({ id, sections }) {
  const IdeasAndInvestorsCard = ({ section, idx }) => {
    const { title, desc, img, action, buttonName, _id } = section;
    const imgUrl = urlFor(img).url();
    return (
      <div
        key={_id}
        className={`flex flex-col bg-${
          idx % 2 == 0 ? 'brand-700' : 'dark'
        } px-4 lg:px-10 py-20 justify-center items-center relative text-center`}
      >
        <Image
          src={imgUrl}
          className="z-10 opacity-60"
          layout="fill"
          style={{ objectFit: 'contain' }}
          alt=""
        />
        <div
          className={`relative z-20 space-y-10 flex flex-col md:flex-${
            idx % 2 == 0 ? 'col' : 'col-reverse'
          }`}
        >
          <h2 className="text-6xl sm:text-7xl xl:text-8xl md:w-3/4 py-4 mx-auto text-bold text-white font-sans capitalize">
            {title}
          </h2>
          <PortableText
            className="text-slate-300 text-xl md:w-3/4 mx-auto"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={desc}
          />
          <div className="w-fit mx-auto">
            <GradientButton
              name={buttonName}
              link={action}
              Icon={AiOutlineArrowRight}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id={id}>
      <div className="grid md:grid-cols-2">
        {sections &&
          sections.map((section, idx) => {
            return (
              <IdeasAndInvestorsCard section={section} key={idx} idx={idx} />
            );
          })}
      </div>
    </section>
  );
}

export default IdeasAndInvestors;
