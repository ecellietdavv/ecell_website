import Image from 'next/image'
import React from 'react'

function SectionDivider({img, name}) {
  return (
    <div className={`h-[50vh] bg-[url(${img})]] relative w-full flex bg-fixed justify-center items-center`}>
        {/* <Image src={img} width={1920} height={540} className="object-cover absolute z-0 w-full h-full"/> */}
        <h1 className='text-center absolute text-7xl z-10 text-white'>{name}</h1>
    </div>
  )
}

export default SectionDivider