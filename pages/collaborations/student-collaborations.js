import React from 'react'
import PageNavigation from '../../components/Navigation/PageNavigation'
import Alumni from '../../components/StudentCollaborations/Alumni'
import StudentCollaborationsHero from '../../components/StudentCollaborations/StudentCollaborationsHero'
import Volunteering from '../../components/StudentCollaborations/Volunteering'
import Partners from '../../components/UtilComponents/Partners'
import POCs from '../../components/UtilComponents/POCs'
import SectionDescCard from '../../components/UtilComponents/SectionDescCard'
import SectionDivider from '../../components/UtilComponents/SectionDivider'
import { getAlumniQuery, getPageQuery, getPartnersQuery, getVolunteeringQuery } from '../../utils/queries'
import { sanityClient } from '../../utils/sanity'

function StudentCollaborations(props) {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs, alumnies, alumniTitle, alumniDesc, partners, volunteeringTitle, volunteeringDesc, volunteeringImg, perks, link } = props

  const navItems = [
    { name: "Student Collaborators Home", scrollTo: "studentCollaboratorsHero" },
    { name: "SPO's", scrollTo: "spos" },
    { name: "Volunteering", scrollTo: "volunteering" },
    { name: "Alumni", scrollTo: "alumni" },
    { name: "Contact Us For a Event", scrollTo: "sc_contact" },
  ]

  return (
    <main className='bg-white dark:bg-dark'>
      <PageNavigation navItems={navItems}></PageNavigation>

      <StudentCollaborationsHero id="studentCollaboratorsHero" heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage} />
      <Partners id="spos" content={partners} />
      <SectionDivider img="img1" />
      <SectionDescCard id="volunteering" name={volunteeringTitle} desc={volunteeringDesc} />
      <Volunteering link={link} img={volunteeringImg} perks={perks} />
      <SectionDivider img="img1" />
      <Alumni title={alumniTitle} desc={alumniDesc} alumnies={alumnies} id="alumni" />
      <SectionDivider img="img1" />
      <SectionDescCard id="sc_contact" name={pocs?.title} desc={pocs?.desc} />
      <POCs pocs={pocs?.pocs} />
      <SectionDivider img="img1" />
    </main>
  )
}

export const getServerSideProps = async () => {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs } = await sanityClient.fetch(getPageQuery, { name: "Student Collaborator" })
  const partners = await sanityClient.fetch(getPartnersQuery, { title: "SPOs" })
  const { title: alumniTitle, desc: alumniDesc, alumnies } = await sanityClient.fetch(getAlumniQuery)
  const { title: volunteeringTitle, desc: volunteeringDesc, img: volunteeringImg, perks, link } = await sanityClient.fetch(getVolunteeringQuery)

  return {
    props: {
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,

      partners,
      pocs,

      alumniTitle,
      alumniDesc,
      alumnies,

      volunteeringTitle,
      volunteeringDesc,
      volunteeringImg,
      perks,
      link,

    }
  }
}

export default StudentCollaborations