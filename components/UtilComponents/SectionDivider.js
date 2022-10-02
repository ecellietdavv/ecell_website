import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../utils/sanity'

function SectionDivider({ img, name }) {
  const imgUrl = urlFor(img?.img).url()
  return (
    <div style={{ backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: `url('${imgUrl}')` }} className={`h-[300px] md:h-[540px] relative w-full flex justify-center items-center`}>
      <div className="w-full h-full bg-black bg-opacity-50 flex justify-center absolute z-10 items-center">
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-white'>{name}</h1>
      </div>
    </div>
  )
}

export default SectionDivider