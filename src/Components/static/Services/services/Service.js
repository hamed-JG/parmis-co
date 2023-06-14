import React from "react";
import styles from "./Service.module.css";
import buildImg from "../../../../Assets/images/build.jpg";
import equipImg from '../../../../Assets/images/equip.jpg'
import adviceImg from '../../../../Assets/images/advice.jpeg'
import careImg from '../../../../Assets/images/care.jpeg'
function Service() {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>خدمات و فعالیت‌ها</h2>
      <div className={styles.badge}>
        <div>احداث گلخانه</div>
        <div>تجهیز سازه</div>
        <div>تعیین کشت</div>
        <div>مراقبت کاشت</div>
      </div>
      <div className={styles.container}>
        <img src={buildImg} alt="" />
        <div className={styles.content}>
          <h2>احداث گلخانه</h2>
          <h3>قدم اول برای شروع کشاورزی گلخانه‌ای</h3>
          <p>
            سازه‌ای که فضای مناسبی داشته باشد و همینطور از استحکام لازم برخوردار
            باشد برای این کار مناسب است. طراحی کمان گاتیک به دلیل توانایی مقاومت
            در برابر بادهای شدید و بارش برف سنگین مورد توجه قرار گرفته است. شکل
            نیمه اشکی سقف از خساراتی که انباشته شدن بارندگی ممکن است ایجاد کند
            جلوگیری می‌کند. مزایای دیگری همچون تهویه مناسب تر، طراحی انعطاف
            پذیر، فضای بیشتر و دوام بالاتر نیز از دیگر مشخصات این نوع سازه ها
            است.
          </p>
          <div className={styles.btnContainer}>
            <button>مقالات مرتبط</button>
            <button>سفارش</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={equipImg} alt="" />
        <div className={styles.content}>
          <h2>تجهیز گلخانه</h2>
          <h3>گلخانه کامل دارای تجهیزات مناسب است</h3>
          <p>
            ما اغلب بر اهمیت تهویه مناسب در گلخانه‌های مدرن تاکید می کنیم. به
            این دلیل است که تهویه جزء اصلی یک باغ گلخانه‌ای سالم و شاد است. بدون
            تهویه، گلخانه و گیاهان شما در معرض انبوهی از مشکلات قرار خواهند
            گرفت. تهویه گلخانه به جلوگیری از بیماری قارچی کمک می کند و هوای تازه
            را برای گیاهان فراهم می کند که برای تنفس، فتوسنتز و رشد قوی نیاز
            دارند. همچنین به تنظیم سطح دما و رطوبت کمک می‌کند.
          </p>
          <div className={styles.btnContainer}>
            <button>مقالات مرتبط</button>
            <button>سفارش</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={adviceImg} alt="" />
        <div className={styles.content}>
          <h2>مشاوره تعیین کشت</h2>
          <h3>کدام محصول سود بیشتری دارد ؟</h3>
          <p>
            اگر قرار است طبق برنامه پیش بروید و از اتلاف وقت جلوگیری کنید باید
            نوع کشت را با توجه به شرایط مختلف انتخاب کنید. اینکه خاک شما چقدر
            کیفیت دارد خیلی مهم است. باید حتما خاک زمین مورد نظر را به خوبی
            بررسی کنید. اگر قرار است طبق برنامه پیش بروید و از اتلاف وقت جلوگیری
            کنید بهتر است در طول مرحله احداث تصمیم خود را برای انتخاب نوع کشت
            قطعی کنید. بهتر است در زمان تصمیم گیری از تمام جوانب آگاه باشید.
          </p>
          <div className={styles.btnContainer}>
            <button>مقالات مرتبط</button>
            <button>سفارش</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={careImg} alt="" />
        <div className={styles.content}>
          <h2>مراقبت پس از کاشت</h2>
          <h3>با مخاطرات بعد از کشت چه کنیم ؟</h3>
          <p>
            نیازی به تعریف نیست که مهمترین اصل پیشرفت در کشاورزی نحوه کاشت، داشت
            و برداشت محصول است. مراقبت از خاک و محصول نیازمند شناخت دقیق از روش
            های پیشگیری و درمان است. تجربه‌ای نزدیک به سه دهه، آماده‌ایم تا
            مشکلاتی که ممکن است برای محصولات ایجاد شود را خنثی کنیم.
          </p>
          <div className={styles.btnContainer}>
            <button>مقالات مرتبط</button>
            <button>سفارش</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
