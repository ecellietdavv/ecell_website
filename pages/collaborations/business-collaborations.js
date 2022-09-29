import React from 'react'
import BusinessHero from '../../components/BusinessCollaborations/BusinessHero'
import BusinessPOC from '../../components/BusinessCollaborations/BusinessPOC'
import StepsSection from '../../components/BusinessCollaborations/StepsSection'
import Testimonials from '../../components/BusinessCollaborations/Testimonials'
import Partners from '../../components/UtilComponents/Partners'
import POC from '../../components/UtilComponents/POC'
import SectionDescCard from '../../components/UtilComponents/SectionDescCard'
import SectionDivider from '../../components/UtilComponents/SectionDivider'
import { getPageQuery, getPartnersQuery, getStepsQuery, getTestimonialsQuery } from '../../utils/queries'
import { sanityClient } from '../../utils/sanity'

function BusinessCollaborations(props) {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs, stepsForFlagshipEvents, stepsForCollaborativeEvents, sponsorsTestimonials, partners } = props
  return (
    <main className='bg-white dark:bg-dark'>
      <BusinessHero id="businessHero" heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage} />
      <Partners id="sponsors" content={partners}/>
      <SectionDivider img="img1" />
      <StepsSection content={stepsForFlagshipEvents} id="flagshipEvents" />
      <SectionDivider img="img1" />
      <SectionDescCard id="testimonials" name="Sponsor Testimonials" desc="wadawd" />
      <Testimonials content={sponsorsTestimonials} />
      <SectionDivider img="img1" />
      <StepsSection content={stepsForCollaborativeEvents} id="collaborativeEvents" />
      <SectionDivider img="img1" />
      <SectionDescCard id="pocs" name="Collaborate Your Bussiness With Us" desc="wadawd" />
      <BusinessPOC pocs={pocs} id="pocs"/>
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