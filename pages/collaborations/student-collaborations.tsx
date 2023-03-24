import React from 'react';
import PageNavigation from '../../components/Navigation/PageNavigation';
import Alumnus from '../../components/StudentCollaborations/Alumnus';
import Volunteering from '../../components/StudentCollaborations/Volunteering';
import HeroPage from '../../components/UtilComponents/HeroPage';
import Partners from '../../components/UtilComponents/Partners';
import POCs from '../../components/UtilComponents/POCs';
import SectionDescCard from '../../components/UtilComponents/SectionDescCard';
import SectionDivider from '../../components/UtilComponents/SectionDivider';
import { Alumni, Member, Partner } from '../../types/typings';
import {
  getAlumniQuery,
  getPartnersQuery,
  getPocsQuery,
} from '../../utils/queries';
import { sanityClient } from '../../utils/sanity';

type StudentCollaborationsProps = {
  pocs: Member[];
  alumnus: Alumni[];
  partners: Partner[];
};

function StudentCollaborations({
  pocs,
  alumnus,
  partners,
}: StudentCollaborationsProps) {
  const navItems = [
    {
      name: 'Student Collaborators Home',
      scrollTo: 'studentCollaboratorsHero',
    },
    { name: "SPO's", scrollTo: 'spos' },
    { name: 'Volunteering', scrollTo: 'volunteering' },
    { name: 'Alumni', scrollTo: 'alumni' },
    { name: 'Contact Us For a Event', scrollTo: 'sc_contact' },
  ];

  return (
    <main className="bg-white dark:bg-dark">
      <PageNavigation navItems={navItems}></PageNavigation>

      <HeroPage
        id="studentCollaboratorsHero"
        heroHeading="Student Collaborator"
        heroDescription="Collaborate with us as Student Collaborator"
        heroImage="/assets/student-collaborations/Hero.jpg"
        button1={{ name: 'Volunteering', scrollTo: 'volunteering' }}
        button2={{ name: 'Alumni', scrollTo: 'alumni' }}
        extraButton={{
          name: 'Contact Us for Event Collaborations',
          scrollTo: 'sc_contact',
        }}
      />
      <Partners id="spos" partners={partners} />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <SectionDescCard
        id="volunteering"
        name="Join Our CA Program"
        desc="Join us as campus ambassador."
      />
      <Volunteering
        id="volunteering"
        link="/"
        img="/assets/png/CampusAmb.png"
      />
      <SectionDivider img="/assets/section-images/2.JPG" />
      <Alumnus
        title="Meet Our Alumni"
        desc="Our successful alumni"
        alumnus={alumnus}
        id="alumni"
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <SectionDescCard
        id="sc_contact"
        name="Contact Us"
        desc="Having queries about the Cell? Contact our amazing team below."
      />
      <POCs pocs={pocs} />
      <SectionDivider img="/assets/section-images/2.JPG" />
    </main>
  );
}

export const getStaticProps = async () => {
  const partners = await sanityClient.fetch(getPartnersQuery);
  const alumnus = await sanityClient.fetch(getAlumniQuery);
  const { pocs } = await sanityClient.fetch(getPocsQuery, {
    page: 'student-collaborations',
  });

  return {
    props: {
      partners,
      pocs,
      alumnus,
    },
    revalidate: 7200,
  };
};

export default StudentCollaborations;
