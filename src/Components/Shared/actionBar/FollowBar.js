import Social from "../social/Social";
import styles from "./FollowBar.module.css";
const address = {
  telegram:"https://t.me/kgn_parmis",
  whatsApp:"https://wa.me/989384134828",
  linkedIn:"https://www.linkedin.com/in/hamed-jahangiri-908643216",
  instagram:"https://instagram.com/kgnparmis",
}
function FollowBar() {
  return (
    <section className={styles.section}>
        <div className={styles.text}>
          <p>
             اولین فردی باشید که
            از اخبار و رویدادهای صنعت کشاورزی مطلع می شود
          </p>
        <Social address={address}/>
        </div>
    </section>
  );
}

export default FollowBar;
