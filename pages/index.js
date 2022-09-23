/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"
import Drawer from "../components/Drawer"
import TFCtemplate from "../components/TFCtemplate"
import Event from "../components/Event"
import Initiative from "../components/Initiative"
import About from "../components/About"
// import Carousel from "../components/Carousel"
import VisionMission from "../components/VisionMission"
import Teams from "../components/Teams"
import SectionDivider from "../components/SectionDivider"
import { sanityClient } from "../utils/sanity"
import { getFlagshipEventsQuery, getFlagshipInitiativesQuery, getTeamsQuery, getHomepageMiscContentQuery, getTFCContentQuery } from "../utils/queries"
import HomeHero from "../components/HomeHero"

function HomePage({ flagshipEvents, flagshipInitiatives, teams, tfc, aboutUs, visionMission, name }) {
  const events = flagshipEvents.categoryEvents
  const initiatives = flagshipInitiatives.categoryInitiatives
  return (
    <div className="w-full">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="" />
        <meta name="keywords" content="ecell, E-cell, ietdavv, ecelliet, ietclubs, ietsocieties, ecelldavv, davv, ietdavv, engineering davv, ietdavv.edu.in, clubs in ietdavv, engineering, science, enterpreneurship, tech, web, html, jsx, css, nextjs, colleges in indore, colleges with ecell" />
      </Head>

      <Drawer />
      <HomeHero />
      <TFCtemplate content={tfc} name={name} />
      <VisionMission content={visionMission} />
      <SectionDivider name="" img="img1" />
      <About content={aboutUs} />
      <SectionDivider name="" img="img2" />
      <Event events={events} />
      <SectionDivider name="" img="img1" />
      <Initiative initiatives={initiatives} />
      <SectionDivider name="" img="img2" />
      <Teams teams={teams} />
      <SectionDivider name="" img="img3" />
    </div>
  )
}

export const getServerSideProps = async () => {
  const flagshipEvents = await sanityClient.fetch(getFlagshipEventsQuery)
  const flagshipInitiatives = await sanityClient.fetch(getFlagshipInitiativesQuery)
  const teams = await sanityClient.fetch(getTeamsQuery)
  const { aboutUs, visionMission, name } = await sanityClient.fetch(getHomepageMiscContentQuery)
  const tfc = await sanityClient.fetch(getTFCContentQuery)
  return {
    props: {
      flagshipEvents,
      flagshipInitiatives,
      teams,
      tfc,
      aboutUs,
      visionMission,
      name,
    }
  }
}

export default HomePage