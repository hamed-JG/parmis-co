import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function ServiceLinks() {
  return (
    <div className={styles.container}>
      <strong className={styles.header}>خدمات</strong>
      <ul>
        <Link to={"/articles/greenhouse-structure"}>
          <li>احداث گلخانه</li>
        </Link>

        <Link to={"/articles/greenhouse-equipment"}>
          <li>تحهیز گلخانه</li>
        </Link>

        <Link to={"/articles/choose-corp"}>
          <li>مشاوره تعیین کشت</li>
        </Link>

        <Link to={"/articles/importance-of-inputs"}>
          <li>توزیع نهاده کشاورزی</li>
        </Link>
      </ul>
    </div>
  );
}

export default ServiceLinks;
