import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../utils/sanity';
import { randomPersonImage } from '../../utils/randomAssets';
import { Mentor } from '../../types/typings';

type MentorsProps = {
  mentors: Mentor[];
};

const Mentors = ({ mentors }: MentorsProps) => {
  return (
    <section className="py-10 lg:p-10 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-10 py-4 mx-auto dark:bg-dark">
        {mentors.map((mentor, idx) => {
          const { name, img, designation, _id } = mentor;
          const imgUrl = img ? urlFor(img).url() : randomPersonImage;
          return (
            <div key={_id}>
              <div className="bg-brand-200  rounded-t-3xl sm:rounded-r-3xl flex flex-col-reverse md:flex-row mx-auto">
                <div className="bg-brand-400 sm:w-2/3 py-4">
                  <h3 className="font-semibold text-left text-2xl lg:text-3xl mx-4 my-2 text-white">
                    {name}
                  </h3>
                  <h4 className="font-normal text-white mx-4">{designation}</h4>
                </div>
                <div className=" w-full sm:w-1/3 h-52  rounded-t-3xl sm:rounded-r-3xl  ease-in-out overflow-hidden relative">
                  <Image
                    loading="lazy"
                    src={imgUrl}
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    alt="Picture"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mentors;
