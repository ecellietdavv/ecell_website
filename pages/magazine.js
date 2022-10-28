import Script from 'next/script';
import React, { useState } from 'react'
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Magazine = () => {
    return (
        <main>
            <Script async src='https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=1922573'></Script>
            <div className="bg-brand-600 space-y-4 px-10 lg:px-20 py-40 w-full flex text-center flex-col justify-center items-center">
                <h1 className='text-white font-bold text-3xl'>Techneneur</h1>
                <p className='text-white lg:w-3/4'>Launching Our New Magazine</p>
            </div>
            <div className='w-full'>
                <a href="https://online.flippingbook.com/view/1922573/" className="fbo-embed" data-fbo-id="526094ffce" data-fbo-ratio="3:2" data-fbo-lightbox="yes" data-fbo-width="100%" data-fbo-height="auto" data-fbo-version="1"
                >Techneneur</a>
            </div>
        </main>
    )
}

export default Magazine