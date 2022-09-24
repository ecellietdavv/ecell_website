import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function ViewMore() {
    return (
        <>
            <div className="absolute bottom-10 left-0 right-0 mx-auto z-20 cursor-pointer group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 w-fit">
                <span className="relative text-white">View More</span>
                <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <AiOutlineArrowRight className="h-5 w-5 stroke-white text-white -translate-x-2 transition duration-300 group-hover:translate-x-0" />
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-1/3 z-10 blogBannerGradient" />
        </>
    )
}

export default ViewMore