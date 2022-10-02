import React from 'react'
import InitiativesHero from '../components/Initiatives/InitiativesHero'
import Timeline from '../components/Initiatives/Timeline'
import PageNavigation from '../components/Navigation/PageNavigation'
import SectionDivider from '../components/UtilComponents/SectionDivider'
import { getInitiativesQuery, getPageQuery } from '../utils/queries'
import { sanityClient } from '../utils/sanity'

function initiatives({ allInitiatives, flagshipInitiatives, heroHeading, heroDescription, heroImage, metaTags, pocs, sectionImages }) {

  const navItems = [
    { name: "Initiatives Home", scrollTo: "initiativesHome" },
    { name: "Flagship Initiatives", scrollTo: "flagshipInitiatives" },
    { name: "All Initiatives", scrollTo: "allInitiatives" },
  ]

  return (
    <main>
      <PageNavigation navItems={navItems}></PageNavigation>
      <InitiativesHero id="initiativesHome" heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage} />
      <SectionDivider img={sectionImages[0]} />
      <Timeline initiatives={flagshipInitiatives?.initiatives} name={flagshipInitiatives?.name} id="flagshipInitiatives" desc={flagshipInitiatives?.desc} />
      <SectionDivider img={sectionImages[1]} />
      <Timeline initiatives={allInitiatives?.initiatives} name={allInitiatives?.name} id="allInitiatives" desc={allInitiatives?.desc} />
      <SectionDivider img={sectionImages[2]} />

    </main>
  )
}

export const getServerSideProps = async () => {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs, sectionImages } = await sanityClient.fetch(getPageQuery, { name: "Initiatives" })
  const flagshipInitiatives = await sanityClient.fetch(getInitiativesQuery, { category: "Flagship Initiatives" })
  const allInitiatives = await sanityClient.fetch(getInitiativesQuery, { category: "All Initiatives" })

  return {
    props: {
      flagshipInitiatives,
      allInitiatives,
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,
      pocs,
      sectionImages
    }
  }
}

export default initiatives