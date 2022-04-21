import logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header({ shouldExit }) {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <img src={logo.src} className={styles.logo} />
        </a>
      </Link>
      {shouldExit ? (
        <Link href="/">
          <a>
            <IoMdClose size="40px" color="#23449b" />
          </a>
        </Link>
      ) : (
        <>
          <div className={styles.mobile}>
            <MdMenu size="40px" color="#23449b" />
          </div>
          <div className={styles.desktop}>
            <ul>
              <li>
                <a href="#">Se annonser</a>
              </li>
              <li>
                <a href="#">Om Kollektiva</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
              <li className={styles.menuButton}>
                <Link href="/residence/new">
                  <a>
                    <button>Skapa annons</button>
                  </a>
                </Link>
              </li>
              <li className={styles.menuUser}>
                <Link href="/login">
                  <a>
                    <HiOutlineUserCircle size="50px" color="#23449B" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

Header.defaultProps = {
  shouldExit: false,
};
