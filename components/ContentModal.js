import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import PortableText from 'react-portable-text'

function ContentModal({ name, body }) {
    return (
        <div id={name} tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-[22%] right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                <div className="relative bg-white rounded-lg shadow dark:bg-mid">

                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-mid">
                        <h3 className="text-xl font-semibold text-dark dark:text-white">
                            {name}
                        </h3>
                        <button type="button" className="text-light bg-transparent hover:bg-light hover:text-dark rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-mid dark:hover:text-light" data-modal-toggle={name}>
                            <AiOutlineClose className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6">
                        <PortableText
                            className='dark:text-white'
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={body}
                            serializers={{
                                h1: (props) => {
                                    <h1 className='text-2xl font-bold my-5' {...props} />
                                },
                                h2: (props) => {
                                    <h2 className='text-xl font-bold my-5' {...props} />
                                },
                                li: ({ children }) => {
                                    <li className='ml-4 list-disc'>{children}</li>
                                },
                                link: ({ href, children }) => {
                                    <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentModal