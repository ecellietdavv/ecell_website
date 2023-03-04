import Image from 'next/image'
import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

function AboutCarousel({ images }) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <div className="p-4 sm:hidden block ">
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
                    <Image alt="Ecell IET DAVV About Image 1" loading="lazy" src={images?.img1} className="object-cover" height={200} width={400} />
                </div>
                <div className="w-full h-full">
                    <Image alt="Ecell IET DAVV About Image 2" loading="lazy" src={images?.img2} className="object-cover" height={200} width={400} />
                </div>
                <div className="w-full h-full">
                    <Image alt="Ecell IET DAVV About Image 3" loading="lazy" src={images?.img3} className="object-cover" height={200} width={400} />
                </div>
            </ItemsCarousel>
        </div>
    )
}

export default AboutCarousel