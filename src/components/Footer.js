import { Divider } from "semantic-ui-react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider />
      <span className={styles.footer_content}>
        Copyright &copy; CuckooQ. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
