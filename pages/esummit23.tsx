import React from 'react';
import FlagshipEvents from '../components/ES23/FlagshipEvents';
import Hero from '../components/ES23/Hero';
import LaunchingVideo from '../components/ES23/LaunchingVideo';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

const Esummit23 = () => {
  return (
    <main style={montserrat.style} className="bg-black">
      <Hero />
      <LaunchingVideo />
      <FlagshipEvents />
    </main>
  );
};

export default Esummit23;
