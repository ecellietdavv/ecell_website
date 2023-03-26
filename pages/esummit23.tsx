import React from 'react';
import FlagshipEvents from '../components/ES23/FlagshipEvents';
import Hero from '../components/ES23/Hero';
import LaunchingVideo from '../components/ES23/LaunchingVideo';
import { Montserrat } from 'next/font/google';
import { NextSeo } from 'next-seo';
import Statistics from '../components/ES23/Statistics';
import Timeline from '../components/ES23/Timeline';
import Speakers from '../components/ES23/Speakers';
import FAQ from '../components/ES23/FAQ';
const montserrat = Montserrat({ subsets: ['latin'] });

const Esummit23 = () => {
  return (
    <>
      <NextSeo
        title="Esummit 23"
        description="Through the various events conducted by us, we provide our students the opportunities to develop and groom entrepreneurial qualities like the ability to think on their feet, to effectively organize and handle national-level events, and adaptability to efficiently collaborate with different groups. Here are some events conducted by us."
      />
      <main
        style={montserrat.style}
        className="bg-black space-y-24 sm:space-y-0 pb-20 sm:pb-40"
      >
        <Hero />
        <Statistics />
        <LaunchingVideo />
        <Timeline date={new Date()} />
        <FlagshipEvents />
        <Speakers />
        <FAQ />
      </main>
    </>
  );
};

export default Esummit23;
