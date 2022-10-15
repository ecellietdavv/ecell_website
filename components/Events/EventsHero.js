import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../utils/sanity'
import { handleScroll } from '../../utils/utilityFunctions'
import { motion } from 'framer-motion'

function EventsHero({ id, heroHeading, heroDescription, heroImage }) {
    const imgSrc = heroImage ? urlFor(heroImage).url() : randomImage

    return (
        <section id={id} className="dark:bg-dark min-h-screen dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <motion.h1 animate={{y:[50,0],opacity:[0,1]}} transition={{duration:2 ,bounce:1}} className="text-5xl font-bold leading-none xl:text-6xl">
                        {heroHeading}
                    </motion.h1>
                    <motion.p animate={{y:[50,0],opacity:[0,1]}} transition={{delay:0.7,duration:2 ,bounce:1}} className="mt-6 mb-8 text-lg sm:mb-12">
                        {heroDescription}
                    </motion.p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0  sm:space-x-4 lg:justify-start">
                        <motion.button animate={{x:[50,0],opacity:[0,1]}} transition={{delay:0.8,duration:2 ,bounce:1}} type='button' className="px-4 xl:px-8 py-3 text-lg font-semibold rounded bg-brand-400 text-dark" onClick={() => handleScroll("flagshipEvents")}>Flagship Events</motion.button>
                        <motion.button animate={{x:[-50,0],opacity:[0,1]}} transition={{delay:0.8,duration:2 ,bounce:1}} type='button' onClick={() => handleScroll("collaborativeEvents")} className="px-4 xl:px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Collaborative Events</motion.button>
                    </div>
                    <motion.div animate={{y:[50,0],scale:[0,1]}} transition={{duration:1.5,delay:0.9,bounce:1.5}} className="mt-4">Or <span className='underline font-semibold cursor-pointer' onClick={() => handleScroll("allEvents")}>All Events</span></motion.div>
                </div>
                <motion.div animate={{x:[100,0],opacity:[0,1]}} transition={{delay:0.2,duration:2 ,bounce:1}} className="flex relative items-center justify-center w-full p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image layout='fill' objectFit='cover' src={imgSrc} alt={heroHeading} className="object-contain" />
                </motion.div>
            </div>
        </section>
    )
}

export default EventsHero