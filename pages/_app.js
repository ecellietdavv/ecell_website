import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import "../materialize/css/materialize.css";
import Navbar from "../components/Navbar";

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
        />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        /> */}
      </Head>
    </Layout>
  );
}

export default MyApp;
