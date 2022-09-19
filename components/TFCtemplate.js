/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
// import Image from 'next/image'

const TFCtemplate = () => {
    const tfc = [
        {
            headg: "Think",
            img: "/assets/TCF/think.svg",
            desc: `A true entrepreneur can think of the ways to keep up with any
            kind of problem at any point of time. The power of thinking 
            enables us to give our best at any possible situation. Through
            various on the spot competitions and face offs we encourage our
            student's minds to inculcate thinking and grow each passing day.`
        }, {
            headg: "Feel",
            img: "/assets/TCF/feel.svg",
            desc: `Its often said that rational thinking can win you the world. But
            in the startup arena a sight of connection and belonging is what
            keeps the work going and flourishing on an another level.Ecell IET
                DAVV provides various platforms to the students where they can find
            their neeche and feel a sense of being and belonging to the startup
                world and can connect to it.`
        }, {
            headg: "Collaborate",
            img: "/assets/TCF/collaborate.svg",
            desc: `A great team is what makes a great dream . Managing to work with varied
            opinions and wisely incorporate the best ones as a group is what makes
            a team grow . A will to  associate and co-operate is what E-Cell IET DAVV
                aims to ingrain in its students through several group projects and events,
            workshops and many more.`
        },
    ]

    return (
        <div className='dark:bg-dark py-4 bg-light'>
            <h2 className='lg:text-4xl px-4 lg:px-0 text-3xl antialiased text-center font-bold dark:text-light'>Welcome To E-Cell IET DAVV</h2>
            <div className="border-t-4 my-8 lg:w-1/5 md:w-1/5 w-2/4 mx-auto border-brand-500 border-opacity-20"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 dark:bg-dark grid-cols-1">
                {tfc?.map((value, idx) => {
                    return (
                        <div className='shadow-lg flex py-8 flex-col justify-center space-y-4 items-center' key={idx}>
                            <Image height={192} width={192} src={value.img} alt={value.headg} />
                            <h3 className='text-center font-semibold text-2xl dark:text-light'>{value.headg}</h3>
                            <p className='capitalize text-sm text-center mb-8 dark:text-light my-2 mx-auto px-10'>
                                {value.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TFCtemplate
