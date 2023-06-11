import LinkBar from "./linkBar/LinkBar";
// import Social from "@/components/shared/social/Social";
import styles from "./Footer.module.css";
import logo from "../../../Assets/images/logo.png";
const address = {
  telegram: "https://t.me/DeveloperJahan",
  whatsApp: "https://wa.me/989384134828",
  linkedIn: "https://www.linkedin.com/in/hamed-jahangiri-908643216",
  instagram: "https://instagram.com/kgnparmis?igshid=YmMyMTA2M2Y=",
};
function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logoBar}>
          <img className={styles.img} src={logo} alt="" />
          <div>گلخانه سازان نواندیش پارمیس </div>
          <div className={styles.altText}>تاسیس 1387</div>
          <div className={styles.altText}>شماره ثبت 932</div>
        </div>

        <LinkBar />

        <div className={styles.assetBar}>
          {/* <Social address={address} color="gray" /> */}
        </div>
      </div>

      <div className={styles.footer}>
        کلیه حقوق سایت برای شرکت گلخانه سازان نواندیش پارمیس محفوظ است &#169;
      </div>
    </section>
  );
}

export default Footer;
