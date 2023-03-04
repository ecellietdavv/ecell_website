import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { urlFor } from '../../utils/sanity'

const POC = ({ poc }) => {

    const { name, designation, img, social, _id } = poc
    const { email, phone, linkedin } = social
    const imgUrl = urlFor(img).url()

    return (
        <div key={_id} className="relative lg:static lg:rounded-l-full text-white lg:rounded-r-xl bg-brand-500 lg:grid lg:grid-cols-2 w-full rounded-t-3xl lg:rounded-t-0 flex flex-col">
            <div className="w-40 lg:h-56 h-40 lg:w-56 absolute lg:relative lg:top-0 -top-20 left-0 right-0 overflow-hidden lg:mx-0 mx-auto bg-slate-50 z-20 rounded-full">
                <Image layout="fill" objectFit="cover" src={imgUrl} />
            </div>

            <div className="flex flex-col w-fit mx-auto justify-center lg:w-full pt-20 pb-10 lg:pb-0 lg:pt-0 lg:space-y-1  space-y-2">
                <h3 className="font-bold pt-4 lg:pt-0 text-base sm:text-base lg:mx-0 mx-auto lg:text-lg">{name}</h3>
                <h4 className="font-semibold text-gray-200 text-base sm:text-sm lg:mx-0 mx-auto lg:text-base">{designation}</h4>

                <div className="px-8 lg:px-0">
                    <div className="text-lg mx-auto lg:mx-0 lg:text-base"><b>Phone No:</b> <span className="font-medium">{phone}</span></div>
                    <div className="text-lg mx-auto lg:mx-0 lg:text-base"><b>Email:</b> <span className="font-medium">{email}</span></div>
                </div>

                <div className="flex space-x-5 py-4 mx-auto lg:ml-1">
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

export default POC