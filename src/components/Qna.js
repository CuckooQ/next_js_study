import { Button, Divider } from "semantic-ui-react";
import styles from "../styles/Qna.module.css";

const clickSend = (e) => {
  e.preventDefault();
};

function Qna() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>문의 사항</h3>
      <Divider />
      <form className={styles.contents}>
        <div className={styles.content}>
          <div className={styles.content_title}>제목</div>
          <textarea
            className={`${styles.content_textarea} ${styles.textarea_title}`}
            placeholder="Dummy"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.content_title}>내용</div>
          <textarea
            className={`${styles.content_textarea}`}
            placeholder="Dummy"
          />
        </div>
        <Button color="teal" onClick={clickSend}>
          보내기
        </Button>
      </form>
    </div>
  );
}

export default Qna;
