import Layout from '../components/Layout';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

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
        defaultTitle="Home"
        titleTemplate="E-CELL IET DAVV"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
