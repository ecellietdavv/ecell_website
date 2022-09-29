import React from 'react'
import PageNavigation from '../../components/Navigation/PageNavigation'
import Alumni from '../../components/StudentCollaborations/Alumni'
import StudentCollaborationsHero from '../../components/StudentCollaborations/StudentCollaborationsHero'
import Volunteering from '../../components/StudentCollaborations/Volunteering'
import Partners from '../../components/UtilComponents/Partners'
import POCs from '../../components/UtilComponents/POCs'
import SectionDescCard from '../../components/UtilComponents/SectionDescCard'
import SectionDivider from '../../components/UtilComponents/SectionDivider'
import { getPageQuery, getPartnersQuery } from '../../utils/queries'
import { sanityClient } from '../../utils/sanity'

function StudentCollaborations(props) {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs, alumnies, partners } = props

  const navItems = [
    { name: "Student Collaborators Home", scrollTo: "studentCollaboratorsHero" },
    { name: "SOP's", scrollTo: "sops" },
    { name: "Volunteering", scrollTo: "volunteering" },
    { name: "Alumni", scrollTo: "alumni" },
    { name: "Contact Us For a Event", scrollTo: "sc_contact" },
  ]

  return (
    <main className='bg-white dark:bg-dark'>
      <PageNavigation navItems={navItems}></PageNavigation>

      <StudentCollaborationsHero id="studentCollaboratorsHero" heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage} />
      <Partners id="sops" content={partners} />
      <SectionDivider img="img1" />
      <SectionDescCard id="volunteering" name="Volunteering" desc="Join us as CA" />
      <Volunteering/>
      <SectionDivider img="img1" />
      <Alumni alumnies={alumnies} id="alumni"/>
      <SectionDivider img="img1" />
      <SectionDescCard id="sc_contact" name="Contact Us For a Event" desc="wadawd" />
      <POCs pocs={pocs}/>
      <SectionDivider img="img1" />
    </main>
  )
}

export const getServerSideProps = async () => {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs } = await sanityClient.fetch(getPageQuery, { name: "Student Collaborator" })
  const partners = await sanityClient.fetch(getPartnersQuery, { title: "SOPs" })

  return {
    props: {
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,

      partners,
      pocs
    }
  }
}

export default StudentCollaborations