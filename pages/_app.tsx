import type { AppProps } from "next/app";
import Head from "next/head";
// CSS
import "../styles/styles.scss";

// Screens
import LandingScreen from "../screens/landing";

// Components
import Nav from "../components/nav";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Steady State Theory // Attracts EP Out Now</title>
        <meta
          name="description"
          content="Steady State Theory // Attracts EP Out Now"
        />
        <meta
          name="keywords"
          content="Steady State Theory, Attracts EP, electronic music, chill music, sbschill, Dallas Gale, analogue synts, drum machine, australian music, indie music, diy music, music production, melbourne"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="layout__main">
        <LandingScreen />
        <Component {...pageProps} />
        <Nav />
        <section className="backgroundWrapper">
          <div className="background"></div>
        </section>
        <video autoPlay muted loop className="video">
          <source
            src={require("../public/videos/Evening_Clouds.mp4")}
            type="video/mp4"
          />
        </video>
      </main>
    </div>
  );
}

export default App;
