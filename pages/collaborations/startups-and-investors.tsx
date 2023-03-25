import { NextSeo } from 'next-seo';
import React from 'react';
import PageNavigation from '../../components/Navigation/PageNavigation';
import CaseStudies from '../../components/StartupAndInvestors/CaseStudies';
import FoundingTestimonials from '../../components/StartupAndInvestors/FoundingTestimonials';
import IdeasAndInvestors from '../../components/StartupAndInvestors/IdeasAndInvestors';
import Mentors from '../../components/StartupAndInvestors/Mentors';
import HeroPage from '../../components/UtilComponents/HeroPage';
import POCs from '../../components/UtilComponents/POCs';
import SectionDescCard from '../../components/UtilComponents/SectionDescCard';
import SectionDivider from '../../components/UtilComponents/SectionDivider';
import { CaseStudy, Member, Mentor, Testimonial } from '../../types/typings';
import {
  getCaseStudiesQuery,
  getMentorsQuery,
  getPocsQuery,
  getTestimonialsQuery,
} from '../../utils/queries';
import { sanityClient } from '../../utils/sanity';

type StartupsAndInvestorsProps = {
  foundingTestimonials: Testimonial[];
  pocs: Member[];
  caseStudies: CaseStudy[];
  mentors: Mentor[];
};

function StartupsAndInvestors({
  foundingTestimonials,
  pocs,
  caseStudies,
  mentors,
}: StartupsAndInvestorsProps) {
  const navItems = [
    { name: 'Startup & Investors Home', scrollTo: 'startupHero' },
    { name: 'Mentoring', scrollTo: 'mentors' },
    { name: 'Founding Testimonials', scrollTo: 'foundingTestimonials' },
    { name: 'Casestudies', scrollTo: 'caseStudies' },
    { name: 'Join as a Startup', scrollTo: 'joinus' },
    { name: 'Become an Investor', scrollTo: 'joinus' },
    { name: 'Contact Us', scrollTo: 's_and_i_pocs' },
  ];

  return (
    <main className="bg-white dark:bg-dark">
      <NextSeo
        title="Startups And Investors"
        description="Joining us as a startup provides excellent opportunities to extend your network and connect with several potential investors. As an investor, you will come across highly enthusiastic and talented youth with Ideas of great potential in which you can invest as per your expertise."
      />

      <PageNavigation navItems={navItems}></PageNavigation>
      <HeroPage
        id="startupHero"
        heroHeading="Join us as a Startup Or Investor"
        heroDescription="Joining us as a startup provides excellent opportunities to extend your network and connect with several potential investors. As an investor, you will come across highly enthusiastic and talented youth with Ideas of great potential in which you can invest as per your expertise."
        heroImage="/assets/startups-and-investors/Hero.jpg"
        button1={{ name: 'Join Us', scrollTo: 'joinus' }}
        button2={{ name: 'Case Studies', scrollTo: 'caseStudies' }}
        extraButton={{
          name: 'Contact Us for Assistance',
          scrollTo: 's_and_i_pocs',
        }}
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <SectionDescCard id="mentors" name="Our Mentors" desc="" />
      <Mentors mentors={mentors} />
      <SectionDivider img="/assets/section-images/2.JPG" />
      <SectionDescCard
        id="foundingTestimonials"
        name="Founding Testimonials"
        desc="Here are some words of wisdom from our founders."
      />
      <FoundingTestimonials
        id="foundingTestimonials"
        testimonials={foundingTestimonials}
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <SectionDescCard
        id="caseStudies"
        name="Case Studies"
        desc="Here are the stories behind some of our startups."
      />
      <CaseStudies caseStudies={caseStudies} />
      <SectionDivider img="/assets/section-images/2.JPG" />
      {/* <IdeasAndInvestors id="joinus" sections={ideaAndInvestors} /> */}
      <SectionDivider img="/assets/section-images/1.JPG" />
      <SectionDescCard
        id="s_and_i_pocs"
        name="Contact Us"
        desc="Having queries about the Cell? Contact our amazing team below."
      />
      <POCs pocs={pocs} />
      <SectionDivider img="/assets/section-images/2.JPG" />
    </main>
  );
}

export const getServerSideProps = async () => {
  const foundingTestimonials = await sanityClient.fetch(getTestimonialsQuery);
  const caseStudies = await sanityClient.fetch(getCaseStudiesQuery);
  const mentors = await sanityClient.fetch(getMentorsQuery);
  const { pocs } = await sanityClient.fetch(getPocsQuery, {
    page: 'startups-and-investors',
  });

  return {
    props: {
      foundingTestimonials,
      caseStudies,
      pocs,
      mentors,
    },
  };
};

export default StartupsAndInvestors;
