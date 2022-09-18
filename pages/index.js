/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"
import Drawer from "../components/Drawer"
import TFCtemplate from "../components/TFCtemplate"
import Event from "../components/Event"
import Initiative from "../components/Initiative"
import About from "../components/About"
import AboutCarousel from "../components/AboutCarousel"
// import Carousel from "../components/Carousel"
import VisionMission from "../components/VisionMission"
import Teams from "../components/Teams"
import SectionDivider from "../components/SectionDivider"

function HomePage() {
  return (
    <div className="w-full">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="" />
        <meta name="keywords" content="ecell, E-cell, ietdavv, ecelliet, ietclubs, ietsocieties, ecelldavv, davv, ietdavv, engineering davv, ietdavv.edu.in, clubs in ietdavv, engineering, science, enterpreneurship, tech, web, html, jsx, css, nextjs, colleges in indore, colleges with ecell" />
      </Head>

      <TFCtemplate />
      <SectionDivider name="Vission Mission" img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
      <VisionMission />
      <Drawer />
      <About />
      <AboutCarousel />
      <Event />
      <Initiative />
      <Teams />
    </div>
  )
}

export default HomePage