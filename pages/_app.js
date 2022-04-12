import "../styles/globals.scss";
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
