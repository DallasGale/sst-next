import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import typography from "../styles/Typography.module.css";
import layout from "../styles/Layout.module.css";
import ui from "../styles/Ui.module.css";
// images
import epImage from "../public/images/attractsme-ep.jpg";
import spotify from "../public/images/spotify.png";
import apple from "../public/images/apple.png";
import bandcamp from "../public/images/bandcamp-long.svg";
import video from "../public/videos/Evening_Clouds.mp4";

// Screens
import LandingScreen from "../screens/landing";

type CtaProps = "press" | "listen";

const Home: NextPage = () => {
  const [pressVisible, setPressVisible] = React.useState(false);
  const [listenVisible, setListenVisible] = React.useState(false);

  function handleCtaClick(id: CtaProps) {
    if (id === "press") {
      setPressVisible(true);
      setListenVisible(false);
    }

    if (id === "listen") {
      setListenVisible(true);
      setPressVisible(false);
    }
  }
  return (
    <div>
      <Head>
        <title>Steady State Theory // Attracts EP Out Now</title>
        <meta
          name="description"
          content="Steady State Theory // Attracts EP Out Now"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <header className={styles.header}> */}
        <nav className={ui.nav}>
          <div className={ui.navIconSet}>
            <a
              href="https://steadystatetheory-music.bandcamp.com/releases"
              className={ui.navIconWrapper}
            >
              <Image src={bandcamp} alt="Bandcamp" className={ui.navIcon} />
            </a>
            <a
              href="https://music.apple.com/us/artist/steady-state-theory/1638189602"
              className={ui.navIconWrapper}
            >
              <Image src={apple} alt="Apple Music" className={ui.navIcon} />
            </a>

            <a
              href="https://open.spotify.com/artist/6Zn2kWEcMz4Z6XEDgbCakJ"
              className={ui.navIconWrapper}
            >
              <Image src={spotify} alt="Spotify" className={ui.navIcon} />
            </a>
          </div>
        </nav>
        {/* </header> */}

        <LandingScreen />
        <section className="contents">
          <div className={layout.cell1}>
            <div className={styles.coverArtworkWrapper}>
              <Image src={epImage} alt="Attacts E.P cover" placeholder="blur" />
            </div>
          </div>
          <div className={layout.cell2}>
            <time dateTime="2022-07-29" className="date">
              29.07.22
            </time>
            <h2 className={typography.h2}>
              <span className="bold">ATTRACTS</span> EP released
            </h2>

            <div className={ui.ctas}>
              <button
                className={ui.ctaBtn}
                id="info-cta"
                onClick={() => handleCtaClick("press")}
              >
                PRESS
              </button>
              <button
                className={ui.ctaBtn}
                id="buy-cta"
                onClick={() => handleCtaClick("listen")}
              >
                BUY / STREAM
              </button>
            </div>
            {/* {pressVisible && ( */}
            <div className="read-more">
              <p className={typography.paragraph}>
                Australian electronic music producer Dallas Gale (aka{" "}
                <em>Steady State Theory</em> ) has released his debut EP today.
              </p>
              <p className={typography.paragraph}>
                The <strong>Attracts</strong> EP ties together melancholic vocal
                sampling with an optimistic layering of electronic-based sounds.
              </p>

              <p
                className={`${typography.paragraph} ${typography.secondaryText}`}
              >
                Produced at Dallas' home studio in Melbourne, Australia and
                mastered by{" "}
                <a
                  href="https://www.worldwidemastering.org/"
                  target="_blank"
                  className={typography.paragraphLink}
                  rel="noreferrer"
                >
                  George Konings
                </a>{" "}
                in the Netherlands this EP is only the beginning of more music
                to come.
              </p>
            </div>
            {/* )} */}

            {listenVisible && (
              <div className="buy-container" id="buy-container">
                <div className={ui.ctas}>
                  <div
                    className={ui.listenBuyContainer}
                    style={{ visibility: "visible", opacity: "1" }}
                  >
                    <a
                      href="https://steadystatetheory-music.bandcamp.com/releases"
                      className={ui.musicLink}
                    >
                      <Image src={bandcamp} alt="Bandcamp" />
                    </a>
                    <a
                      href="https://music.apple.com/us/artist/steady-state-theory/1638189602"
                      className={ui.musicLink}
                    >
                      <Image src={apple} alt="Apple Music" />
                    </a>

                    <a
                      href="https://open.spotify.com/artist/6Zn2kWEcMz4Z6XEDgbCakJ"
                      className={ui.musicLink}
                    >
                      <Image src={spotify} alt="Spotify" />
                    </a>
                    {/* <a href="" className="music-link">
                      <img src="./images/youtube.svg" alt="YouTube Music" />
                    </a> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <video autoPlay muted loop className={ui.video}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={ui.background}></div>
        <div className={ui.background2}></div>
      </main>
    </div>
  );
};

export default Home;
