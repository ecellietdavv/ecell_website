import React from 'react'
import BusinessHero from '../../components/BusinessCollaborations/BusinessHero'
import POCs from '../../components/UtilComponents/POCs'
import StepsSection from '../../components/BusinessCollaborations/StepsSection'
import Testimonials from '../../components/BusinessCollaborations/Testimonials'
import PageNavigation from '../../components/Navigation/PageNavigation'
import Partners from '../../components/UtilComponents/Partners'
import POC from '../../components/UtilComponents/POC'
import SectionDescCard from '../../components/UtilComponents/SectionDescCard'
import SectionDivider from '../../components/UtilComponents/SectionDivider'
import { getPageQuery, getPartnersQuery, getStepsQuery, getTestimonialsQuery } from '../../utils/queries'
import { sanityClient } from '../../utils/sanity'

function BusinessCollaborations(props) {

  const navItems = [
    { name: "Business Collaboration Home", scrollTo: "businessHero" },
    { name: "Our Sponsors", scrollTo: "sponsors" },
    { name: "Flagship Events", scrollTo: "flagshipEvents" },
    { name: "Testimonials", scrollTo: "testimonials" },
    { name: "Collaborative Events", scrollTo: "collaborativeEvents" },
    { name: "Partner With Us", scrollTo: "businessPocs" },
  ]

  const { heroHeading, heroDescription, heroImage, metaTags, pocs, stepsForFlagshipEvents, stepsForCollaborativeEvents, sponsorsTestimonials, partners } = props
  return (
    <main className='bg-white dark:bg-dark'>
      <PageNavigation navItems={navItems}></PageNavigation>

      <BusinessHero id="businessHero" heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage}/>
      <Partners id="sponsors" content={partners}/>
      <SectionDivider img="img1" />
      <StepsSection content={stepsForFlagshipEvents} id="flagshipEvents" />
      <SectionDivider img="img1" />
      <SectionDescCard id="testimonials" name="Sponsor Testimonials" desc="wadawd" />
      <Testimonials content={sponsorsTestimonials} />
      <SectionDivider img="img1" />
      <StepsSection content={stepsForCollaborativeEvents} id="collaborativeEvents" />
      <SectionDivider img="img1" />
      <SectionDescCard id="businessPocs" name="Partner With Us" desc="wadawd" />
      <POCs pocs={pocs}/>
      <SectionDivider img="img1" />
    </main>
  )
}

export const getServerSideProps = async () => {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs } = await sanityClient.fetch(getPageQuery, { name: "Business Collaborations" })
  const stepsForFlagshipEvents = await sanityClient.fetch(getStepsQuery, { title: "Flagship Events" })
  const stepsForCollaborativeEvents = await sanityClient.fetch(getStepsQuery, { title: "Collaborative Events" })
  const sponsorsTestimonials = await sanityClient.fetch(getTestimonialsQuery, { title: "Sponsor Testimonials" })
  const partners = await sanityClient.fetch(getPartnersQuery, { title: "Past Sponsors" })

  return {
    props: {
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,
      stepsForFlagshipEvents,
      stepsForCollaborativeEvents,
      sponsorsTestimonials,
      partners,
      pocs
    }
  }
}

export default BusinessCollaborations