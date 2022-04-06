import "../styles/globals.scss";
import "../styles/form.scss";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
