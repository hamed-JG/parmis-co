import React from "react";
import styles from "./Circle.module.css";
import efficiency from "../../../../../Assets/images/efficiency.png";
import safeInvestment from "../../../../../Assets/images/safeInvestment.png";
import increase from "../../../../../Assets/images/increase.png";
function Circle() {
  return (
    <div className={styles.main}>
      <div className={styles.circle1}>
        <img src={efficiency} alt="efficiency" />
      </div>
      <div className={styles.circle2}>
        <img src={safeInvestment} alt="safeInvestment" />
      </div>
      <div className={styles.circle3}>
        <img src={increase} alt="increase" />
      </div>
    </div>
  );
}

export default Circle;
