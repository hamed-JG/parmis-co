import React from "react";
import Social from '../../../Shared/social/Social'
import styles from "./Form.module.css";
function Form() {
  return (
    <div className={styles.main}>
      <h2>فرم پیام</h2>
      <div className={styles.container}>
        <div className={styles.row}>
          <label>نام</label>
          <input />
        </div>
        <div className={styles.row}>
          <label>شماره تماس</label>
          <input />
        </div>
        <div className={styles.row}>
          <label>نوع درخواست</label>
          <select>
            <option>انتخاب کنید</option>
            <option>احداث گلخانه</option>
            <option>تجهیز گلخانه</option>
            <option>مشاوره کشت</option>
            <option>خرید نهاده</option>
          </select>
        </div>
        <button className={styles.submit}>ارسال</button>
      </div>
      <div>
        <div>ارسال پیام به شبکه های اجتماعی</div>
        <Social address={''}/>
      </div>
    </div>
  );
}

export default Form;
