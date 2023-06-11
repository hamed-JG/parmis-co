import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function HowToLinks() {
  return (
    <div className={styles.container}>
      <strong className={styles.header}>چطور بکاریم؟</strong>

      <ul>
        <Link to={"/"}>
          <li>گیاهان زینتی</li>
        </Link>

        <Link to={"/articles/oil-seeds"}>
          <li>دانه‌های روغنی</li>
        </Link>

        <Link to={"/articles/tissue-culture"}>
          <li>کشت بافت</li>
        </Link>

        <Link to={"/articles/hydroponic"}>
          <li>کشت هیدروپونیک</li>
        </Link>
      </ul>
    </div>
  );
}

export default HowToLinks;
