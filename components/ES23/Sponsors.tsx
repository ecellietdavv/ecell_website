import Image from 'next/image'
import React from 'react'
import { sponsorData } from '../../data/ES23/sponsorData'

type Props = {}


type Sponsor = {
    name: string;
    img: string;
}

type SponsorProps = {
    sponsor: Sponsor;
    idx: number;
}

const SponsorImg = ( {sponsor, idx} : SponsorProps ) => {
    const {name , img} = sponsor;

    return (
        <div className="relative w-24 h-24">
            <Image
                layout="fill"
                style={{ objectFit: 'cover' }}
                src={img}
                alt={name}
            />
        </div>
    );
}


const Sponsors = (props: Props) => {
  return (
    <div className='py-24 bg-dark flex gap-16 justify-center items-center'>
        {
            sponsorData.map((sponsor, idx) => {
                return (
                    <SponsorImg key={idx} idx={idx} sponsor={sponsor} />
                )
            })
        }
    </div>
  )
}

export default Sponsors