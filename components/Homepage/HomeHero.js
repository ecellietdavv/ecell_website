import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

function HomeHero({id}) {
    const [loading, setLoading] = useState(true)
    setInterval(() => {
        setLoading(false)
    }, 4000);

    return (
        <section id={id} className="2xl:bg-[url('/assets/winner.png')] bg-center bg-no-repeat bg-cover bg-fixed w-full">
            {loading && <Image loading="eager" layout="fill" objectFit='cover' className='fixed top-0 h-screen w-screen z-50' src="/assets/loader.gif" />}

            <div className="relative w-full h-full">
                <div className="bg-black absolute z-30 bg-opacity-30 top-0 left-0 h-full w-full"></div>
                <Image width={1920} height={1080} src="/assets/winner.png" className='visible 2xl:invisible'/>
            </div>
        </section>
    )
}

export default HomeHero