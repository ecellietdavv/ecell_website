import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import PortableText from 'react-portable-text'
import { urlFor } from '../../utils/sanity'
import GradientButton from '../UtilComponents/GradientButton'

function Volunteering({ id, img, perks, link }) {
    const imgUrl = urlFor(img).url()

    const PerkCard = ({ title, desc }) => {
        return (
            <div className="flex space-x-2 sm:space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">{title}</p>
                    <PortableText
                        className='leading-snug'
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={desc}
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
        <section id={id} className="dark:bg-dark dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
                    {
                        perks && perks?.map((perk, idx) => {
                            return (
                                <PerkCard key={idx} title={perk?.title} desc={perk?.desc} />
                            )
                        })
                    }

                    <div className="pt-8 pl-2">
                        <GradientButton link={link} name="Fill The Form" Icon={AiOutlineArrowRight} />
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <Image height={480} width={480} src={imgUrl} alt="ca-image" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video " />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Volunteering