import Image from 'next/image'
import React from 'react'

function SectionDivider({img, name}) {
  return (
    <div className={`h-[540px] ${img} bg-no-repeat bg-cover relative w-full flex bg-fixed justify-center items-center`}>
      <div className="w-full h-full bg-black bg-opacity-50 flex justify-center absolute z-10 items-center">
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-white'>{name}</h1>
      </div>
    </div>
  )
}

export default SectionDivider