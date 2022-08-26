import Image from "next/image";
import EpArtwork from "/public/images/attracts-ep.jpg";
import Spotify from "/public/images/spotify.png";
import Bandcamp from "/public/images/bandcamp-long.svg";
import Apple from "/public/images/apple.png";

const Music = () => {
  return (
    <section className="layout__content layout__content--music">
      <h2 className="typography__section-heading">Releases</h2>

      <div className="layout__music-content">
        <div className="layout__artwork-wrapper">
          <a href="https://steadystatetheory-music.bandcamp.com/releases">
            <Image
              src={EpArtwork}
              layout="intrinsic"
              alt="Steady State Theory - Attracts EP"
            />
          </a>
        </div>
        <div className="layout__music-text">
          <h3 className="typography__sub-heading">ATTRACTS EP</h3>
          <p className="typography__paragraph">
            Released on 29 July, 2022 this is the first release for Steady State
            Theory. The title track features a vocal sample from Nina Simone
            speaking to the audience at the Montreux Festival in 1976.
          </p>
          <p className="typography__paragraph"></p>
          <p className="typography__paragraph">
            <ol className="typography__ordered-list">
              <li>High</li>
              <li>Attracts</li>
              <li>What Are You Trying To Do?</li>
            </ol>
          </p>
          <h3 className="typography__sub-heading">Stream / Buy</h3>
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
