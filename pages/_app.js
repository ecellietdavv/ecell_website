import Layout from "../components/Layout";
import AppState from "../context/AppState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppState>
  );
}

export default MyApp;
