import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { MdEmojiEvents } from 'react-icons/md'
import { HiFlag } from 'react-icons/hi'
import EventsListSection from '../components/Events/EventsListSection'
import SectionDivider from '../components/UtilComponents/SectionDivider'
import { getEventsQuery, getPageQuery } from '../utils/queries'
import { sanityClient } from '../utils/sanity'
import PageNavigation from '../components/Navigation/PageNavigation'
import HeroPage from '../components/UtilComponents/HeroPage'

function events({ flagshipEvents, collaborativeEvents, allEvents, heroHeading, heroDescription, heroImage, metaTags, pocs, sectionImages }) {

  const navItems = [
    { name: "Events Home", scrollTo: "eventsHome" },
    { name: "Flagship Events", scrollTo: "flagshipEvents" },
    { name: "Collaborative Events", scrollTo: "collaborativeEvents" },
    { name: "All Events", scrollTo: "allEvents" },
  ]

  return (
    <main className='bg-white dark:bg-dark dark:text-white'>
      <PageNavigation navItems={navItems}></PageNavigation>
      <HeroPage id='eventsHome' heroHeading={heroHeading} heroDescription={heroDescription} heroImage={heroImage} button1={{ name: "Flagship Events", scrollTo: "flagshipEvents" }} button2={{ name: "Collaborative Events", scrollTo: "collaborativeEvents" }} extraButton={{ name: "All Events", scrollTo: "allEvents" }} />
      <SectionDivider img={sectionImages[0]} />
      <EventsListSection id="flagshipEvents" name={flagshipEvents?.name} Icon={HiFlag} sectionBio={flagshipEvents?.desc} events={flagshipEvents?.events} />
      <SectionDivider img={sectionImages[1]} />
      <EventsListSection id="collaborativeEvents" name={collaborativeEvents?.name} Icon={AiOutlineTeam} sectionBio={collaborativeEvents?.desc} events={collaborativeEvents?.events} />
      <SectionDivider img={sectionImages[2]} />
      <EventsListSection events={allEvents?.events} id="allEvents" name={allEvents?.name} Icon={MdEmojiEvents} sectionBio={allEvents?.desc} />
      <SectionDivider img={sectionImages[3]} />
    </main>
  )
}

export const getServerSideProps = async () => {
  const { heroHeading, heroDescription, heroImage, metaTags, pocs, sectionImages } = await sanityClient.fetch(getPageQuery, { name: "Events" })
  const flagshipEvents = await sanityClient.fetch(getEventsQuery, { category: "Flagship Events" })
  const allEvents = await sanityClient.fetch(getEventsQuery, { category: "All Events" })
  const collaborativeEvents = await sanityClient.fetch(getEventsQuery, { category: "Collaborative Events" })

  return {
    props: {
      flagshipEvents,
      allEvents,
      collaborativeEvents,
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,
      pocs,
      sectionImages
    }
  }
}

export default events