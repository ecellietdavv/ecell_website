import React from 'react'
import Image from 'next/image'
import { urlFor } from '../utils/sanity'
import SectionDescCard from './SectionDescCard'
import GradientButton from './GradientButton'
import { AiOutlineArrowRight } from 'react-icons/ai'

const initiative = ({ initiatives }) => {
  const IntiativeCard = ({ img, name, desc, idx, date }) => {
    return (
      <div key={idx} className={idx % 2 === 0 ? "flex p-4 sm:p-0 relative flex-col md:flex-row md:justify-between items-center w-full right-timeline " : " flex p-4 sm:p-0 relative flex-col md:justify-between md:flex-row-reverse items-center w-full"}>
        <div className="order-1 md:w-5/12">
          <Image loading="lazy" width={600} height={200} className="object-cover rounded-t-lg md:rounded-lg" src={urlFor(img).url()} alt={name} />
        </div>

        <div className="z-20 right-2 top-2 absolute md:static md:block flex items-center order-1 dark:bg-light bg-dark shadow-xl w-8 h-8 rounded-full">
          <h1 className=" mx-auto font-semibold text-lg text-center text-light dark:text-dark">{idx + 1}</h1>
        </div>

        <div className={idx % 2 === 0 ? "order-1 h-full rounded-b-lg bg-gray-400 md:rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-full" : "order-1 h-full rounded-b-lg bg-brand-400 md:rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-full"}>
          <div className="flex justify-between">
            <h3 className="mb-3 font-bold text-xl">{name}</h3>
            <p className="mb-3 text-dark text-base">{date}</p>
          </div>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <section id='initiatives' className='bg-light dark:bg-dark'>

      <SectionDescCard name="Initiatives" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!"/>

      <div className="container mx-auto w-full h-full">
        <div className="relative grid sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-1 py-10 md:p-10 h-full">
          <div className="border-2-2 hidden md:block absolute border-opacity-20 border-mid h-full border left-1/2"></div>
          {
            initiatives && initiatives?.map((insitiative, idx) => {
              const { name, img, desc, date } = insitiative
              return (
                <IntiativeCard name={name} img={img} desc={desc} idx={idx} key={idx} date={date} />
              )
            })
          }
        </div>
      </div>

      <div className="flex justify-center item-center pb-10">
        <GradientButton name="All Initiatives" link="/inititatives" Icon={AiOutlineArrowRight} />
      </div>
    </section>
  )
}

export default initiative
