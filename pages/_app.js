import "../styles/globals.scss";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Header />
        {page}
        <Footer />
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
