import React from 'react'
import Image from 'next/image'

function VisionMission() {

    const ContentCard = ({ img, content, name, halfWidth = false }) => {
        return (
            <div className={halfWidth ? "w-full sm:w-1/2 relative group p-2" : "w-full sm:w-full relative group p-2"}>
                <Image loading="lazy" height={400} width={600} alt={name} className={`block absolute object-cover object-center w-full h-full rounded-lg`}
                    src={img} />

                <div className="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0 z-10"></div>
                <div className="absolute z-20 text-white top-0 left-0 w-full flex flex-col justify-center items-center h-full px-10 overflow-auto">
                    <h3 className='text-xl font-semibold group-hover:hidden block'>{name}</h3>
                    <p className={halfWidth? 'group-hover:block hidden text-sm' : 'group-hover:block hidden'}>{content}</p>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-light dark:bg-dark">
            <div className="container px-5 py-10 mx-auto lg:px-24 max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="vission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" halfWidth={true} />

                        <ContentCard name="Mission" content="To foster and sustain the spirit of entrepreneurship among students and provide them with the best possible platform to apply their ideas into the real world of business." img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" halfWidth={true} />

                        <ContentCard name="Vision" content="A budding entrepreneur never gives up these five landmarks- explore, create, volunteer, work hard and lead. We at E-Cell, IET DAVV, ensure that we pursue these landmarks with utmost sincerity and dedication. E-Cell, IET DAVV aims to ignite creative thinking and nurture entrepreneurial instincts in students. E-Cell, IET DAVV succeeds in achieving this by conducting workshops, competitions and interactive sessions with eminent personalities who have made their names in business development." img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="E-Networking" content="E-Cell helps people to connect with like-minded people of similar interests and helps them improve their skills through the advantage of networking. E-Cell conducts various workshops and events which help people to engage and interact with others which help them to improve and evolve." img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />

                        <ContentCard name="Incubation Center" content="A platform for budding entrepreneurs to get their innovative ideas evaluated by successful entrepreneurs, VCs, and market leaders." img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" halfWidth={true} />

                        <ContentCard name="NEC" content="" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" halfWidth={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission