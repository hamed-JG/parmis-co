//Styles & icons
import styles from "./Icons.module.css";
import calendar from "../../../../Assets/images/icons-calendar.png";
import done from "../../../../Assets/images/icons-ok.png";
import profile from "../../../../Assets/images/icons-profiles.png";
import solutions from "../../../../Assets/images/icons-solution.png";
import food from "../../../../Assets/images/icons-food.png";
import office from "../../../../Assets/images/icons-office.png";
import guarantee from "../../../../Assets/images/icons-guarantee.png";
import hours from "../../../../Assets/images/icons-hours.png";

function Icons() {
  return (
    <section className={styles.section}>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={calendar} className={styles.icon} alt="" />
        </div>
        <h4>30 سال</h4>
        <h4>تجربه کشاورزی</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={done} className={styles.icon} alt="" />
        </div>
        <h4>بیش از 100</h4>
        <h4>پروژه موفق</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={profile} className={styles.icon} alt="" />
        </div>
        <h4>بیش از 200</h4>
        <h4>ایجاد شغل</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={solutions} className={styles.icon} alt="" />
        </div>
        <h4>بی نهایت</h4>
        <h4>راهکارهای به‌روز</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={food} className={styles.icon} alt="" />
        </div>
        <h4> 4 مجموعه</h4>
        <h4>گلخانه فعال</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={office} className={styles.icon} alt="" />
        </div>
        <h4>2 شعبه</h4>
        <h4>دفاتر فعال</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={guarantee} className={styles.icon} alt="" />
        </div>
        <h4>گارانتی</h4>
        <h4>تضمین بهترین کیفیت</h4>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.iconCircle}>
          <img src={hours} className={styles.icon} alt="" />
        </div>
        <h4>سرعت در</h4>
        <h4>خدمات پس از فروش</h4>
      </div>
    </section>
  );
}

export default Icons;
