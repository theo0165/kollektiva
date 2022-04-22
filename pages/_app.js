import "../styles/globals.scss";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Head>
          <title>Kollektiva</title>
        </Head>
        <Header />
        {page}
        <Footer />
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
