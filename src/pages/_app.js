import withReduxSaga from "next-redux-saga";
import Header from "../components/Header";
import Footer from "../components/Footer";
import wrapper from "../redux/store";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

function App({ Component, pageProps }) {
  return (
    <div className={"app"}>
      <Header />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
