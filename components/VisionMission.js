import React from 'react'
import Image from 'next/image'

function VisionMission() {

    const ContentCard = ({ img, content, name, halfWidth = false }) => {
        return (
            <div className={`w-full sm:${halfWidth ? "w-1/2" : "w-full"} relative group`}>
                <Image loading="lazy" height={400} width={600} alt="gallery" className={`block absolute object-cover object-center w-full h-full rounded-lg`}
                    src={img} />
                <div className="bg-black absolute z-10 top-0 left-0 w-full opacity-60 rounded-lg h-full"></div>
            </div>
        )
    }

    return (
        <section className="bg-light dark:bg-dark">
            <div className="container px-5 py-10 mx-auto lg:px-24 max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="vission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" halfWidth={true} />

                        <ContentCard name="mission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" halfWidth={true} />

                        <ContentCard name="mission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="vission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />

                        <ContentCard name="mission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" halfWidth={true} />

                        <ContentCard name="mission" content="waddw" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" halfWidth={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission