/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"
import TFCtemplate from "../components/Homepage/TFC/TFCtemplate"
import Event from "../components/Homepage/Event"
import Initiative from "../components/Homepage/Initiative"
import About from "../components/Homepage/About/About"
import VisionMission from "../components/Homepage/Vision/VisionMission"
import Teams from "../components/Homepage/Teams"
import SectionDivider from "../components/UtilComponents/SectionDivider"
import { sanityClient } from "../utils/sanity"
import { getEventsQuery, getInitiativesQuery, getTeamsQuery, getPageQuery, getTFCContentQuery, getAboutContentQuery, getVisionContentQuery, getStartupsQuery } from "../utils/queries"
import HomeHero from "../components/Homepage/HomeHero"
import PageNavigation from "../components/Navigation/PageNavigation"
import Startups from "../components/Homepage/Startups"

function HomePage({ flagshipEvents, flagshipInitiatives, flagshipStartups, teams, tfc, aboutUs, vision, heroDescription, heroHeading, heroImage, metaTags, teamsTitle, teamsDesc, sectionImages }) {

  const navItems = [
    { name: "Home", scrollTo: "home" },
    { name: "Moto", scrollTo: "moto" },
    { name: "About", scrollTo: "about" },
    { name: "Vision", scrollTo: "vision" },
    { name: "Events", scrollTo: "events" },
    { name: "Startups", scrollTo: "startups" },
    // { name: "Initiatives", scrollTo: "initiatives" },
    { name: "Teams", scrollTo: "teams" },
  ]

  return (
    <main className="w-full">
      <Head>
        {
          metaTags && metaTags?.map((tag, idx) => {
            const { name, content } = tag
            return <meta name={name} content={content} key={idx} />
          })
        }
      </Head>

      <PageNavigation navItems={navItems}></PageNavigation>
      <HomeHero id="home" heading={heroHeading} img={heroImage} desc={heroDescription} />
      <TFCtemplate id="moto" content={tfc} name={heroDescription} />
      <About id="about" content={aboutUs} />
      <SectionDivider img={sectionImages[0]} />
      <VisionMission id="vision" content={vision} />
      <SectionDivider img={sectionImages[1]} />
      <Event id="events" content={flagshipEvents} />
      <SectionDivider img={sectionImages[2]} />
      <Startups id="startups" content={flagshipStartups} />
      {/* <Initiative id="initiatives" content={flagshipInitiatives} /> */}
      <SectionDivider img={sectionImages[3]} />
      <Teams id="teams" teams={teams} title={teamsTitle} desc={teamsDesc} />
      <SectionDivider img={sectionImages[4]} />
    </main>
  )
}

export const getServerSideProps = async () => {
  const flagshipEvents = await sanityClient.fetch(getEventsQuery, { category: "Flagship Events" })
  const flagshipStartups = await sanityClient.fetch(getStartupsQuery, { category: "Flagship Startups" })
  // const flagshipInitiatives = await sanityClient.fetch(getInitiativesQuery, { category: "Flagship Initiatives" })
  const { title: teamsTitle, desc: teamsDesc, teams } = await sanityClient.fetch(getTeamsQuery)
  const { heroHeading, heroDescription, heroImage, metaTags, sectionImages } = await sanityClient.fetch(getPageQuery, { name: "Homepage" })
  const aboutUs = await sanityClient.fetch(getAboutContentQuery)
  const vision = await sanityClient.fetch(getVisionContentQuery)
  const tfc = await sanityClient.fetch(getTFCContentQuery)

  return {
    props: {
      flagshipEvents,
      flagshipStartups,
      // flagshipInitiatives,
      teams,
      teamsTitle,
      teamsDesc,
      tfc,
      aboutUs,
      vision,
      heroHeading,
      heroDescription,
      heroImage,
      metaTags,
      sectionImages,
    }
  }
}

export default HomePage