import Script from 'next/script';
import React, { useState } from 'react';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Magazine = () => {
  return (
    <main>
      <div className="bg-brand-600 space-y-4 px-10 lg:px-20 py-40 w-full flex text-center flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl">VRITANT</h1>
        <p className="text-white lg:w-3/4">The Voice of IET</p>
      </div>
      <div className="w-full">
        <div style={{position: "relative", paddingTop: "max(60%,324px)", width:"100%", height:0 }}>
          <iframe style={{position:"absolute", border:"none", width:"100%", height:"100%", left:0, top:0}} src="https://online.fliphtml5.com/uujrj/cwuc/"  seamless="seamless" scrolling="no" frameBorder="0" allowtransparency="true" allowfullscreen="true" >
          </iframe>
        </div>
      </div>
    </main>
  );
};

export default Magazine;
