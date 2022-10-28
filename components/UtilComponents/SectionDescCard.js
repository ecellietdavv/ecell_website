import React from 'react'

function SectionDescCard({ name, desc, id }) {
    return (
        <div id={id} className="bg-brand-500 h-[50vh] max-h-[400px] flex flex-col items-center justify-center md:py-0 text-light">
            <div className="max-w-7xl w-full flex flex-col items-center justify-center space-y-5">
                <h3 className="text-3xl w-3/4 sm:text-4xl bg-brand-500 lg:w-full text-center font-bold">{name}</h3>
                <p className="sm:text-base w-5/6 text-sm sm:w-4/6 text-center mx-auto">{desc}</p>
            </div>
        </div>
    )
}

export default SectionDescCard