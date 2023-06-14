import { Link } from "react-router-dom";
import styles from "./Social.module.css";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";



function Social({color,address}) {
  const goLink = ()=>{
    window.open(`${address.telegram}`)
  }
  return (
    <div>
      <Link target={"_blank"} to={`${address.telegram}`}>
        <FaTelegramPlane className={styles.icon} style={{ color: `${color || "#229ED9 "}`}} />
      </Link>

      <Link target={"_blank"} to={`${address.whatsApp}`}>
        <FaWhatsapp className={styles.icon} style={{ color: `${color || "#25D366 "}`}}/>
      </Link>

      <Link target={"_blank"} to={`${address.instagram}`}>
        <FaInstagram className={styles.icon} style={{ color: `${color || "#fb3958 "}`}} />
      </Link>

      <Link target={"_blank"} to={`${address.linkedIn}`}>
        <FaLinkedinIn className={styles.icon} style={{ color: `${color || "#0e76a8 "}` }} />
      </Link>
    </div>
  );
}

export default Social;
