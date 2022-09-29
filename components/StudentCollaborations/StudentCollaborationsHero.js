import React from 'react'
import { randomImage } from '../../utils/randomAssets'
import { urlFor } from '../../utils/sanity'
import { handleScroll } from '../../utils/utilityFunctions'
import Image from 'next/image'

function StudentCollaborationsHero({ id, heroHeading, heroDescription, heroImage }) {
    const imgSrc = heroImage ? urlFor(heroImage).url() : randomImage
    return (
        <section id={id} className="dark:bg-dark dark:text-gray-100">
            <div className="container flex flex-col justify-center py-6 px-2 sm:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center py-6 px-2 sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none xl:text-6xl">{heroHeading}
                        <br className='md:hidden' />
                        <span className="text-brand-400 sm:pl-3">Student Collaborator</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        {heroDescription}
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0  sm:space-x-4 lg:justify-start">
                        <button type='button' className="px-4 xl:px-8 py-3 text-lg font-semibold rounded bg-brand-400 text-dark" onClick={() => handleScroll("volunteering")}>Volunteering</button>
                        <button type='button' onClick={() => handleScroll("alumni")} className="px-4 xl:px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Alumni</button>
                    </div>
                    <div className="mt-4">Or <span className='underline font-semibold cursor-pointer' onClick={() => handleScroll("Contact Us For a Event")}>Contact Us for Event Collaborations</span></div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image src={imgSrc} height={400} width={400} alt={heroHeading} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    )
}

export default StudentCollaborationsHero