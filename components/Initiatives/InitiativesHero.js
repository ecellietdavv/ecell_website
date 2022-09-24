import React from 'react'

function InitiativesHero() {

    const handleScroll = (id) => {
        var element = document.getElementById(id);
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <section id='initiativesHero' className="dark:bg-dark dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none xl:text-6xl">Our Successfuly Taken
                        <br className='md:hidden' />
                        <span className="text-brand-400 pl-3">Initiatives</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0  sm:space-x-4 lg:justify-start">
                        <button type='button' className="px-4 xl:px-8 py-3 text-lg font-semibold rounded bg-brand-400 text-dark" onClick={() => handleScroll("flagship")}>Flagship Initiatives</button>
                        <button type='button' onClick={() => handleScroll("all")} className="px-4 xl:px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">All Initiatives</button>
                    </div>
                    {/* <div className="mt-4">Or <span className='underline font-semibold cursor-pointer' onClick={() => handleScroll("all")}>All Initiatives</span></div> */}
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="assets/TCF/feel.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    )
}

export default InitiativesHero