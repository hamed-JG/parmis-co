import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";
import { FaRegEye } from "react-icons/fa";
import times from "../../../../../Assets/images/times.svg";
function Card({ title, certificate }) {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <span onClick={showHandler}>
        مشاهده
        <FaRegEye className={styles.icon} />
      </span>

      <div className={show ? styles.show : styles.hide}>
        <img
          src={certificate}
          className={styles.certificateImg}
          alt="certificate"
        />
        <img onClick={showHandler} src={times} className={styles.close} alt="close"/>
      </div>
    </div>
  );
}

export default Card;
