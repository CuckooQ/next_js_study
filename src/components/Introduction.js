import { Divider, Icon } from "semantic-ui-react";
import styles from "../styles/Introduction.module.css";

function Introduction() {
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>소개</h3>
        <Divider />
        <div className={styles.contents}>
          <div className={styles.content}>
            <Icon className="male" />
            <span className={styles.content_text}>Jae-yong Cho</span>
          </div>
          <div className={styles.content}>
            <Icon className="map marker" />
            <span className={styles.content_text}>Seoul Seodaemun-gu</span>
          </div>
          <div className={styles.content}>
            <Icon className="mail" />
            <span className={styles.content_text}>jaeyong4536@gmail.com</span>
          </div>
          <div className={styles.content}>
            <Icon className="linkify" />
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
