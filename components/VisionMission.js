import React from 'react'
import Image from 'next/image'

function VisionMission() {
    return (
        <section className="bg-light dark:bg-dark">
            <div className="container px-5 py-10 mx-auto lg:px-24 max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full sm:w-1/2 p-2 sm:p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block absolute object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                        </div>
                        <div className="w-full sm:w-1/2 p-2 sm:p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                        </div>
                        <div className="w-full sm:w-1/2 p-2 sm:p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                        </div>
                        <div className="w-full sm:w-1/2 p-2 sm:p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission