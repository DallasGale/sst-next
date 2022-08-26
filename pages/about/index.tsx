import Image from "next/image";
import ProfilePic from "/public/images/profile.jpg";

const About = () => {
  return (
    <section className="layout__content">
      {/* <h2 className="typography__section-heading">About</h2> */}
      <div className="layout__about-content">
        <p className="typography__paragraph">
          <strong> Steady State Theory</strong> is Australian musician &amp;
          producer <strong>Dallas Gale</strong>.
        </p>
        <p className="typography__paragraph">EST: 2022</p>
        {/* <Image
        src={ProfilePic}
        layout="intrinsic"
        alt="Steady State Theory - Attracts EP"
      /> */}

        {/* <section className="backgroundWrapper">
        <div className="background"></div>
      </section> */}
      </div>
    </section>
  );
};

export default About;
