import React from 'react'
import { randomPersonImage } from '../../utils/randomAssets'
import { urlFor } from '../../utils/sanity'
import Image from 'next/image'

function Partners({ id, content }) {
    const { partners, title } = content

    const PartnerLogo = ({partner, key}) => {
        const { logo, name } = partner
        const imgSrc = logo ? urlFor(logo).url() : randomPersonImage.male
        return (
            <div key={key} className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <div className="w-32 h-32 relative">
                    <Image src={imgSrc} layout="fill" objectFit='cover' alt={name} />
                </div>
            </div>
        )
    }
    return (
        <section id={id} className="p-6 bg-mid/10 dark:text-gray-100">
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold">Our {title}</h2>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">

                {
                    partners && partners?.map((partner, idx) => {
                        return (
                            <PartnerLogo partner={partner} key={idx} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Partners