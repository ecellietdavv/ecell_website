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
import { getEventsQuery, getInitiativesQuery, getTeamsQuery, getPageQuery, getTFCContentQuery, getAboutContentQuery, getVisionContentQuery } from "../utils/queries"
import HomeHero from "../components/Homepage/HomeHero"
import PageNavigation from "../components/Navigation/PageNavigation"
import Idea from "../components/Idea"

function HomePage({ flagshipEvents, flagshipInitiatives, teams, tfc, aboutUs, vision, heroDescription, heroHeading, heroImage, metaTags, teamsTitle, teamsDesc, sectionImages }) {

  const navItems = [
    { name: "Home", scrollTo: "home" },
    { name: "Moto", scrollTo: "moto" },
    { name: "Vision", scrollTo: "vision" },
    { name: "About", scrollTo: "about" },
    { name: "Events", scrollTo: "events" },
    { name: "Initiatives", scrollTo: "initiatives" },
    { name: "Teams", scrollTo: "teams" },
  ]

  return (
    <main className="w-full">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="" />
        <meta name="keywords" content="ecell, E-cell, ietdavv, ecelliet, ietclubs, ietsocieties, ecelldavv, davv, ietdavv, engineering davv, ietdavv.edu.in, clubs in ietdavv, engineering, science, enterpreneurship, tech, web, html, jsx, css, nextjs, colleges in indore, colleges with ecell" />
      </Head>

      <PageNavigation navItems={navItems}></PageNavigation>

<<<<<<< HEAD
      <HomeHero id="home" heading={heroHeading} img={heroImage} />
      <Idea/>
      <TFCtemplate id="moto" content={tfc} name={heroDescription} />
=======
      <HomeHero id="home" heading={heroHeading} img={heroImage} desc={heroDescription} />
      <TFCtemplate id="moto" content={tfc} />
>>>>>>> 648e01ed7c7847c7d57daa930892508cd680a227
      <VisionMission id="vision" content={vision} />
      <SectionDivider img={sectionImages[0]} />
      <About id="about" content={aboutUs} />
      <SectionDivider img={sectionImages[1]} />
      <Event id="events" content={flagshipEvents} />
      <SectionDivider img={sectionImages[2]} />
      <Initiative id="initiatives" content={flagshipInitiatives} />
      <SectionDivider img={sectionImages[3]} />
      <Teams id="teams" teams={teams} title={teamsTitle} desc={teamsDesc} />
      <SectionDivider img={sectionImages[4]} />
    </main>
  )
}

export const getServerSideProps = async () => {
  const flagshipEvents = await sanityClient.fetch(getEventsQuery, { category: "Flagship Events" })
  const flagshipInitiatives = await sanityClient.fetch(getInitiativesQuery, { category: "Flagship Initiatives" })
  const { title: teamsTitle, desc: teamsDesc, teams } = await sanityClient.fetch(getTeamsQuery)
  const { heroHeading, heroDescription, heroImage, metaTags, sectionImages } = await sanityClient.fetch(getPageQuery, { name: "Homepage" })
  const aboutUs = await sanityClient.fetch(getAboutContentQuery)
  const vision = await sanityClient.fetch(getVisionContentQuery)
  const tfc = await sanityClient.fetch(getTFCContentQuery)

  return {
    props: {
      flagshipEvents,
      flagshipInitiatives,
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