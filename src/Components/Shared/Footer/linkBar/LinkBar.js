import styles from "./LinkBar.module.css";
import HowToLinks from "./links/HowToLinks";
import NavLinks from "./links/NavLinks";
import ServiceLinks from "./links/ServiceLinks";

function LinkBar() {
  return (
    <div className={styles.columnHolder}>
      <NavLinks />
      <ServiceLinks />
      <HowToLinks />
    </div>
  );
}

export default LinkBar;
