import React from "react";
import styles from "./AccessBar.module.css";
import {
  FaPhoneAlt,
  FaHeadset,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaStoreAlt,
} from "react-icons/fa";
function AccessBar() {
  return (
    <div className={styles.main}>
      <h2>فرم تماس</h2>
      <div className={styles.container}>
        <div>
          <div className={styles.row}>
            <div>دفتر مرکزی</div>
            <button className={styles.icon}>
              <FaPhoneAlt />
            </button>
          </div>
          <div className={styles.row}>
            <div>مهندس باغبان</div>
            <button className={styles.icon}>
              <FaMobileAlt />
            </button>
          </div>
          <div className={styles.row}>
            <div>واحد فروش</div>
            <button className={styles.icon}>
              <FaHeadset />
            </button>
          </div>
          <div className={styles.row}>
            <div>آدرس: میدان توحید خیابان نصرت غربی</div>
            <button className={styles.icon}>
              <FaMapMarkerAlt />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div>شعبه یک</div>
          <button className={styles.icon}>
            <FaPhoneAlt />
          </button>
        </div>
        <div className={styles.row}>
          <div>فروشگاه نهاده</div>
          <button className={styles.icon}>
            <FaStoreAlt />
          </button>
        </div>
        <div className={styles.row}>
          <div>آدرس: پاکدشت فیلستان</div>
          <button className={styles.icon}>
            <FaMapMarkerAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccessBar;
