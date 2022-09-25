import React from 'react'
import InitiativesHero from '../components/Initiatives/InitiativesHero'
import Timeline from '../components/Initiatives/Timeline'
import PageNavigation from '../components/Navigation/PageNavigation'
import SectionDivider from '../components/UtilComponents/SectionDivider'
import { getInitiativesQuery } from '../utils/queries'
import { sanityClient } from '../utils/sanity'

function initiatives({ allInitiatives, flagshipInitiatives }) {

  const navItems = [
    { name: "Initiatives Home", scrollTo: "initiativesHome" },
    { name: "Flagship Initiatives", scrollTo: "flagshipInitiatives" },
    { name: "All Initiatives", scrollTo: "allInitiatives" },
  ]

  return (
    <main>
      <PageNavigation navItems={navItems}></PageNavigation>
      <InitiativesHero id="initiativesHome"/>
      <SectionDivider img="img2" />
      <Timeline initiatives={flagshipInitiatives?.initiatives} name="Flagship Initiatives" id="flagshipInitiatives" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <SectionDivider img="img1" />
      <Timeline initiatives={allInitiatives?.initiatives} name="All Initiatives" id="allInitiatives" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <SectionDivider img="img3" />

    </main>
  )
}

export const getServerSideProps = async () => {
  const flagshipInitiatives = await sanityClient.fetch(getInitiativesQuery, { category: "Flagship Initiatives" })
  const allInitiatives = await sanityClient.fetch(getInitiativesQuery, { category: "All Initiatives" })

  return {
    props: {
      flagshipInitiatives,
      allInitiatives,
    }
  }
}

export default initiatives