import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
function Card({ name, image, title, address }) {
  return (
    <div className={styles.main}>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{title}</p>
      <Link to={address}>
        <button>مشاهده جزییات</button>
      </Link>
    </div>
  );
}

export default Card;
