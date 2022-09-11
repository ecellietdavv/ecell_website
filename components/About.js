/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const About = () => {
  return (
    <>
    <style>
        {`
        .isometric-card{
            margin: 0 auto;
  transform: rotateX(309deg) rotateZ(43deg);
  transform-style: preserve-3d;
  background-color: #fcfcfc;
  will-change: transform;
  width: 240px;
  height: 240px;
  border-radius: 2rem;
  box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  transition: 0.4s ease-in-out transform, 0.3s ease-in-out box-shadow;
}
.card-1{
    
}
.card-2{
     
}
.card-3{
}
.isometric-card:hover{
    transform: translate3d(0px, -16px, 0px) rotateX(309deg) rotateZ(43deg);
  box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    54px 54px 28px -10px rgba(34, 33, 81, 0.15);
}        
        `}
    </style>
    <div className='grid md:grid-cols-2 bg-light dark:bg-dark text-dark dark:text-white'>
    <div className='ml-9 mr-9'>
    <h1 className='text-3xl underline underline-offset-8'>About Us</h1>
    <p className='mt-5 dark:text-slate-300'>It is often said that "science of today is technology of tomorrow". And in, ACIIE, IET-DAVV we are determined to achieve this very goal. Entrepreneurs with a technical background like our students have an amazing capability to innovate both on the technical and business fronts.</p>
    <button className='rounded-xl mt-10 bg-brand-600 hover:bg-brand-500 font-semibold px-4 p-2'><a href="">Know More</a></button>
    </div>
    <div className='pt-14 hidden md:flex md:flex-row'>
    <div className='isometric-card card-1 dark:bg-slate-600'></div>
    <div className='isometric-card card-2 dark:bg-slate-600'></div>
    <div className='isometric-card card-3 dark:bg-slate-600'></div>
    </div>
    </div>
  </>
  )
}

export default About