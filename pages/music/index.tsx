import Image from "next/image";
import EpArtwork from "/public/images/attracts-ep.jpg";
import Spotify from "/public/images/spotify.png";
import Bandcamp from "/public/images/bandcamp-long.svg";
import Apple from "/public/images/apple.png";

const Music = () => {
  return (
    <section className="layout__content layout__content--music">
      <div className="layout__music-content">
        <div className="layout__artwork-wrapper">
          <a href="https://steadystatetheory-music.bandcamp.com/releases">
            <Image
              src={EpArtwork}
              layout="intrinsic"
              alt="Steady State Theory - Attracts EP"
              placeholder="blur"
            />
          </a>
        </div>
        <div className="layout__music-text">
          <h2 className="typography__section-heading">
            <em>Attracts</em> EP
          </h2>
          {/* <h3 className="typography__sub-heading">ATTRACTS EP</h3> */}
          <p className="typography__paragraph">
            Released on 29 July, 2022 this is the debut EP for Steady State
            Theory. Features analogue syntesizers, keys, drum sampling and also
            various vocal samples. The title track ATTRACTS has used some spoken
            word by Nina Simone as she talks to the audience at the Montreux
            Festival in 1976.
          </p>
          <p className="typography__paragraph"></p>
          <p className="typography__paragraph">
            <ol className="typography__ordered-list">
              <li>
                <a
                  className="typography__link"
                  href="https://steadystatetheory-music.bandcamp.com/track/high-2"
                >
                  High
                </a>
              </li>
              <li>
                <a
                  className="typography__link"
                  href="https://steadystatetheory-music.bandcamp.com/track/attracts"
                >
                  Attracts
                </a>
              </li>
              <li>
                <a
                  className="typography__link"
                  href="https://steadystatetheory-music.bandcamp.com/track/what-are-you-trying-to-do"
                >
                  What Are You Trying To Do?
                </a>
              </li>
            </ol>
          </p>
          <ul className="layout__stream-buy-list">
            <li className="layout__stream-buy-list--item">
              <a href="https://steadystatetheory-music.bandcamp.com/releases">
                <Image src={Bandcamp} alt="Bandcamp" layout="intrinsic" />
              </a>
            </li>
            <li className="layout__stream-buy-list--item">
              <a href="https://music.apple.com/us/artist/steady-state-theory/1638189602">
                <Image src={Apple} alt="Apple" layout="intrinsic" />
              </a>
            </li>
            <li className="layout__stream-buy-list--item">
              <a href="https://open.spotify.com/artist/6Zn2kWEcMz4Z6XEDgbCakJ">
                <Image src={Spotify} alt="Spotify" layout="intrinsic" />
              </a>
            </li>
          </ul>
          <p className="typography__small">
            CREDITS: Written & produced by Dallas Gale. Mastered by George
            Konings @ Worldwide Mastering/Sound Vision Studio, Netherlands
          </p>
        </div>
      </div>
    </section>
  );
};

export default Music;
