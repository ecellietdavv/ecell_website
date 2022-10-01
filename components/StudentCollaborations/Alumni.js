import Image from 'next/image'
import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { urlFor } from '../../utils/sanity'

function Alumni({ id, alumnies, title, desc }) {

    const AlumniCard = ({ alumni }) => {
        const { name, designation, img, social, _id } = alumni
        const imgUrl = urlFor(img).url()
        const {email, phone, linkedin} = {social}
        return (
            <div key={_id} className="flex space-x-6">
                <Image alt={name} height={250} width={250} className="flex-1 flex-shrink-0 object-cover mb-4 bg-center rounded-sm dark:bg-gray-500" src={imgUrl} />
                <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <p className="text-sm dark:text-gray-400">{designation}</p>
                    <div className="flex mt-2 space-x-2">
                        <a
                            href={`mailto:${email}`}
                            className="mx-2"
                            aria-label="Email"
                        >
                            <MdEmail className="h-6 w-6" />
                        </a>
                        <a
                            href={`tel:${phone}`}
                            className="mx-2"
                            aria-label="Phone"
                        >
                            <AiFillPhone className="h-6 w-6" />
                        </a>
                        <a
                            href={linkedin}
                            target="_blank"
                            className="mx-2"
                            aria-label="Linkedin"
                            rel="noreferrer"
                        >
                            <BsLinkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section id={id} className="py-6 dark:text-gray-100">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-none sm:text-5xl">{title}</h3>
                    <p className="max-w-2xl dark:text-gray-400">{desc}</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                    {
                        alumnies && alumnies?.map((alumni, idx) => {
                            return (
                                <AlumniCard alumni={alumni} key={idx} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Alumni