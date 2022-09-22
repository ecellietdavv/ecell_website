import React from 'react'

function SectionDescCard({name, desc}) {
    return (
        <div className="bg-brand-500 h-[50vh] flex flex-col items-center justify-center md:py-0 text-light">
            <div className="max-w-7xl flex flex-col items-center justify-center space-y-5">
                <h3 className="text-3xl sm:text-4xl bg-brand-500 w-full text-center font-bold">{name}</h3>
                <p className="sm:text-base w-5/6 text-sm sm:w-4/6 text-center mx-auto">{desc}</p>
            </div>
        </div>
    )
}

export default SectionDescCard