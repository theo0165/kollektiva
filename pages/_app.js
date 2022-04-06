import "../styles/globals.scss";
import "../styles/form.scss";
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
