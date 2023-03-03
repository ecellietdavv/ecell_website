import Layout from '../components/Layout';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/admin`].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
