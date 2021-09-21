import Image from "next/image";
import Gnb from "./Gnb";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__profile}>
        <div className={styles.profile__icon}>
          <Image
            src="/images/eyong.png"
            alt="Eyong"
            width="75px"
            height="75px"
          />
        </div>
        <span className={styles.profile__name}>CuckooQ</span>
      </div>
      <Gnb />
    </header>
  );
}

export default Header;
