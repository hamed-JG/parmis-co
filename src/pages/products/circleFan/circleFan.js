import React from "react";
import styles from "../Products.module.css";
import circle from "../../../Assets/images/circle.png";
import { FaPhoneAlt } from "react-icons/fa";
function circleFan() {
  return (
    <div className={styles.main}>
      <img src={circle} className={styles.image} alt=""/>
      <div className={styles.detailContainer}>
        <h2>مشخصات دستگاه</h2>
        <div className={styles.tableContainer}>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>40 - 50 - 60</div>
            </div>
            <div className={styles.row}>
              <h4>جنس بدنه</h4>
              <div>استیل گالوانیزه</div>
            </div>
            <div className={styles.row}>
              <h4>جنس موتور</h4>
              <div>ایرانی - چینی</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد پره‌ها</h4>
              <div>5 الی 7 </div>
            </div>
            <div className={styles.row}>
              <h4>جنس پره‌ها</h4>
              <div>فلزی</div>
            </div>
            <div className={styles.row}>
              <h4>موارد کاربرد</h4>
              <div>گلخانه - مرغداری</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>اهمیت فن سیرکوله برای گلخانه</h2>
        <div>
          سیستم سیرکولاسیون هوا یا سیرکولاتور فن در گلخانه‌ها اهمیت بسیاری دارد.
          این سیستم از فن‌ها استفاده می‌کند تا هوا را در داخل گلخانه به طور
          مداوم حرکت دهد و به تسهیل تبادل گازها و رطوبت بین گیاهان و محیط کمک
          کند. در زمانی که هوا در گلخانه ثابت بماند و به صورت متمرکز در محیط
          تمایل به تجمع داشته باشد، می‌تواند مشکلات جدی را ایجاد کند. برخی از
          این مشکلات عبارتند از:
          <br /> تجمع گازهای ضایعاتی: گیاهان در هنگام تنفس، گازهایی مانند
          دی‌اکسید کربن را تولید می‌کنند که در صورت تجمع در محیط، می‌تواند به
          عملکرد گیاهان ضربه بزند و رشد آنها را کاهش دهد.
          <br />
          نامتوازنی حرارتی: در صورتی که هوا در گلخانه در نقاط مختلف یکنواخت حرکت
          نکند، دمای محیط نامتوازن خواهد شد. این مسئله می‌تواند باعث کاهش رشد و
          توسعه گیاهان شود و با افزایش ریسک بیماری‌ها همراه باشد.
          <br /> رطوبت نامتوازن: سیرکولاسیون هوا در گلخانه می‌تواند به توزیع
          مناسب رطوبت در محیط کمک کند. رطوبت نامتوازن می‌تواند به خشک شدن یا
          رطوبت زیاد خاک، تشکیل بیماری‌ها و رشد قارچ‌ها منجر شود. با استفاده از
          سیرکولاتور فن در گلخانه، هوای گلخانه به طور یکنواخت حرکت می‌یابد و
          همچنین تبادل گازها،حرارت و رطوبت بهبود می‌یابد.
        </div>
      </div>
      <div className={styles.cta}>
        <h2>جهت دریافت مشاوره خرید دستگاه و تجهیزات گلخانه تماس بگیرید</h2>
        <a href="tel:+989121443811">
          <button>
            <div>مهندس باغبان</div>
            <FaPhoneAlt className={styles.icon} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default circleFan;
