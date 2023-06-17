import React from "react";
import styles from "../Products.module.css";
import Heat from "../../../Assets/images/heater.png";
import { FaPhoneAlt } from "react-icons/fa";
function heater() {
  return (
    <div className={styles.main}>
      <img src={Heat} className={styles.image} alt=''/>
      <div className={styles.detailContainer}>
        <h2>مشخصات دستگاه</h2>
        <div className={styles.tableContainer}>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>220K</div>
            </div>
            <div className={styles.row}>
              <h4>جنس بدنه</h4>
              <div>گالوانیزه</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد فن</h4>
              <div>2 عدد</div>
            </div>
            <div className={styles.row}>
              <h4>جنس مخزن</h4>
              <div>استیل 304 (نگیر)</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد اگزوز</h4>
              <div>4 عدد</div>
            </div>
            <div className={styles.row}>
              <h4>رنگ بدنه</h4>
              <div>پودری الکترواستاتیک</div>
            </div>
            <div className={styles.row}>
              <h4>تابلو برق</h4>
              <div>دارد</div>
            </div>
            <div className={styles.row}>
              <h4>متعلقات</h4>
              <div>4 عدد زانویی دودکش</div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.row}>
              <h4>مدل</h4>
              <div>150K</div>
            </div>
            <div className={styles.row}>
              <h4>جنس بدنه</h4>
              <div>گالوانیزه</div>
            </div>
            <div className={styles.row}>
              <h4>جنس مخزن</h4>
              <div>استیل 304 (نگیر)</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد فن</h4>
              <div>1 عدد</div>
            </div>
            <div className={styles.row}>
              <h4>تعداد اگزوز</h4>
              <div>2 عدد</div>
            </div>
            <div className={styles.row}>
              <h4>رنگ بدنه</h4>
              <div>پودری الکترواستاتیک</div>
            </div>
            <div className={styles.row}>
              <h4>تابلو برق</h4>
              <div>دارد</div>
            </div>
            <div className={styles.row}>
              <h4>متعلقات</h4>
              <div>2 عدد زانویی دودکش</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>اهمیت بخاری برای گلخانه</h2>
        <div>
          بخاری‌ها یکی از ابزارهای مهم در صنعت گلخانه‌داری هستند و نقش بسیار
          مهمی در حفظ و بهینه‌سازی شرایط رشد گیاهان دارند. در زیر به برخی از
          اهمیت‌های استفاده از بخاری در گلخانه می‌پردازیم:
          <br /> حفظ دمای مناسب: بخاری‌ها به منظور حفظ دمای مطلوب در داخل گلخانه
          استفاده می‌شوند. در فصول سرد سال، بخاری‌ها امکان ایجاد و حفظ دمای
          مناسب را برای رشد گیاهان فراهم می‌کنند. این امر بسیار مهم است زیرا
          گیاهان در دماهای پایین نمی‌توانند به طور بهینه رشد کنند و ممکن است
          تضرر ببینند.
          <br /> کنترل رطوبت: بخاری‌ها به عنوان یک روش برای ایجاد رطوبت در
          گلخانه نیز استفاده می‌شوند. در برخی از مناطق خشک و کم آبی، ایجاد رطوبت
          مناسب برای گیاهان مشکل است. با استفاده از بخاری‌ها می‌توان رطوبت مورد
          نیاز را در گلخانه تنظیم کرده و شرایط رشد بهتری را برای گیاهان فراهم
          کرد. <br />
          ایجاد محیط مطلوب برای بذر و نهال‌ها: برای رشد اولیه بذر و نهال‌ها،
          شرایط خاصی مانند دما و رطوبت مطلوب است. بخاری‌ها در این مرحله
          می‌توانند برای ایجاد این شرایط مناسب و کنترل آن‌ها مورد استفاده قرار
          بگیرند.
          <br /> مبارزه با آفات و بیماری‌ها: بخاری‌ها می‌توانند در مبارزه با
          آفات و بیماری‌های گیاهان نقش مؤثری ایفا کنند.
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

export default heater;
