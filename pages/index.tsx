/* eslint-disable @next/next/no-sync-scripts */
import TFCtemplate from '../components/Homepage/TFC/TFCtemplate';
import Event from '../components/Homepage/Event';
import Initiative from '../components/Homepage/Initiative';
import About from '../components/Homepage/About/About';
import VisionMission from '../components/Homepage/Vision/VisionMission';
import Teams from '../components/Homepage/Teams';
import SectionDivider from '../components/UtilComponents/SectionDivider';
import { sanityClient } from '../utils/sanity';
import {
  getEventsQuery,
  getInitiativesQuery,
  getTeamsQuery,
  getStartupsQuery,
} from '../utils/queries';
import HomeHero from '../components/Homepage/HomeHero';
import PageNavigation from '../components/Navigation/PageNavigation';
import Startups from '../components/Homepage/Startups';

type HomePageProps = {
  flagshipEvents: any;
  flagshipInitiatives: any;
  flagshipStartups: any;
  teams: any;
};

function HomePage({
  flagshipEvents,
  flagshipInitiatives,
  flagshipStartups,
  teams,
}: HomePageProps) {
  const navItems = [
    { name: 'Home', scrollTo: 'home' },
    { name: 'Moto', scrollTo: 'moto' },
    { name: 'About', scrollTo: 'about' },
    { name: 'Vision', scrollTo: 'vision' },
    { name: 'Events', scrollTo: 'events' },
    { name: 'Startups', scrollTo: 'startups' },
    // { name: "Initiatives", scrollTo: "initiatives" },
    { name: 'Teams', scrollTo: 'teams' },
  ];

  return (
    <main className="w-full">
      <PageNavigation navItems={navItems}></PageNavigation>
      <HomeHero
        id="home"
        heading="THE ENTREPRENEURSHIP CELL"
        img="/assets/winner.png"
      />

      <TFCtemplate id="moto" />
      <About id="about" />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <VisionMission id="vision" />
      <SectionDivider img="/assets/section-images/2.JPG" />
      <Event id="events" events={flagshipEvents} />
      <SectionDivider img="/assets/section-images/1.JPG" />
      <Startups id="startups" startups={flagshipStartups} />
      {/* <Initiative id="initiatives" initiatives={flagshipInitiatives} /> */}
      <SectionDivider img="/assets/section-images/2.JPG" />
      <Teams id="teams" teams={teams} />
      <SectionDivider img="/assets/section-images/1.JPG" />
    </main>
  );
}

export const getStaticProps = async () => {
  const flagshipEvents = await sanityClient.fetch(getEventsQuery);
  const flagshipStartups = await sanityClient.fetch(getStartupsQuery);
  // const flagshipInitiatives = await sanityClient.fetch(getInitiativesQuery)
  const teams = await sanityClient.fetch(getTeamsQuery);

  return {
    props: {
      flagshipEvents,
      flagshipStartups,
      // flagshipInitiatives,
      teams,
    },
    revalidate: 7200,
  };
};

export default HomePage;
