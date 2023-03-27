import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { sponsorData } from '../../data/ES23/sponsorData';

type Props = {};

type Sponsor = {
  name: string;
  img: string;
};

type SponsorProps = {
  sponsor: Sponsor;
  idx: number;
};

const SponsorImg = ({ sponsor, idx }: SponsorProps) => {
  const { name, img } = sponsor;

  return (
    <div className="relative w-24 h-24 mx-10">
      <Image
        layout="fill"
        style={{ objectFit: 'cover' }}
        src={img}
        alt={name}
      />
    </div>
  );
};

const Sponsors = (props: Props) => {
  return (
    <section id="es23_sponsors" className="px-6 sm:px-0">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h1 className="heading mb-12">Sponsors</h1>
        <Marquee
          gradient={true}
          speed={100}
          gradientColor={[0, 0, 0]}
          direction="left"
          className=""
          pauseOnHover
        >
          {sponsorData.map((sponsor, idx) => {
            return <SponsorImg key={idx} idx={idx} sponsor={sponsor} />;
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Sponsors;
