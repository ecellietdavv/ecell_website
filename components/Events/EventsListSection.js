import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowUpSquareFill } from 'react-icons/bs'
import { urlFor } from '../../utils/sanity';
import ViewMore from '../UtilComponents/ViewMore';

function EventsListSection({ name, sectionBio, id, events, Icon }) {

    const handleScroll = (id) => {
        var element = document.getElementById(id);
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    const EventCard = ({ img, name, date, desc, blog }) => {
        return (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded w-full overflow-hidden">
                        <Image
                            height={350}
                            width={600}
                            objectFit="cover"
                            src={urlFor(img).url()}
                            alt={name}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <span
                            className=" bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold dark:text-white"
                        >
                            {date}
                        </span>
                        <h3 className='flex justify-between items-center'>
                            <span
                                className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block hover:text-primary "
                            >
                                {name}
                            </span>
                            {blog?.slug?.current && <Link href={`/blogs/${blog?.slug?.current}`}><span className='cursor-pointer'>Read more..</span></Link>}
                        </h3>
                        <p className="text-base text-body-color">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const [loadMore, setLoadMore] = useState(1)
    const reset = events.length / 3

    const handleLoading = () => {
        loadMore >= reset ?
            setLoadMore(1)
            :
            setLoadMore(loadMore + 1)
    }

    return (
        <section id={id} style={{ height: 750 * loadMore }} className="pt-10 px-6 sm:px-0 lg:pt-12 pb-10 lg:pb-20 relative">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <div className="flex items-center justify-center space-x-3 cursor-pointer" onClick={() => { handleScroll("eventsHero") }}>
                                <span className="font-semibold text-lg text-primary mb-2 block">
                                    Our Events
                                </span>
                                <BsArrowUpSquareFill className="text-dark dark:text-light mb-1" />
                            </div>
                            <h2 className="font-bold text-3xl sm:text-4xl flex item-center space-x-3 justify-center md:text-[40px] text-brand-600 mb-4"
                            >
                                <span>{name}</span>
                                <Icon />
                            </h2>
                            <p className="text-base text-body-color">
                                {sectionBio}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {
                        events && events.map((event, idx) => {
                            const { name, img, desc, date, blog } = event
                            return (
                                <EventCard name={name} img={img} desc={desc} idx={idx} key={idx} date={date} blog={blog} />
                            )
                        })
                    }
                </div>

                <ViewMore action={handleLoading} reset={loadMore >= reset} />
            </div>
        </section>
    )
}

export default EventsListSection