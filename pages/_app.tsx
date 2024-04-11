import Layout from '../components/Layout';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import ReactGA from "react-ga4";

ReactGA.initialize("G-R7MWFNR1D1");

// ReactGA.send({
//   hitType: "pageview",
//   page: window.location.pathname, // change this
// })


function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/admin`].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return (
    <StoreProvider>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.ecellietdavv.in/',
          siteName: 'E-CELL IET DAVV',
        }}
        defaultTitle="Home | E-CELL IET DAVV"
        titleTemplate="%s | E-CELL IET DAVV"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
