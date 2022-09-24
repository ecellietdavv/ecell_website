import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { MdEmojiEvents } from 'react-icons/md'
import { HiFlag } from 'react-icons/hi'
import EventsHero from '../components/Events/EventsHero'
import EventsListSection from '../components/Events/EventsListSection'
import SectionDivider from '../components/UtilComponents/SectionDivider'
import { getEventsQuery } from '../utils/queries'
import { sanityClient } from '../utils/sanity'

function events({ flagshipEvents, collaborativeEvents, allEvents }) {
  return (
    <div className='bg-white dark:bg-dark dark:text-white'>
      <EventsHero />
      <SectionDivider img="img2" />
      <EventsListSection id="flagship" name="Flagship Events" Icon={HiFlag} sectionBio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum error sapiente voluptatem officiis odit soluta neque itaque? Sequi, inventore!" events={flagshipEvents?.events} />
      <SectionDivider img="img1" />
      <EventsListSection id="collaborative" name="Collaborative Events" Icon={AiOutlineTeam} sectionBio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum error sapiente voluptatem officiis odit soluta neque itaque? Sequi, inventore!" events={collaborativeEvents?.events} />
      <SectionDivider img="img3" />
      <EventsListSection events={allEvents?.events}  id="all" name="All Events" Icon={MdEmojiEvents} sectionBio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum error sapiente voluptatem officiis odit soluta neque itaque? Sequi, inventore!" />
      <SectionDivider img="img2"/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const flagshipEvents = await sanityClient.fetch(getEventsQuery, { category: "Flagship Events" })
  const allEvents = await sanityClient.fetch(getEventsQuery, { category: "All Events" })
  const collaborativeEvents = await sanityClient.fetch(getEventsQuery, { category: "Collaborative Events" })

  return {
    props: {
      flagshipEvents,
      allEvents,
      collaborativeEvents,
    }
  }
}

export default events