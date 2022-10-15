import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Magazine = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <main>
            <div className="bg-brand-600 space-y-4 px-10 lg:px-20 py-40 w-full flex text-center flex-col justify-center items-center">
                <h1 className='text-white font-bold text-3xl'>Launching Our New Magazine</h1>
                <p className='text-white lg:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit rem amet earum sequi impedit aperiam, neque aliquid? Eaque beatae officiis magnam nulla voluptatem quibusdam labore quam voluptates qui dolorem!</p>
            </div>
            <div className='flex flex-col dark:bg-mid w-screen overflow-auto justify-center items-center py-20 px-2'>
                <Document file="/assets/startup.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </main>
    )
}

export default Magazine