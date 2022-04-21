import "../styles/globals.scss";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Header />
        {page}
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
