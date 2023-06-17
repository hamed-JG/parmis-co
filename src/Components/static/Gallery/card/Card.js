import React from 'react'
import { Link } from "react-router-dom";
import styles from './Card.module.css'
function Card({text,image,title,address}) {
  return (
    <div className={styles.main}>
      <img src={image} alt=""/>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={address}>
        <button>مشاهده تصاویر</button>
      </Link>
    </div>
  )
}

export default Card