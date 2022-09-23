import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function EventsListSection({ name, sectionBio, id, events, Icon }) {

    const FlagshipEventCard = ({ img, name, date, desc, slug }) => {
        return (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                        <img
                            src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                            alt="image"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <span
                            className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     dark:text-white
                     mb-5
                     "
                        >
                            Dec 22, 2023
                        </span>
                        <h3>
                            <a
                                href="javascript:void(0)"
                                className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        hover:text-primary
                        "
                            >
                                Meet AutoManage, the best AI management tools
                            </a>
                        </h3>
                        <p className="text-base text-body-color">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section id={id} className="pt-10 lg:pt-12 pb-10 lg:pb-20 relative">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg text-primary mb-2 block">
                                Our Events
                            </span>
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
                    <FlagshipEventCard />
                    <FlagshipEventCard />
                    <FlagshipEventCard />
                </div>

                <div className="w-full relative">
                    <div className="absolute left-0 right-0 mx-auto z-20 cursor-pointer group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 w-fit">
                        <span className="relative text-white">View More</span>
                        <div className="flex items-center -space-x-3 translate-x-3">
                            <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                            <AiOutlineArrowRight className="h-5 w-5 stroke-white text-white -translate-x-2 transition duration-300 group-hover:translate-x-0" />
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-1/3 z-10 blogBannerGradient" />
            </div>
        </section>
    )
}

export default EventsListSection