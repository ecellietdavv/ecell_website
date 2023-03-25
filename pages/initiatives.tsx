import { NextSeo } from 'next-seo';
import React from 'react';
import Timeline from '../components/Initiatives/Timeline';
import PageNavigation from '../components/Navigation/PageNavigation';
import HeroPage from '../components/UtilComponents/HeroPage';
import SectionDivider from '../components/UtilComponents/SectionDivider';
import { Initiative } from '../types/typings';
import {
  getFlagshipInitiativesQuery,
  getInitiativesQuery,
} from '../utils/queries';
import { sanityClient } from '../utils/sanity';

type InitiativesPageProps = {
  allInitiatives: Initiative[];
  flagshipInitiatives: Initiative[];
};

function initiatives({
  allInitiatives,
  flagshipInitiatives,
}: InitiativesPageProps) {
  const navItems = [
    { name: 'Initiatives Home', scrollTo: 'initiativesHome' },
    { name: 'Flagship Initiatives', scrollTo: 'flagshipInitiatives' },
    { name: 'All Initiatives', scrollTo: 'allInitiatives' },
  ];

  return (
    <main>
      <NextSeo
        title="Initiatives"
        description="Proactivity is one of the seven habits found in the most successful habits around the globe. E-cell IET DAVV actively helps all its members to seek innovative ideas and then we proactively take initiatives to convert these ideas into reality. These are some of our initiatives."
      />
      <PageNavigation navItems={navItems}></PageNavigation>
      <HeroPage
        id="initiativesHome"
        heroHeading="Our Successfully Taken Initiatives"
        heroDescription="Proactivity is one of the seven habits found in the most successful habits around the globe. E-cell IET DAVV actively helps all its members to seek innovative ideas and then we proactively take initiatives to convert these ideas into reality. These are some of our initiatives."
        heroImage="/assets/initiatives-page/Hero.jpg"
        button1={{
          name: 'Flagship Initiatives',
          scrollTo: 'flagshipInitiatives',
        }}
        button2={{ name: 'All Initiatives', scrollTo: 'allInitiatives' }}
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <Timeline
        initiatives={flagshipInitiatives}
        name="Flagship Initiatives"
        id="flagshipInitiatives"
        desc="Flagship Initiatives"
      />
      <SectionDivider img="/assets/section-images/2.JPG" />
      <Timeline
        initiatives={allInitiatives}
        name="All Initiatives"
        id="allInitiatives"
        desc="All Initiatives"
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
    </main>
  );
}

export const getStaticProps = async () => {
  const allInitiatives = await sanityClient.fetch(getInitiativesQuery);
  const flagshipInitiatives = await sanityClient.fetch(
    getFlagshipInitiativesQuery
  );

  return {
    props: {
      allInitiatives,
      flagshipInitiatives,
    },
    revalidate: 7200,
  };
};

export default initiatives;
