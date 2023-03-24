import React, { useContext } from 'react';
import Image from 'next/image';
import ContentModal from './ContentModal';
import { StoreContext } from '../../../utils/Store';
import { visionData } from '../../../data/visionData';
import classnames from 'classnames';

type Vison = {
  id: string;
};

type VisionContent = {
  name: string;
  desc: string;
  img: string;
};

function VisionMission({ id }: Vison) {
  const { state, dispatch } = useContext(StoreContext);
  const { openModal } = state;

  const handleModal = (contentModal: { name: string; desc: string }) => {
    openModal
      ? dispatch({ type: 'CLOSE_MODAL' })
      : dispatch({ type: 'OPEN_MODAL' });
    dispatch({ type: 'SET_MODAL_CONTENT', payload: contentModal });
  };

  const ContentCard = ({
    content,
    halfWidth = false,
  }: {
    content: VisionContent;
    halfWidth: boolean;
  }) => {
    const { name, desc, img } = content;
    const contentModal = { name: name, desc: desc };
    return (
      <div
        onClick={() => handleModal(contentModal)}
        className={classnames(
          'w-full cursor-pointer relative group p-2',
          halfWidth ? 'sm:w-1/2' : 'sm:w-full'
        )}
      >
        <div className="relative">
          <Image
            loading="lazy"
            height={400}
            width={600}
            alt={name}
            // className={`block absolute object-cover object-center w-full h-full rounded-lg z-0`}
            src={img}
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
            <ContentCard content={visionData[0]} halfWidth={true} />
            <ContentCard content={visionData[1]} halfWidth={true} />
            <ContentCard content={visionData[2]} halfWidth={false} />
          </div>

          <div className="flex flex-wrap w-1/2">
            <ContentCard content={visionData[3]} halfWidth={false} />
            <ContentCard content={visionData[4]} halfWidth={true} />
            <ContentCard content={visionData[5]} halfWidth={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
