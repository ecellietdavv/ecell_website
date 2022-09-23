import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { HiFlag } from 'react-icons/hi'
import EventsHero from '../components/Events/EventsHero'
import EventsListSection from '../components/Events/EventsListSection'
import SectionDivider from '../components/SectionDivider'

function events() {
  return (
    <div className='bg-white dark:bg-dark dark:text-white'>
      <EventsHero />
      <SectionDivider img="img2" />

      <EventsListSection id="flagship" name="Flagship Events" Icon={HiFlag} sectionBio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum error sapiente voluptatem officiis odit soluta neque itaque? Sequi, inventore!" />
      <SectionDivider img="img1" />
      <EventsListSection id="collaborative" name="Collaborative Events" Icon={AiOutlineTeam} sectionBio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum error sapiente voluptatem officiis odit soluta neque itaque? Sequi, inventore!" />
      <SectionDivider img="img3" />
    </div>
  )
}

export default events