import Link from "next/link";
const LandingScreen = () => {
  return (
    <Link href="/" className="screens__landing-link">
      <div className="screens__landing-title">
        <h1 className="screens__landing-fulljustify">
          <span className="screens__landing-fulljustify">S T E A D Y</span>
          <br />
          <span className="screens__landing-fulljustify">S T A T E</span>
          <br />
          <span className="screens__landing-fulljustify">T H E O R Y</span>
        </h1>
        <br />
      </div>
    </Link>
  );
};

export default LandingScreen;
