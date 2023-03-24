import React from 'react';
import POCs from '../../components/UtilComponents/POCs';
import StepsSection from '../../components/BusinessCollaborations/StepsSection';
import Testimonials from '../../components/BusinessCollaborations/Testimonials';
import PageNavigation from '../../components/Navigation/PageNavigation';
import Partners from '../../components/UtilComponents/Partners';
import SectionDescCard from '../../components/UtilComponents/SectionDescCard';
import SectionDivider from '../../components/UtilComponents/SectionDivider';
import {
  getBusinessPartnersQuery,
  getPocsQuery,
  getTestimonialsQuery,
} from '../../utils/queries';
import { sanityClient } from '../../utils/sanity';
import HeroPage from '../../components/UtilComponents/HeroPage';
import { Member, Partner, Testimonial } from '../../types/typings';
import {
  stepsForCollaborativeEvents,
  stepsForFlagshipEvents,
} from '../../data/stepsData';

type BusinessCollaborationsProps = {
  sponsorsTestimonials: Testimonial[];
  partners: Partner[];
  pocs: Member[];
};

function BusinessCollaborations({
  sponsorsTestimonials,
  partners,
  pocs,
}: BusinessCollaborationsProps) {
  const navItems = [
    { name: 'Business Collaboration Home', scrollTo: 'businessHero' },
    { name: 'Our Sponsors', scrollTo: 'sponsors' },
    { name: 'Flagship Events', scrollTo: 'flagshipEvents' },
    { name: 'Testimonials', scrollTo: 'testimonials' },
    { name: 'Collaborative Events', scrollTo: 'collaborativeEvents' },
    { name: 'Partner With Us', scrollTo: 'businessPocs' },
  ];

  return (
    <main className="bg-white dark:bg-dark">
      <PageNavigation navItems={navItems}></PageNavigation>

      <HeroPage
        id="businessHero"
        heroHeading="Connect with us for Business Collaborations"
        heroDescription="Connect with us for beneficial business collaborations to gain access to our exclusive resources and ensure the venture's success."
        heroImage="/assets/business-collaborations/Hero.jpg"
        button1={{ name: 'Past Sponsors', scrollTo: 'sponsors' }}
        button2={{ name: 'Testimonials', scrollTo: 'testimonials' }}
        extraButton={{
          name: 'Contact Us for Collaborations',
          scrollTo: 'businessPocs',
        }}
      />
      <Partners id="sponsors" partners={partners} />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <StepsSection steps={stepsForFlagshipEvents} id="flagshipEvents" />
      <SectionDivider img="/assets/section-images/2.JPG" />
      <SectionDescCard
        id="testimonials"
        name="Sponsor Testimonials"
        desc="wadawd"
      />
      <Testimonials id="testimonials" testimonials={sponsorsTestimonials} />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <StepsSection
        steps={stepsForCollaborativeEvents}
        id="collaborativeEvents"
      />
      <SectionDivider img="/assets/section-images/2.JPG" />
      <SectionDescCard
        id="businessPocs"
        name="Person Of Contact"
        desc="For Business Collaborations Contact."
      />
      <POCs pocs={pocs} />
      <SectionDivider img="/assets/section-images/1.JPG" />
    </main>
  );
}

export const getStaticProps = async () => {
  const sponsorsTestimonials = await sanityClient.fetch(getTestimonialsQuery);
  const partners = await sanityClient.fetch(getBusinessPartnersQuery);
  const { pocs } = await sanityClient.fetch(getPocsQuery, {
    page: 'business-collaborations',
  });

  return {
    props: {
      sponsorsTestimonials,
      partners,
      pocs,
    },
    revalidate: 7200,
  };
};

export default BusinessCollaborations;
