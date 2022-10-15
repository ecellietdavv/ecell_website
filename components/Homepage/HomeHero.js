import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { FaTrophy } from 'react-icons/fa'
import { urlFor } from '../../utils/sanity';
import { motion } from 'framer-motion'

function HomeHero({ id, heading, img, desc }) {
    const [loading, setLoading] = useState(true)
    setInterval(() => {
        setLoading(false)
    }, 4000);

    const imgUrl = urlFor(img).url()

    return (
        <section id={id} style={{ backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: `url('${imgUrl}')` }} className="h-72 sm:h-[600px] lg:h-screen w-full">
            {loading && <Image alt='E-Cell IET DAVV - LOGO' loading="eager" layout="fill" objectFit='cover' className='fixed top-0 h-screen w-screen z-50' src="/assets/loader.gif" />}

            <div
                className="relative w-full h-full"
            >
                <div
                    className="bg-black flex flex-col justify-center space-y-0 xl:space-y-6 items-center absolute z-30 bg-opacity-60 top-0 left-0 h-full w-full">
                    <motion.div
                        animate={{ y: [50, 0] }}
                        transition={{ duration: 6 }}
                        viewport={{ once: true }}
                        className="flex flex-col w-full justify-center items-center">
                        <div className="h-2 bg-gradient-to-r from-brand-500 to-brand-600 sm:h-4 xl:h-6 md:block hidden w-1/6"></div>
                        <div className="text-white bg-gradient-to-r from-brand-500 to-brand-600  px-3 py-0 font-extrabold uppercase text-xs sm:text-lg lg:text-2xl sm:h-9 sm:w-1/4 text-center">
                            Winners
                        </div>
                        <div className="uppercase text-xs md:text-lg text-white font-bold items-center py-1 flex flex-col px-5 bg-black">
                            <h2>National Enterpreneurship Challenge</h2>
                            <h2>IIT Bombay</h2>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ scale: [3, 1] }}
                        transition={{ duration: 6 }}
                        viewport={{ once: true }}
                        className="relative w-20 h-20 sm:w-36 sm:h-36 xl:w-48 xl:h-48"
                    >
                        <Image
                            layout='fill'
                            objectFit='cover'
                            src="/assets/Logos/logo_w.png"
                            className=""
                            alt='E-Cell IET DAVV - LOGO'
                        />
                    </motion.div>

                    <div className="flex-col hidden sm:flex text-white items-center">
                        <h1 className="uppercase font-extrabold text-sm sm:text-md md:text-2xl lg:text-3xl">
                            {heading}
                        </h1>
                        <h2 className="uppercase sm:text-2xl text-gray-300 font-bold">{desc}</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <FaTrophy className='text-3xl text-yellow-300' />
                        <div className="bg-gradient-to-r from-brand-500 text-white to-brand-600 px-4 sm:px-10 py-0 sm:py-1 lg:py-2 text-xs sm:text-md md:text-lg lg:text-xl font-semibold">
                            <h1>Think. Feel. Collaborate</h1>
                        </div>
                    </div>
                </div>
                {/* <Image alt='NEC Winners 2022' width={1920} height={1080} src="/assets/winner.png" className='visible 2xl:invisible' /> */}
            </div>
        </section>
    )
}

export default HomeHero