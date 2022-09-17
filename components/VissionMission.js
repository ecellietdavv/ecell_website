import React from 'react'
import Image from 'next/image'

function VissionMission() {
    return (
        <section className="overflow-hidden dark:bg-dark text-gray-700">
            <div className="container px-5 py-6 mx-auto lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full sm:w-1/2 p-2 sm:p-1 md:p-2">
                            <Image height={400} width={600} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
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

export default VissionMission