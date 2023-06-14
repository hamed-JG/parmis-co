import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";
import { FaChevronLeft } from "react-icons/fa";
function Card({title, coverPhoto, author, datePublished, slug}) {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src={coverPhoto.url}
          alt="cover"
        />
      </div>
      <div className={styles.bar}>
        <div className={styles.authorName}>{author.name}</div>
        <div className={styles.date}>{datePublished}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.footerContainer}>
        <Link href={`/articles/${slug}`}>
          <button className={styles.button}>
            مطالعه
            <FaChevronLeft className={styles.icon} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card