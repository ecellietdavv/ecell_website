import Link from 'next/link'
import React from 'react'

function GradientButton({ name, link, Icon }) {
    return (
        <Link href={link} className="w-fit">
            <div className="relative cursor-pointer group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 w-fit">
                <span className="relative text-white">{name}</span>
                <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <Icon className="h-5 w-5 stroke-white text-white -translate-x-2 transition duration-300 group-hover:translate-x-0" />
                </div>
            </div>
        </Link>
    )
}

export default GradientButton