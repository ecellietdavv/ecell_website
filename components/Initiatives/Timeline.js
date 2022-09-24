import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { urlFor } from '../../utils/sanity'
import ViewMore from '../UtilComponents/ViewMore'

function Timeline({ initiatives, name, desc, id }) {
    const TimelineCard = ({ name, date, img, desc, idx, blog }) => {
        return (
            <div key={idx} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-400">
                <Image loading="lazy" width={600} height={200} className="object-cover py-2 rounded-t-lg md:rounded-lg" src={urlFor(img).url()} alt={name} />
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className="text-xl font-semibold tracking-wide">{name}</h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-400">{date}</time>
                    </div>

                    {
                        blog?.slug?.current ?
                            <Link href={`/blogs/${blog?.slug?.current}`} className='border-none bg-transparent'>Read More..</Link>
                            : null
                    }
                </div>
                <p className="mt-3">{desc}</p>
            </div>
        )
    }
    return (
        <section id={id} className="dark:bg-dark pb-10 relative dark:text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-brand-400">
                            <h3 className="text-3xl font-semibold">{name}</h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">{desc}</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            {
                                initiatives && initiatives.map((initiative, idx) => {
                                    const { name, img, desc, date, blog } = initiative
                                    return (
                                        <TimelineCard name={name} img={img} desc={desc} idx={idx} key={idx} date={date} blog={blog} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <ViewMore/>
        </section>
    )
}

export default Timeline