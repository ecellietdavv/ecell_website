import React, { useContext } from 'react';
import Image from 'next/image';
import { urlFor } from '../../../utils/sanity';
import ContentModal from './ContentModal.tsx';
import { randomImage } from '../../../utils/randomAssets';
import { StoreContext } from '../../../utils/Store';

function VisionMission({ content, id }) {
  const { state, dispatch } = useContext(StoreContext);
  const { openModal } = state;

  const handleModal = (contentModal) => {
    openModal
      ? dispatch({ type: 'CLOSE_MODAL' })
      : dispatch({ type: 'OPEN_MODAL' });
    dispatch({ type: 'SET_MODAL_CONTENT', payload: contentModal });
  };

  const ContentCard = ({ content, halfWidth = false }) => {
    const { name, body, img } = content;
    const imgUrl = img ? urlFor(img).url() : randomImage;
    const contentModal = { name: name, body: body };
    return (
      <div
        onClick={() => handleModal(contentModal)}
        className={
          halfWidth
            ? 'w-full cursor-pointer sm:w-1/2 relative group p-2'
            : 'w-full cursor-pointer sm:w-full relative group p-2'
        }
      >
        <div className="relative">
          <Image
            loading="lazy"
            height={400}
            width={600}
            alt={name}
            className={`block absolute object-cover object-center w-full h-full rounded-lg`}
            src={imgUrl}
          />
          <div className="bg-black rounded-lg bg-opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>
        </div>
        <div className="absolute z-20 text-white top-0 left-0 w-full flex flex-col justify-center items-center h-full px-10">
          <h3 className="text-xl font-semibold text-center">{name}</h3>
        </div>
      </div>
    );
  };

  return (
    <section id={id} className="bg-light dark:bg-dark">
      {openModal && <ContentModal />}
      <div className="container px-5 py-10 mx-auto lg:px-24 max-w-7xl">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap w-1/2">
            <ContentCard content={content[0]} halfWidth={true} />
            <ContentCard content={content[1]} halfWidth={true} />
            <ContentCard content={content[2]} halfWidth={false} />
          </div>

          <div className="flex flex-wrap w-1/2">
            <ContentCard content={content[3]} halfWidth={false} />
            <ContentCard content={content[4]} halfWidth={true} />
            <ContentCard content={content[5]} halfWidth={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
