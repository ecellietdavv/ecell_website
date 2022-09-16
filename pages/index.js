/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"
import Drawer from "../components/Drawer"
import TFCtemplate from "../components/TFCtemplate"
import About from "../components/About"
import AboutCarousel from "../components/AboutCarousel"
// import Carousel from "../components/Carousel"
function HomePage() {
  return (
    <div className="w-full">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="" />
        <meta name="keywords" content="ecell, E-cell, ietdavv, ecelliet, ietclubs, ietsocieties, ecelldavv, davv, ietdavv, engineering davv, ietdavv.edu.in, clubs in ietdavv, engineering, science, enterpreneurship, tech, web, html, jsx, css, nextjs, colleges in indore, colleges with ecell" />
        <link rel="shortcut icon" href="assets\images\images-event\Ecell Logo (W).png" type="image/x-icon" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
      </Head>
      <Drawer />
      <TFCtemplate />
      <About/>
      <AboutCarousel/>
    </div>
  )
}

export default HomePage