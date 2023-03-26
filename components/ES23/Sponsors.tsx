import Image from 'next/image'
import React from 'react'

type Props = {}

const Sponsors = (props: Props) => {
  return (
    <div className='py-24 bg-dark flex gap-16 justify-center items-center'>
        <div className="relative w-24 h-24">
            <Image
                layout="fill"
                style={{ objectFit: 'cover' }}
                src='/assets/ES/Sponsors/uber.svg'
                alt='sponsors'
            />
        </div>
        <div className="relative w-24 h-24">
            <Image
                layout="fill"
                style={{ objectFit: 'cover' }}
                src='/assets/ES/Sponsors/uber.svg'
                alt='sponsors'
            />
        </div>
        <div className="relative w-24 h-24">
            <Image
                layout="fill"
                style={{ objectFit: 'cover' }}
                src='/assets/ES/Sponsors/uber.svg'
                alt='sponsors'
            />
        </div>
        <div className="relative w-24 h-24">
            <Image
                layout="fill"
                style={{ objectFit: 'cover' }}
                src='/assets/ES/Sponsors/uber.svg'
                alt='sponsors'
            />
        </div>
        <div className="relative w-24 h-24">
            <Image
                layout="fill"
                style={{ objectFit: 'cover' }}
                src='/assets/ES/Sponsors/uber.svg'
                alt='sponsors'
            />
        </div>
    </div>
  )
}

export default Sponsors