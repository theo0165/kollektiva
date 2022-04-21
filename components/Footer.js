import styles from "../styles/Footer.module.scss";
import logo from "../assets/logo_white.svg";
import Link from "next/link";

import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = ({ pushBottom }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <img src={logo.src} />
      </div>
      <div className={styles.content}>
        <div>
          <ul>
            <li>Kontakt</li>
            <li>Om Kollektiva</li>
            <li>Vanliga frågor</li>
            <li>Allmänna villkor</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Din profil</li>
            <li>Se annonser</li>
            <li>
              <Link href="/residence/new">
                <a>Skapa konto</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialContainer}>
          <p>Följ oss</p>
          <div className={styles.social}>
            <BsLinkedin />
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </div>
      {pushBottom && <div style={{ marginBottom: "200px" }}></div>}
    </footer>
  );
};

Footer.defaultProps = {
  pushBottom: false,
};

export default Footer;
