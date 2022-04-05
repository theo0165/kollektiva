import logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <img src={logo.src} />
      <MdMenu />
    </header>
  );
}
