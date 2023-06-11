import { Link } from "react-router-dom";
import { useState } from "react";

//styles & icons
import styles from "./Navbar.module.css";
import home from "../../../Assets/images/home.svg";
import menuHamburger from "../../../Assets/images/menu-hamburger.svg";
import times from "../../../Assets/images/times.svg";
import phone from "../../../Assets/images/phone.svg";
// import Social from "@/components/shared/social/Social";

// Social address
const address = {
  telegram:"https://t.me/kgn_parmis",
  whatsApp:"https://wa.me/989384134828",
  linkedIn:"https://www.linkedin.com/in/hamed-jahangiri-908643216",
  instagram:"https://instagram.com/kgnparmis",
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <ul className={styles.menuList}>
          <li className={styles.link}>
            <Link to={"/"}>صفحه نخست</Link>
          </li>
          <li className={styles.link}>
            <Link to={"/services"}>خدمات</Link>
          </li>
          <li className={styles.link}>
            <Link to={"/products"}>محصولات</Link>
          </li>
          <li className={styles.link}>
            <Link to={"/articles"}>مقالات</Link>
          </li>
          <li className={styles.link}>
            <Link to={"/gallery"}>تصاویر</Link>
          </li>
          <li className={styles.link}>
            <Link to={"/contact"}>تماس با ما</Link>
          </li>
        </ul>
      </div>

      {/* mobile menu */}

      <img
        width={25}
        height={30}
        src={menuHamburger}
        className={styles.menuIcon}
        onClick={openMenu}
        alt=""
      />

      <Link to="/">
        <img
          width={40}
          height={40}
          src={home}
          className={styles.homeIcon}
          alt=""
        />
      </Link>

      <Link href="tel:+989121443811">
        <img
          width={30}
          height={30}
          src={phone}
          className={styles.callIcon}
          alt=""
        />
      </Link>

      <div
        className={showMenu ? styles.showHamburgerMenu : styles.hamburgerMenu}
      >
        <img
          className={styles.closeIcon}
          width={40}
          height={40}
          src={times}
          onClick={openMenu}
          alt=""
        />
        <nav>
          <h3 className={styles.hamburgerTitle}>
            شرکت مهندسی کشاورزی
            <br /> گلخانه سازان نواندیش پارمیس
          </h3>
          <ul className={styles.hamburgerMenuList}>
            <li className={styles.link}>
              <Link to={"/"} onClick={openMenu}>
                صفحه نخست
              </Link>
            </li>

            <li className={styles.link}>
              <Link to={"/services"} onClick={openMenu}>
                خدمات
              </Link>
            </li>
            <li className={styles.link}>
              <Link to={"/products"} onClick={openMenu}>
                محصولات
              </Link>
            </li>
            <li className={styles.link}>
              <Link to={"/articles"} onClick={openMenu}>
                مقالات
              </Link>
            </li>
            <li className={styles.link}>
              <Link to={"/gallery"} onClick={openMenu}>
                تصاویر
              </Link>
            </li>
            <li className={styles.link}>
              <Link to={"/contact"} onClick={openMenu}>
                تماس با ما
              </Link>
            </li>
          </ul>
          <div className={styles.socialHolder}>
            {/* <Social address={address} color="gray" /> */}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
