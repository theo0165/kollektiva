import logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <img src={logo.src} />
      </Link>
      <MdMenu size="40px" color="#23449b" />
    </header>
  );
}
