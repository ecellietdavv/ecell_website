import React from 'react'
import { randomImage } from '../../utils/randomAssets'
import { urlFor } from '../../utils/sanity'
import { handleScroll } from '../../utils/utilityFunctions'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PortableText from 'react-portable-text'

function HeroPage({ id, heroHeading, heroDescription, heroImage, button1, button2, extraButton }) {
    const imgSrc = heroImage ? urlFor(heroImage).url() : randomImage
    return (
        <section id={id} className="dark:bg-dark dark:text-gray-100">
            <div className="container flex flex-col justify-center py-6 px-2 sm:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center py-6 px-2 sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <motion.div animate={{ y: [50, 0], opacity: [0, 1] }} transition={{ duration: 2, bounce: 1 }} className="text-5xl font-bold leading-none xl:text-6xl">
                        <PortableText
                            className=''
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={heroHeading}
                            serializers={{
                                strong: ({ children }) => {
                                    return <strong className='text-brand-400'>{children}</strong>
                                },
                            }}
                        />
                    </motion.div>
                    <motion.div animate={{ y: [50, 0], opacity: [0, 1] }} transition={{ delay: 0.7, duration: 2, bounce: 1 }} className="mt-6 mb-8 text-lg sm:mb-12">
                        <PortableText
                            className=''
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={heroDescription}
                            serializers={{
                                h1: (props) => {
                                    return <h1 className='text-2xl font-bold my-5' {...props} />
                                },
                                h2: (props) => {
                                    return <h2 className='text-xl font-bold my-5' {...props} />
                                },
                                h3: (props) => {
                                    return <h3 className='text-xl font-bold my-5' {...props} />
                                },
                                h4: (props) => {
                                    return <h4 className='text-xl font-bold my-5' {...props} />
                                },
                                li: ({ children }) => {
                                    return <li className='ml-4 list-disc'>{children}</li>
                                },
                            }}
                        />
                    </motion.div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0  sm:space-x-4 lg:justify-start">
                        <motion.button animate={{ x: [50, 0], opacity: [0, 1] }} transition={{ delay: 0.8, duration: 2, bounce: 1 }} type='button' className="px-4 xl:px-8 py-3 text-lg font-semibold rounded bg-brand-400 text-dark" onClick={() => handleScroll(button1?.scrollTo)}>{button1?.name}</motion.button>
                        <motion.button animate={{ x: [-50, 0], opacity: [0, 1] }} transition={{ delay: 0.8, duration: 2, bounce: 1 }} type='button' onClick={() => handleScroll(button2?.scrollTo)} className="px-4 xl:px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">{button2?.name}</motion.button>
                    </div>
                    {extraButton && <div className="mt-4">Or <span className='underline font-semibold cursor-pointer' onClick={() => handleScroll(extraButton?.scrollTo)}>{extraButton?.name}</span></div>}
                </div>
                <motion.div animate={{ x: [100, 0], opacity: [0, 1] }} transition={{ delay: 0.2, duration: 2, bounce: 1 }} className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <Image src={imgSrc} height={420} width={720} alt={heroHeading} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroPage