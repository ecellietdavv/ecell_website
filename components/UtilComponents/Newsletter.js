import React from 'react'

function Newsletter() {
    return (
        <div className="w-full dark:bg-mid bg-dark text-white">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Stay Updated With Us</h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events, blogs and other news</p>
                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-brand-400 dark:text-dark">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter