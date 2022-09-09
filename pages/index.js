import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import TFCtemplate from "../components/TFCtemplate"

function HomePage() {
  return (
    <div className="w-full h-screen">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="" />
        <meta name="keywords" content="ecell, E-cell, ietdavv, ecelliet, ietclubs, ietsocieties, ecelldavv, davv, ietdavv, engineering davv, ietdavv.edu.in, clubs in ietdavv, engineering, science, enterpreneurship, tech, web, html, jsx, css, nextjs, colleges in indore, colleges with ecell" />
        <link rel="shortcut icon" href="assets\images\images-event\Ecell Logo (W).png" type="image/x-icon" />
      </Head>

      <TFCtemplate />
    </div>
  )
}

export default HomePage