import logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <img src={logo.src} />
      <MdMenu size="40px" color="#23449b" />
    </header>
  );
}
