import Image from 'next/image'
import React, { useState } from 'react'
import { urlFor } from '../utils/sanity'
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

function AboutCarousel({ images }) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <div className="p-4 sm:hidden block ">
            {/* <div className="hidden duration-700 ease-in-out w-full h-full" data-carousel-item>
                    </div>
                    <div className="hidden duration-700 ease-in-out w-full h-full" data-carousel-item>
                    </div>
                    <div className="hidden duration-700 ease-in-out w-full h-full" data-carousel-item>
                    </div> */}

            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={10}
                leftChevron={<BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />}
                rightChevron={<BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />}
                chevronWidth={100}
                infiniteLoop={true}
                slidesToScroll={1}
                showSlither={false}
            >
                <div className="w-full h-full">
                    <Image loading="lazy" src={urlFor(images.img1).url()} className="object-cover" height={200} width={400}/>
                </div>
                <div className="w-full h-full">
                    <Image loading="lazy" src={urlFor(images.img2).url()} className="object-cover" height={200} width={400}/>
                </div>
                <div className="w-full h-full">
                    <Image loading="lazy" src={urlFor(images.img3).url()} className="object-cover" height={200} width={400}/>
                </div>
            </ItemsCarousel>
        </div>
    )
}

export default AboutCarousel