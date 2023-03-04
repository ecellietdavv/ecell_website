import React from 'react'
import POC from './POC'

function POCs({ pocs }) {
    return (
        <section className="grid gap-32 mt-20 sm:mt-0 px-6 sm:gap-20 max-w-7xl mx-auto xl:px-20 py-10 grid-cols-1 sm:grid-cols-2">
            {
                pocs && pocs?.map((poc, idx) => {
                    return (
                        <POC poc={poc} key={idx} />
                    )
                })
            }
        </section>
    )
}

export default POCs