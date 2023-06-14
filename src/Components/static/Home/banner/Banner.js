import React from "react";
import styles from "./Banner.module.css";
import greenHouse from "../../../../Assets/images/Greenhouse.png";
import Circle from "./circles/Circle";
function Banner() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>
          شرکت مهندسی کشاورزی
          <br /> گلخانه سازان نواندیش پارمیس
        </h1>
        <div className={styles.cta}>
          <div>
            راهکاری <span>نوین</span> برای سرمایه گذاری <span>مطمئن،</span>{" "}
            اشتغال زا و <span>پر بازده</span>
          </div>
          <button>چه راهکاری</button>
        </div>
      </div>
      <Circle />
      <div className={styles.circle}>
        <img src={greenHouse} alt="greenhouse" />
      </div>
    </div>
  );
}

export default Banner;
