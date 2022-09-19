import React from 'react'
import Image from 'next/image'

const initiative = () => {

  const initiatives = [
    {
      name: "Thinkers Cafe",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae sint sapiente soluta, id hic rem praesentium culpa necessitatibus distinctio doloribus aliquam. Architecto amet harum veniam voluptatibus iure provident commodi!"
    },
    {
      name: "Thinkers Cafe",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae sint sapiente soluta, id hic rem praesentium culpa necessitatibus distinctio doloribus aliquam. Architecto amet harum veniam voluptatibus iure provident commodi!"
    },
    {
      name: "Thinkers Cafe",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae sint sapiente soluta, id hic rem praesentium culpa necessitatibus distinctio doloribus aliquam. Architecto amet harum veniam voluptatibus iure provident commodi!"
    },
  ]

  const IntiativeCard = ({ img, name, desc, idx }) => {
    return (
      <div className={idx % 2 === 0 ? "flex p-4 sm:p-0 relative flex-col md:flex-row md:justify-between items-center w-full right-timeline " : " flex p-4 sm:p-0 relative flex-col md:justify-between md:flex-row-reverse items-center w-full"}>
        <div className="order-1 md:w-5/12">
          <Image width={600} height={200} className="object-cover rounded-t-lg md:rounded-lg" src={img} />
        </div>
        <div className="z-20 right-2 top-2 absolute md:block flex items-center order-1 dark:bg-light  bg-dark shadow-xl w-8 h-8 rounded-full">
          <h1 className=" mx-auto font-semibold text-lg text-light dark:text-dark">{idx + 1}</h1>
        </div>
        <div className={idx % 2 === 0 ? "order-1 rounded-b-lg bg-gray-400 md:rounded-lg shadow-xl md:w-5/12 px-6 py-4" : "order-1 rounded-b-lg bg-brand-400 md:rounded-lg shadow-xl md:w-5/12 px-6 py-4"}>
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{name}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-light dark:bg-dark'>
      <div className="container mx-auto w-full h-full">
        <div className="relative grid sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-1 py-10 md:p-10 h-full">
          <div className="border-2-2 hidden md:block absolute border-opacity-20 border-mid h-full border left-1/2"></div>
          {
            initiatives && initiatives?.map((insitiative, idx) => {
              const { name, img, desc } = insitiative
              return (
                <IntiativeCard name={name} img={img} desc={desc} idx={idx} />
              )
            })
          }
        </div>
      </div>

      {/* <div className="sm:hidden block">
        <InitiativeMobile />
      </div> */}
    </div>
  )
}

export default initiative
