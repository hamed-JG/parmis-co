import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function NavLinks() {
  return (
    <div className={styles.container}>
      <strong className={styles.header}>دسترسی</strong>
      <ul>
        <Link to={"/services"}>
          <li>درباره ما</li>
        </Link>

        <Link to={"/contact"}>
          <li>اطلاعات تماس</li>
        </Link>

        <Link to={"/articles"}>
          <li>مقالات آموزشی</li>
        </Link>

        <Link to={"/gallery"}>
          <li>گالری تصاویر</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavLinks;
