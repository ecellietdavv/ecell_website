import React, { useState } from 'react'
import { handleScroll } from '../../utils/utilityFunctions'

function PageNavigation({ navItems }) {

    const [toggel, setToggel] = useState(false)

    const handleToggel = () => {
        setToggel(!toggel)
    }

    const transitionClass = toggel ? "fixed right-0 z-40 max-h-screen translate-y-1/2 shadow-xl bottom-1/2 bg-dark dark:border-2 dark:border-white shadow-md text-white rounded-l-2xl -translate-x-0 transition-transform duration-300 transform p-4" : "fixed right-0 z-40 max-h-screen translate-y-1/2 shadow-xl bottom-1/2 bg-dark dark:bg-mid text-white rounded-l-2xl translate-x-full transition-transform duration-300 transform p-4"

    return (
        <div className={transitionClass}>
            <p className="p-2 text-center capitalize text-gray-100"> Page Content </p>
            <div className="flex flex-col items-center justify-center">
                <ul className="grid grid-cols-1 gap-2 p-3">
                    {
                        navItems && navItems?.map((value, idx) => {
                            return (
                                <li className="hover:underline bg-mid rounded-md text-center px-6 py-2 cursor-pointer text-md" key={idx} onClick={() => handleScroll(value.scrollTo)}>{value.name}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={handleToggel} type="button" className="absolute flex items-center justify-center py-4 transform translate-y-1/2 w-7 bottom-1/2 rounded-l-xl right-full shadow-lg shadow-mid/70 bg-brand-700 text-gray-50 focus:outline-none"><span className="sr-only">Toggle</span><span className="font-mono text-sm antialiased font-medium" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>CONTENT</span><span className="sr-only">menu</span></button>
            </div>
        </div>
    )
}

export default PageNavigation