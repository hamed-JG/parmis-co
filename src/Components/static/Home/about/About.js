import React from "react";
import styles from "./About.module.css";
import { FaUnity, FaChessRook, FaComment } from "react-icons/fa";
import Social from "../../../Shared/social/Social";
function About() {
  return (
    <div className={styles.main}>
      <div className={styles.cta}>
        <h2>کشاورزی گلخانه‌ای را کاملا می‌شناسیم</h2>
        <p>
          تیم گلخانه سازان نواندیش پارمیس مجری پروژه های کشاورزی گلخانه‌ای در
          سراسر ایران و کشورهای همسایه است
        </p>
        <div className={styles.btnContainer}>
          <button>آخرین پروژه‌ها</button>
          <button>جدیدترین محصولات</button>
        </div>
        <Social address={''}/>
      </div>
      <div className={styles.advantages}>
        <div className={styles.circles}>
          <div>توسعه دهنده کشاورزی</div>
          <div>راه حل هایی در سطح جهانی</div>
          <div>قدرت گرفته از تیم باتجربه</div>
        </div>
        <div className={styles.lines}>
          <div>
            <FaUnity className={styles.icon} />
            <div>اجرای سازه‌های مستحکم و قابل جابجایی</div>
          </div>
          <div>
            <FaChessRook className={styles.icon} />
            <div>تجهیز گلخانه با دستگاه‌های مدرن</div>
          </div>
          <div>
            <FaComment className={styles.icon} />
            <div>انتخاب نوع کشت و مراقبت پس از کاشت</div>
          </div>
        </div>
        <div className={styles.box}>
          ما در اجرای سازه‌های مدرن پیشگام بوده و متخصصین کشاورزی گلخانه‌ای
          هستیم
        </div>
      </div>
    </div>
  );
}

export default About;
