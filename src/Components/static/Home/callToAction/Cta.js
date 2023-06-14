import React from "react";
import styles from "./Cta.module.css";
import BigSecBottom from '../../../../Assets/images/BigSecBottom.jpg'
import BigSecTop from '../../../../Assets/images/BigSecTop.jpg'
function Cta() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2>تولید شما را افزایش میدهیم</h2>
        <img src={BigSecTop} alt="crops"/>
        <p>
          کشاورزان منبع اصلی ما برای جستجوی راه حل های بهتر و نوآوری هستند.
          <br />
          ما با کشاورزان همراه می شویم و پس از احداث گلخانه مدرن و ارتقای زمین
          کشاورزی می مانیم تا شاهد رشد و موفقیت آنها باشیم.
          <br />
          ماموریت ما انقلاب پایدار صنعت کشاورزی در کشور است.
        </p>
        <button>مقالات تخصصی</button>
      </div>
      <div className={styles.container}>
        <h2>در طول مسیر همراه شما هستیم</h2>
        <img src={BigSecBottom} alt="support"/>
        <p>
          اعضای تیم ما جهت درک بهتر خواسته ها و نیاز های شما همواره در دسترس
          بوده و از راه‌های ارتباطی متعددی جهت ارائه خدمات فعالیت می‌کنند.
          <br />
          مهمترین ماموریت ما ارتقای آموزش کشاورزی و افزایش دانش فنی کشاورزان
          است.
        </p>
        <button>ارتباط با پشتیبانی</button>
      </div>
    </div>
  );
}

export default Cta;
