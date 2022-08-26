import Link from "next/link";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__page-links">
        <li className="nav__page-link">
          <Link href="/about">About</Link>
        </li>
        <li className="nav__page-link">
          <Link href="/music">Releases</Link>
        </li>
        {/* <li className="nav__page-link">
          <Link href="/contact">Contact</Link>
        </li> */}
        <li className="nav__page-link">
          <a href="https://www.instagram.com/steadystatetheory_official/">
            Instagram
          </a>
        </li>
        <li className="nav__page-link music-service">
          <a href="https://steadystatetheory-music.bandcamp.com/releases">
            Bandcamp
          </a>
        </li>
        <li className="nav__page-link music-service">
          <a href="https://music.apple.com/us/artist/steady-state-theory/1638189602">
            Apple Music
          </a>
        </li>
        <li className="nav__page-link music-service">
          <a href="https://open.spotify.com/artist/6Zn2kWEcMz4Z6XEDgbCakJ">
            Spotify
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
