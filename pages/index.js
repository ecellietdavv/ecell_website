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
import { getEventsQuery, getInitiativesQuery, getTeamsQuery } from "../utils/queries"

function HomePage({ events, initiatives, teams }) {
  return (
    <div className="w-full">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="" />
        <meta name="keywords" content="ecell, E-cell, ietdavv, ecelliet, ietclubs, ietsocieties, ecelldavv, davv, ietdavv, engineering davv, ietdavv.edu.in, clubs in ietdavv, engineering, science, enterpreneurship, tech, web, html, jsx, css, nextjs, colleges in indore, colleges with ecell" />
      </Head>

      <TFCtemplate />
      <VisionMission />
      <SectionDivider name="" img="img1" />
      <Drawer />
      <About />
      <SectionDivider name="" img="img2" />
      <Event events={events} />
      <SectionDivider name="Our Initiatives" img="img1" />
      <Initiative initiatives={initiatives} />
      <SectionDivider name="Our Team" img="img2" />
      <Teams teams={teams} />
      <SectionDivider name="" img="img3" />
    </div>
  )
}

export const getServerSideProps = async () => {
  const events = await sanityClient.fetch(getEventsQuery)
  const initiatives = await sanityClient.fetch(getInitiativesQuery)
  const teams = await sanityClient.fetch(getTeamsQuery)
  return {
    props: {
      events,
      initiatives,
      teams
    }
  }
}

export default HomePage