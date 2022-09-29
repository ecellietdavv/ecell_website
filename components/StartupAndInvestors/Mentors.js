import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../utils/sanity'

const Mentors = ({ mentors }) => {

    return (
        <section className='py-10 lg:p-10'>
            <div className="grid sm:grid-cols-2 gap-10 py-4 mx-4 dark:bg-dark">
                {mentors.map((mentor, idx) => {
                    const {name, img, designation, _id} = mentor
                    const imgUrl = urlFor(img).url()
                    return (
                        <div key={_id}>
                            <div className="bg-brand-200  rounded-t-3xl sm:rounded-r-3xl flex flex-col-reverse md:flex-row mx-auto">
                                <div className="bg-brand-400 sm:w-2/3 py-4">
                                    <h3 className="font-semibold text-left text-2xl lg:text-3xl mx-4 my-2 text-white">{name}</h3>
                                    <h4 className="font-normal text-white mx-4">{designation}</h4>
                                </div>
                                <div className=" w-full sm:w-1/3 h-52  rounded-t-3xl sm:rounded-r-3xl  ease-in-out overflow-hidden relative">
                                    <Image loading="lazy" src={imgUrl} layout="fill" objectFit='cover' alt='Picture' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Mentors