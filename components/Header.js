import logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header({ shouldExit }) {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a href="/">
          <img src={logo.src} />
        </a>
      </Link>
      {shouldExit ? (
        <Link href="/">
          <a href="/">
            <IoMdClose size="40px" color="#23449b" />
          </a>
        </Link>
      ) : (
        <MdMenu size="40px" color="#23449b" />
      )}
    </header>
  );
}

Header.defaultProps = {
  shouldExit: false,
};
