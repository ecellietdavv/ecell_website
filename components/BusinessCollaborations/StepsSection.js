import React, { useEffect, useState } from 'react'
import PortableText from "react-portable-text";
import ViewMore from '../UtilComponents/ViewMore';

function StepsSection({ content, id }) {
    const { steps, title } = content

    const StepCard = ({ step, key }) => {
        const { name, desc, number } = step
        return (
            <div key={key} className="flex flex-col p-8 space-y-4 bg-mid/10 rounded-md dark:bg-mid">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-brand-500 dark:text-gray-900">{number}</div>
                <p className="text-2xl font-semibold">
                    <b>{name}:</b>
                </p>
                <PortableText
                    className='dark:text-slate-300 mx-auto xl:mx-0 lg:w-3/4 space-y-3'
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={desc}
                />
            </div>
        )
    }

    const [loadMore, setLoadMore] = useState(1)
    const [reset, setReset] = useState(1)
    const [height, setHeight] = useState(600)

    useEffect(() => {
        const cardsOnScreenView = window?.innerWidth >= 640 ? 3 : 2
        const calcHeight = window?.innerWidth >= 640 ? 1000 : 1300
        const calcReset = content?.steps?.length / cardsOnScreenView
        setReset(calcReset)
        setHeight(calcHeight)
    }, [])

    const handleLoading = () => {
        loadMore >= reset ?
            setLoadMore(1)
            :
            setLoadMore(loadMore + 1)
    }

    return (
        <section id={id} style={{ height: height * loadMore }} className="p-6 py-16 overflow-hidden relative dark:bg-dark dark:text-gray-100">
            <div className="container mx-auto">
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-brand-500">How it works</span>
                <h2 className="text-5xl font-bold text-center dark:text-gray-50">{title}</h2>
                <div className="grid gap-6 my-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        steps && steps?.map((step, idx) => {
                            return (
                                <StepCard step={step} key={idx} />
                            )
                        })
                    }
                </div>
            </div>
            <ViewMore action={handleLoading} reset={loadMore >= reset} />
        </section>
    )
}

export default StepsSection