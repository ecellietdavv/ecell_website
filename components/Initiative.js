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
      <div className={idx % 2 === 0 ? " md:mb-8 md:flex md:justify-between md:items-center md:w-full md:right-timeline " : "md:mb-8 md:flex md:justify-between md:flex-row-reverse md:items-center md:w-full"}>
        <div className="order-1 w-5/12">
          <Image width={600} height={200} className="md:object-cover md:rounded-md" src={img}/> 
        </div>
        <div className="md:z-20 md:flex md:items-center md:order-1 dark:bg-light  md:bg-dark md:shadow-xl md:w-8 md:h-8 md:rounded-full">
          <h1 className=" md:mx-auto md:font-semibold md:text-lg md:text-light dark:text-brand-700">{idx + 1}</h1>
        </div>
        <div className={idx % 2 === 0 ? "md:order-1 md:bg-gray-400 md:rounded-lg md:shadow-xl md:w-5/12 md:px-6 md:py-4" : "md:order-1 md:bg-brand-400 md:rounded-lg md:shadow-xl md:w-5/12 md:px-6 md:py-4"}>
          <h3 className="md:mb-3 md:font-bold md:text-gray-800 md:text-xl">{name}</h3>
          <p className="md:text-sm md:leading-snug md:tracking-wide md:text-gray-900 md:text-opacity-100">{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='md:bg-light md:dark:bg-dark'>
    <h2 className='md:text-4xl text-2xl py-4 md:py-0 md:pt-4 font-bold text-center dark:text-light '>Our Initiative</h2>
    <div className="md:container   md:mx-auto md:w-full md:h-full">
      <div className="md:relative md:wrap md:overflow-hidden md:p-10 md:h-full">
        <div className="md:border-2-2 md:absolute md:border-opacity-20 md:border-mid md:h-full md:border md:left-1/2"></div>
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
    </div>
  )
}

export default initiative
