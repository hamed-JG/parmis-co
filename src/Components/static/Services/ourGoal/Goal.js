import React from "react";
import styles from "./Goal.module.css";
function Goal() {
  return (
    <div className={styles.main}>
      <div>
        <h2>اهداف و چشم انداز</h2>
        <p>
          نواندیش پارمیس در موقعیتی منحصر به فرد قرار دارد و رسیدگی به افق‌های
          پیش رو هدف ماست :
        </p>
        <div className={styles.goal}>
          <div>افزایش منابع غذایی</div>
          <div>گسترش کشاورزی گلخانه‌ای</div>
        </div>
        <div className={styles.service}>
          ما صاحبان برند و تولیدکنندگان در صنایع کشاورزی کشور را قادر می‌سازیم
          تا عملیات اجرایی خود را بهینه کنند و هدر رفت منابع و محصولات را کاهش
          دهند
        </div>
        <div className={styles.service}>
          ما به مشتریان خود امکاناتی می دهیم تا با استفاده از گلخانه‌های مدرن
          فعالیت خود را ایمن تر، سالم تر و ثروتمند تر کنند
        </div>
        <div className={styles.service}>
          ما توسعه دهنده راه‌حل‌های پر بازده برای حل مهم‌ترین چالش‌های بخش
          کشاورزی گلخانه‌ای در ایران هستیم
        </div>
        <div className={styles.service}>
          فناوری‌های متمایز ما توسط بهترین استعدادهای این صنعت پشتیبانی می‌شود
        </div>
      </div>
    </div>
  );
}

export default Goal;
