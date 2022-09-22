import React from 'react'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import { urlFor } from '../utils/sanity'

function VisionMission({ content }) {
    const { vision, mission, e_networking, incubation_center, nec } = content

    const ContentCard = ({ img, body, name, halfWidth = false }) => {
        return (
            <div className={halfWidth ? "w-full sm:w-1/2 relative group p-2" : "w-full sm:w-full relative group p-2"}>
                <div className="relative">
                    <Image loading="lazy" height={400} width={600} alt={name} className={`block absolute object-cover object-center w-full h-full rounded-lg`}
                        src={img} />
                    <div className="bg-black rounded-lg bg-opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>
                </div>
                <div className="absolute z-20 text-white top-0 left-0 w-full flex flex-col justify-center items-center h-full px-10">
                    <h3 className='text-xl font-semibold lg:group-hover:hidden block'>{name}</h3>
                    {/* <p className={halfWidth ? 'lg:group-hover:block hidden lg:text-xs xl:text-sm' : 'lg:group-hover:block hidden lg:text-xs xl:text-sm'}>{content}</p> */}
                    <PortableText
                        className={halfWidth ? 'lg:group-hover:block hidden lg:text-xs xl:text-sm' : 'lg:group-hover:block hidden lg:text-xs xl:text-sm'}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={body}
                        serializers={{
                            h1: (props) => {
                                <h1 className='text-2xl font-bold my-5' {...props} />
                            },
                            h2: (props) => {
                                <h2 className='text-xl font-bold my-5' {...props} />
                            },
                            li: ({ children }) => {
                                <li className='ml-4 list-disc'>{children}</li>
                            },
                            link: ({ href, children }) => {
                                <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                            },
                        }}
                    />
                </div>
            </div>
        )
    }

    return (
        <section className="bg-light dark:bg-dark">
            <div className="container px-5 py-10 mx-auto lg:px-24 max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="Incubation Center" body={incubation_center?.body} img={urlFor(incubation_center?.img).url()} halfWidth={true} />
                        <ContentCard name="Mission" body={mission?.body} img={urlFor(mission?.img).url()} halfWidth={true} />
                        <ContentCard name="Vision" body={vision?.body} img={urlFor(vision?.img).url()} halfWidth={false} />
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="E-Networking" body={e_networking?.body} img={urlFor(e_networking?.img).url()} halfWidth={false} />
                        <ContentCard name="NEC" body={nec?.body} img={urlFor(nec?.img).url()} halfWidth={true} />
                        <ContentCard name="NEC" body={nec?.body} img={urlFor(nec?.img).url()} halfWidth={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission