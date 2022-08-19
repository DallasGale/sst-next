import React from "react";
import styles from "./landing.module.scss";

const LandingScreen = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.fulljustify}>
        <span className={styles.fulljustify}>S T E A D Y</span>
        <br />
        <span className={styles.fulljustify}>S T A T E</span>
        <br />
        <span className={styles.fulljustify}>T H E O R Y</span>
      </h1>
      <br />
    </div>
  );
};

export default LandingScreen;
