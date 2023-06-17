import React from "react";
import styles from "../Products.module.css";
import Fogger from "../../../Assets/images/fogger.jpg";
import { FaPhoneAlt } from "react-icons/fa";
function fogger() {
  return (
    <div className={styles.main}>
      <img src={Fogger} className={styles.image} alt="" />
      <div className={styles.detailContainer}>
        <h2>مشخصات دستگاه</h2>
        <div className={styles.tableContainer}>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>تایوانی</div>
            </div>
            <div className={styles.row}>
              <h4>پمپ</h4>
              <div>تایوانی</div>
            </div>
            <div className={styles.row}>
              <h4>موتور</h4>
              <div>ایرانی</div>
            </div>
            <div className={styles.row}>
              <h4>الکتروپمپ</h4>
              <div>تک فاز - سه فاز</div>
            </div>
            <div className={styles.row}>
              <h4>قطر نازل</h4>
              <div>2 الی 8 میکرون</div>
            </div>
            <div className={styles.row}>
              <h4>جنس شیلنگ</h4>
              <div>پلی آمید</div>
            </div>
            <div className={styles.row}>
              <h4>جنش نازل</h4>
              <div>استیل - سرامیک - برنج</div>
            </div>
            <div className={styles.row}>
              <h4>مدل تابلو برق</h4>
              <div>3.5 - 5.5 - 7.5 اسب</div>
            </div>
            <div className={styles.row}>
              <h4>جنس شاسی مخزن</h4>
              <div>فلزی</div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>ایتالیایی</div>
            </div>
            <div className={styles.row}>
              <h4>پمپ</h4>
              <div>ایتالیایی (برتولینی)</div>
            </div>
            <div className={styles.row}>
              <h4>موتور</h4>
              <div>ایرانی</div>
            </div>
            <div className={styles.row}>
              <h4>الکتروپمپ</h4>
              <div>تک فاز - سه فاز</div>
            </div>
            <div className={styles.row}>
              <h4>قطر نازل</h4>
              <div>2 الی 8 میکرون</div>
            </div>
            <div className={styles.row}>
              <h4>جنس شیلنگ</h4>
              <div>پلی آمید</div>
            </div>
            <div className={styles.row}>
              <h4>جنش نازل</h4>
              <div>استیل - سرامیک - برنج</div>
            </div>
            <div className={styles.row}>
              <h4>مدل تابلو برق</h4>
              <div>3.5 - 5.5 - 7.5 اسب</div>
            </div>
            <div className={styles.row}>
              <h4>جنس شاسی مخزن</h4>
              <div>فلزی</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>اهمیت مه‌پاش برای گلخانه</h2>
        <div>
          فوگر (Fogger) یکی از ابزارهای مهم در گلخانه‌ها است و نقش مهمی در
          مدیریت محیط رشد گیاهان دارد. فوگرها برای ایجاد مه و تهویه مناسب در
          گلخانه‌ها استفاده می‌شوند. در ادامه به برخی از اهمیت‌های فوگر در
          گلخانه می‌پردازم: <br />
          رطوبت محیط: فوگرها برای ایجاد رطوبت لازم در محیط گلخانه استفاده
          می‌شوند. این رطوبت می‌تواند موجب افزایش رطوبت هوا و کاهش تبخیر گیاهان
          شود. این امر برای گیاهان حساسیت دارای مزیت است، زیرا رطوبت محیط مطلوب،
          خشکی ریشه‌ها را کاهش داده و به جذب آب و مواد مغذی بیشتر کمک می‌کند.
          <br /> خنک کنندگی: با استفاده از فوگرها می‌توان دمای هوا را در گلخانه
          کاهش داد. ذرات آبی که از فوگرها پخش می‌شوند، به طور مستقیم با هوا
          تعامل می‌کنند و بر روی سطح برگ‌ها تبخیر می‌شوند. این تبخیر باعث خنک
          شدن هوا و کاهش دما می‌شود که برای گیاهانی که در دماهای بالا مشکل
          دارند، بسیار مفید است.
          <br /> تهویه هوا: فوگرها به عنوان یک ابزار تهویه هوا در گلخانه عمل
          می‌کنند. با تهویه مناسب، هوا در گلخانه تمیز و تازه می‌شود و از تجمع
          گازهای ضررآور مانند دی‌اکسید کربن جلوگیری می‌کند. همچنین، با تهویه
          هوا، تراکم بیماری‌ها و آفات نیز کاهش می‌یابد.
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

export default fogger;
