import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import "../materialize/css/materialize.css";
import Navbar from "../components/Navbar";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Navbar/> */}
      <Component {...pageProps} />
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://cdn.lineicons.com/3.0/lineicons.css"
          rel="stylesheet"
        /> */}
      </Head>
      <Script src="../path/to/flowbite/dist/flowbite.js" />
    </Layout>
  );
}

export default MyApp;
