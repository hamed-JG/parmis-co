import React from "react";
import styles from "../Products.module.css";
import exhaust from '../../../Assets/images/exhaust.png'
import { FaPhoneAlt } from "react-icons/fa";
function exhaustFan() {
  return (
    <div className={styles.main}>
      <img src={exhaust} className={styles.image} alt=""/>
      <div className={styles.detailContainer}>
        <h2>مشخصات دستگاه</h2>
        <div className={styles.tableContainer}>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>140*140 کلاچ دار</div>
            </div>
            <div className={styles.row}>
              <h4>دبی هوای خروجی</h4>
              <div>m3 44000</div>
            </div>
            <div className={styles.row}>
              <h4>جنس بدنه</h4>
              <div>گالوانیزه</div>
            </div>
            <div className={styles.row}>
              <h4>جنس پره‌ها</h4>
              <div>استیل</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد پره‌ها</h4>
              <div>6 عدد</div>
            </div>
            <div className={styles.row}>
              <h4>جنس موتور</h4>
              <div>ایرانی - چینی</div>
            </div>
            <div className={styles.row}>
              <h4>دور پروانه فن</h4>
              <div>1400 دور در دقیقه</div>
            </div>
            <div className={styles.row}>
              <h4>توضیحات</h4>
              <div>مدل وزنه‌ای نیز موجود است</div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>100*100 کلاچ دار</div>
            </div>
            <div className={styles.row}>
              <h4>دبی هوای خروجی</h4>
              <div>m3 25000</div>
            </div>
            <div className={styles.row}>
              <h4>جنس بدنه</h4>
              <div>گالوانیزه</div>
            </div>
            <div className={styles.row}>
              <h4>جنس پره‌ها</h4>
              <div>استیل</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد پره‌ها</h4>
              <div>5 عدد</div>
            </div>
            <div className={styles.row}>
              <h4>جنس موتور</h4>
              <div>ایرانی - چینی</div>
            </div>
            <div className={styles.row}>
              <h4>دور پروانه فن</h4>
              <div>1400 دور در دقیقه</div>
            </div>
            <div className={styles.row}>
              <h4>توضیحات</h4>
              <div>مدل وزنه‌ای نیز موجود است</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>اهمیت فن اگزاست برای گلخانه</h2>
        <div>
          سیستم اگزاست فن (Exhaust Fan) یکی از اجزای حیاتی در گلخانه‌ها است و
          اهمیت بسیاری برای محیط کشت دارد. در ادامه، برخی از اهمیت‌های اگزاست فن
          در گلخانه را بررسی خواهیم کرد:
          <br /> تهویه هوا: یکی از وظایف اصلی اگزاست فن، تهویه هوای گلخانه است.
          در گلخانه‌ها، به دلیل نور و حرارت خورشید، دمای بالا و رطوبت افزایش
          می‌یابد. اگزاست فن می‌تواند هوای گرم و مرطوب را از گلخانه خارج کرده و
          هوای تازه را وارد کند. این کار باعث بهبود شرایط رشد گیاهان، کاهش
          بیماری‌ها و افزایش عملکرد در محصولات می‌شود.
          <br />
          کاهش رطوبت: رطوبت بالا در گلخانه می‌تواند به رشد قارچ‌ها، بیماری‌ها و
          مشکلات دیگر در گیاهان منجر شود. با استفاده از اگزاست فن، رطوبت را کاهش
          داده و برای گیاهان محیطی خشک‌تر و بهتر ایجاد می‌شود.
          <br /> کنترل دما: گیاهان برای رشد و تولید محصول نیاز به دمای مناسبی
          دارند. اگزاست فن می‌تواند با تخلیه هوای گرم و ورود هوای خنک به گلخانه،
          دمای مناسب را حفظ کرده و از افزایش ناخواسته دما جلوگیری کند.
          <br /> جلوگیری از تجمع گازهای ضایعاتی: گیاهان در فعالیت تنفسی خود دی
          اکسید کربن تولید می‌کنند که در صورت تجمع زیاد آن، به رشد گیاهان ضربه
          می‌زند. اگزاست فن می‌تواند گازهای ضایعاتی را از گلخانه خارج کند و سطح
          دی اکسید کربن را کاهش دهد.
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

export default exhaustFan;
