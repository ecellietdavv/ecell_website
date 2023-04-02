import React from 'react';
import Events from '../../components/ES23/Events';
import Hero from '../../components/ES23/Hero';
import LaunchingVideo from '../../components/ES23/LaunchingVideo';
import { Montserrat } from 'next/font/google';
import { NextSeo } from 'next-seo';
import Statistics from '../../components/ES23/Statistics';
import Timeline from '../../components/ES23/Timeline';
import Speakers from '../../components/ES23/Speakers';
import FAQ from '../../components/ES23/FAQ';
import Sponsors from '../../components/ES23/Sponsors';
import PageNavigation from '../../components/Navigation/PageNavigation';
const montserrat = Montserrat({ subsets: ['latin'] });

const Esummit23 = () => {
  const navItems = [
    { name: 'E-Summit 23 Home', scrollTo: 'es23_home' },
    { name: 'Statistics', scrollTo: 'es23_statistics' },
    { name: 'Launching Video', scrollTo: 'es23_launching_video' },
    { name: 'Timeline', scrollTo: 'es23_timeline' },
    { name: 'Events', scrollTo: 'es23_events' },
    { name: 'Speakers', scrollTo: 'es23_speakers' },
    { name: 'FAQs', scrollTo: 'es23_faqs' },
    { name: 'Our Sponsors Family', scrollTo: 'es23_sponsors' },
  ];

  return (
    <>
      <NextSeo
        title="E-Summit 23"
        description="Through the various events conducted by us, we provide our students the opportunities to develop and groom entrepreneurial qualities like the ability to think on their feet, to effectively organize and handle national-level events, and adaptability to efficiently collaborate with different groups. Here are some events conducted by us."
      />

      <PageNavigation navItems={navItems}></PageNavigation>

      <main
        style={montserrat.style}
        className="bg-black space-y-24 sm:space-y-0 pb-20 sm:pb-40 overflow-x-hidden"
      >
        <Hero />
        <Statistics />
        <LaunchingVideo />
        <Timeline date={new Date()} />
        <Events />
        <Speakers />
        <FAQ />
        <Sponsors />
      </main>
    </>
  );
};

export default Esummit23;
