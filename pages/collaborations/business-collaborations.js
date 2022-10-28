import React from 'react'
import POCs from '../../components/UtilComponents/POCs'
import StepsSection from '../../components/BusinessCollaborations/StepsSection'
import Testimonials from '../../components/BusinessCollaborations/Testimonials'
import PageNavigation from '../../components/Navigation/PageNavigation'
import Partners from '../../components/UtilComponents/Partners'
import SectionDescCard from '../../components/UtilComponents/SectionDescCard'
import SectionDivider from '../../components/UtilComponents/SectionDivider'
import { getPageQuery, getPartnersQuery, getStepsQuery, getTestimonialsQuery } from '../../utils/queries'
import { sanityClient } from '../../utils/sanity'
import HeroPage from '../../components/UtilComponents/HeroPage'

function BusinessCollaborations(props) {

  const navItems = [
    { name: "Business Collaboration Home", scrollTo: "businessHero" },
    { name: "Our Sponsors", scrollTo: "sponsors" },
    { name: "Flagship Events", scrollTo: "flagshipEvents" },
    { name: "Testimonials", scrollTo: "testimonials" },
    { name: "Collaborative Events", scrollTo: "collaborativeEvents" },
    { name: "Partner With Us", scrollTo: "businessPocs" },
  ]

  const { heroHeading, heroDescription, heroImage, metaTags, pocs, stepsForFlagshipEvents, stepsForCollaborativeEvents, sponsorsTestimonials, partners, sectionImages } = props
  return (
    <main className='bg-white dark:bg-dark'>
      <PageNavigation navItems={navItems}></PageNavigation>

      <HeroPage id="businessHero" heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage} button1={{ name: "Past Sponsors", scrollTo: "sponsors" }} button2={{ name: "Testimonials", scrollTo: "testimonials" }} extraButton={{ name: "Contact Us for Collaborations", scrollTo: "businessPocs" }} />
      <Partners id="sponsors" content={partners} />
      <SectionDivider img={sectionImages[0]} />
      <StepsSection content={stepsForFlagshipEvents} id="flagshipEvents" />
      <SectionDivider img={sectionImages[1]} />
      <SectionDescCard id="testimonials" name="Sponsor Testimonials" desc="wadawd" />
      <Testimonials content={sponsorsTestimonials} />
      <SectionDivider img={sectionImages[2]} />
      <StepsSection content={stepsForCollaborativeEvents} id="collaborativeEvents" />
      <SectionDivider img={sectionImages[3]} />
      <SectionDescCard id="businessPocs" name={pocs?.title} desc={pocs?.desc} />
      <POCs pocs={pocs.pocs} />
      <SectionDivider img={sectionImages[4]} />
    </main>
  )
}

export const getServerSideProps = async () => {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs, sectionImages } = await sanityClient.fetch(getPageQuery, { name: "Business Collaborations" })
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
      pocs,
      sectionImages
    }
  }
}

export default BusinessCollaborations