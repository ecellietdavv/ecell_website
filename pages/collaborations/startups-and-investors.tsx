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
import {
  getCaseStudiesQuery,
  getIdeaAndInvestorsQuery,
  getMentorsQuery,
  getPageQuery,
  getTestimonialsQuery,
} from '../../utils/queries';
import { sanityClient } from '../../utils/sanity';

function StartupsAndInvestors(props) {
  const {
    foundingTestimonials,
    heroHeading,
    heroDescription,
    heroImage,
    metaTags,
    pocs,
    caseStudies,
    mentors,
    mentorTitle,
    mentorDesc,
    ideaAndInvestors,
    sectionImages,
  } = props;

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
      <PageNavigation navItems={navItems}></PageNavigation>
      <HeroPage
        id="startupHero"
        heroHeading={heroHeading}
        heroDescription={heroDescription}
        heroImage={heroImage}
        button1={{ name: 'Join Us', scrollTo: 'joinus' }}
        button2={{ name: 'Case Studies', scrollTo: 'caseStudies' }}
        extraButton={{
          name: 'Contact Us for Assistance',
          scrollTo: 's_and_i_pocs',
        }}
      />
      <SectionDivider img={sectionImages[0]} />
      <SectionDescCard id="mentors" name={mentorTitle} desc={mentorDesc} />
      <Mentors mentors={mentors} />
      <SectionDivider img={sectionImages[1]} />
      <SectionDescCard
        id="foundingTestimonials"
        name="Founding Testimonials"
        desc="Here are some words of wisdom from our founders."
      />
      <FoundingTestimonials content={foundingTestimonials} />
      <SectionDivider img={sectionImages[2]} />
      <SectionDescCard
        id="caseStudies"
        name="Case Studies"
        desc="Here are the stories behind some of our startups."
      />
      <CaseStudies caseStudies={caseStudies} />
      <SectionDivider img={sectionImages[3]} />
      <IdeasAndInvestors id="joinus" sections={ideaAndInvestors} />
      <SectionDivider img={sectionImages[4]} />
      <SectionDescCard id="s_and_i_pocs" name={pocs?.title} desc={pocs?.desc} />
      <POCs pocs={pocs?.pocs} />
      <SectionDivider img={sectionImages[5]} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const {
    heroHeading,
    heroDescription,
    heroImage,
    metaTags,
    pocs,
    sectionImages,
  } = await sanityClient.fetch(getPageQuery, { name: 'Startup And Investors' });
  const foundingTestimonials = await sanityClient.fetch(getTestimonialsQuery, {
    title: 'Founding Testimonials',
  });
  const caseStudies = await sanityClient.fetch(getCaseStudiesQuery);
  const {
    mentors,
    title: mentorTitle,
    desc: mentorDesc,
  } = await sanityClient.fetch(getMentorsQuery);
  const ideaAndInvestors = await sanityClient.fetch(getIdeaAndInvestorsQuery);

  return {
    props: {
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,
      foundingTestimonials,
      caseStudies,
      pocs,
      mentors,
      mentorTitle,
      mentorDesc,
      ideaAndInvestors,
      sectionImages,
    },
  };
};

export default StartupsAndInvestors;
