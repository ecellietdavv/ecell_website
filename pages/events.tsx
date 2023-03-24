import React from 'react';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdEmojiEvents } from 'react-icons/md';
import { HiFlag } from 'react-icons/hi';
import EventsListSection from '../components/Events/EventsListSection';
import SectionDivider from '../components/UtilComponents/SectionDivider';
import {
  getCollaborativeEventsQuery,
  getEventsQuery,
  getFlagshipEventsQuery,
} from '../utils/queries';
import { sanityClient } from '../utils/sanity';
import PageNavigation from '../components/Navigation/PageNavigation';
import HeroPage from '../components/UtilComponents/HeroPage';
import { Event } from '../types/typings';

type EventsPageProps = {
  flagshipEvents: Event[];
  collaborativeEvents: Event[];
  allEvents: Event[];
};
function events({
  flagshipEvents,
  collaborativeEvents,
  allEvents,
}: EventsPageProps) {
  const navItems = [
    { name: 'Events Home', scrollTo: 'eventsHome' },
    { name: 'Flagship Events', scrollTo: 'flagshipEvents' },
    { name: 'Collaborative Events', scrollTo: 'collaborativeEvents' },
    { name: 'All Events', scrollTo: 'allEvents' },
  ];

  return (
    <main className="bg-white dark:bg-dark dark:text-white">
      <PageNavigation navItems={navItems}></PageNavigation>
      <HeroPage
        id="eventsHome"
        heroHeading="Successful Events in our paradigm"
        heroDescription="Through the various events conducted by us, we provide our students the opportunities to develop and groom entrepreneurial qualities like the ability to think on their feet, to effectively organize and handle national-level events, and adaptability to efficiently collaborate with different groups. Here are some events conducted by us."
        heroImage="/assets/events-page/Hero.jpg"
        button1={{ name: 'Flagship Events', scrollTo: 'flagshipEvents' }}
        button2={{
          name: 'Collaborative Events',
          scrollTo: 'collaborativeEvents',
        }}
        extraButton={{ name: 'All Events', scrollTo: 'allEvents' }}
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <EventsListSection
        id="flagshipEvents"
        name="Flagship Events"
        Icon={HiFlag}
        sectionBio="Flagship Events"
        events={flagshipEvents}
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <EventsListSection
        id="collaborativeEvents"
        name="Collaborative Events"
        Icon={AiOutlineTeam}
        sectionBio="Collaborative Events"
        events={collaborativeEvents}
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <EventsListSection
        events={allEvents}
        id="allEvents"
        name="All Events"
        Icon={MdEmojiEvents}
        sectionBio="All Events"
      />
      <SectionDivider img="/assets/section-images/1.JPG" />
    </main>
  );
}

export const getStaticProps = async () => {
  const flagshipEvents = await sanityClient.fetch(getFlagshipEventsQuery);
  const allEvents = await sanityClient.fetch(getEventsQuery);
  const collaborativeEvents = await sanityClient.fetch(
    getCollaborativeEventsQuery
  );

  return {
    props: {
      flagshipEvents,
      allEvents,
      collaborativeEvents,
    },
    revalidate: 7200,
  };
};

export default events;
