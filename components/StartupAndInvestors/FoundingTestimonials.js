import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import { urlFor } from '../utils/sanity'
import ItemsCarousel from 'react-items-carousel';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { urlFor } from '../../utils/sanity';
import { randomPersonImage } from '../../utils/randomAssets';

const FoundingTestimonials = ({ id, content }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [width, setWidth] = useState(1080)

  useEffect(() => {
    setWidth(window?.innerWidth)
  }, [width])

  const getNoOfCards = () => {
    if (width >= 1080) return 3
    else if (width >= 640) return 2
    else return 1
  }
  
  const {testimonials, title} = content

  const SocialLink = ({ link, Icon }) => {
    return (
      <a
        href={link}
        className="text-white"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="w-6 h-6" />
      </a>
    )
  }

  const FoundingTestimonialsCard = ({ name, img, desc, key, designation, social }) => {

    const imgUrl = img ? urlFor(img).url() : randomPersonImage.female

    return (
      <div key={key} className="">
        <div className="rounded-2xl bg-dark/10 dark:bg-mid dark:text-white snap-center mx-auto my-6">
          <div className="p-4">
            <svg width={30} height={30} viewBox="0 0 448 512" className='dark:fill-white'>
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
          </div>
          <h3 className="w-5/6 font-medium my-2 mx-auto">
            {desc}
          </h3>
          <div className="mx-auto relative w-44 h-44 overflow-hidden bg-[#fff] rounded-full px-2 py-1">
            <Image src={imgUrl} layout="fill" objectFit='cover' alt={name} />
          </div>
          <div className="">
            <svg viewBox="0 0 1440 320" className='fill-brand-600'>
              <path d="M0,32L60,80C120,128,240,224,360,240C480,256,600,192,720,144C840,96,960,64,1080,74.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className="bg-brand-600 w-full pb-4">
              <h3 className="text-center text-[#fff] font-semibold text-xl">{name}</h3>
              <h4 className="text-center text-gray-300">{designation}</h4>
              <div className="flex space-x-5 py-4 justify-center">
                <SocialLink Icon={BsFacebook} link={social?.facebook} />
                <SocialLink Icon={BsTwitter} link={social?.twitter} />
                <SocialLink Icon={BsLinkedin} link={social?.linkedin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id={id}>
      <div className="px-6 sm:px-16">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={getNoOfCards()}
          gutter={20}
          leftChevron={<BiChevronLeft className="text-3xl bg-brand-600 rounded-full text-white" />}
          rightChevron={<BiChevronRight className="text-3xl bg-brand-600 rounded-full text-white" />}
          chevronWidth={100}
          infiniteLoop={true}
          slidesToScroll={1}
          showSlither={true}
        >
          {testimonials && testimonials?.map((testimonial, idx) => {
            const { name, img, desc, designation } = testimonial
            return (
              <FoundingTestimonialsCard name={name} img={img} desc={desc} key={idx} designation={designation} />
            )
          })}
        </ItemsCarousel>
      </div>
    </section>
  )
}

export default FoundingTestimonials