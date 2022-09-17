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
      <div className={idx % 2 === 0 ? "mb-8 flex justify-between items-center w-full right-timeline" : "mb-8 flex justify-between flex-row-reverse items-center w-full"}>
        <div className="order-1 w-5/12">
          <Image width={600} height={200} className="object-cover rounded-md" src={img}/> 
        </div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">{idx + 1}</h1>
        </div>
        <div className={idx % 2 === 0 ? "order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4" : "order-1 bg-brand-400 rounded-lg shadow-xl w-5/12 px-6 py-4"}>
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{name}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container bg-light dark:bg-dark mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
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
  )
}

export default initiative
