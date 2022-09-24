import React from 'react'
import InitiativesHero from '../components/Initiatives/InitiativesHero'
import Timeline from '../components/Initiatives/Timeline'
import SectionDivider from '../components/UtilComponents/SectionDivider'
import { getInitiativesQuery } from '../utils/queries'
import { sanityClient } from '../utils/sanity'

function initiatives({ allInitiatives, flagshipInitiatives }) {
  return (
    <main>
      <InitiativesHero />
      <SectionDivider img="img2"/>
      <Timeline initiatives={flagshipInitiatives?.initiatives} name="Flagship Initiatives" id="flagship" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <SectionDivider img="img1"/>
      <Timeline initiatives={allInitiatives?.initiatives} name="All Initiatives" id="all" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <SectionDivider img="img3"/>

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