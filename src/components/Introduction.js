import { Divider } from "semantic-ui-react";
import styles from "../styles/Introduction.module.css";

function Introduction() {
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>소개</h3>
        <Divider />
        <div className={styles.contents}>
          <div className={styles.content}>
            <i className="male icon"></i>
            <span className={styles.content_text}>Jae-yong Cho</span>
          </div>
          <div className={styles.content}>
            <i className="map marker icon"></i>
            <span className={styles.content_text}>Seoul Seodaemun-gu</span>
          </div>
          <div className={styles.content}>
            <i className="mail icon"></i>
            <span className={styles.content_text}>jaeyong4536@gmail.com</span>
          </div>
          <div className={styles.content}>
            <i className="linkify icon"></i>
            <a
              className={styles.content_text}
              href="https://github.com/CuckooQ"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
