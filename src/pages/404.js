import { Icon } from "semantic-ui-react";
import styles from "../styles/404.module.css";

function Error404() {
  return (
    <div className={styles.wrapper}>
      <Icon className="warning circle" color="red" />
      <span className={styles.message}>404: 페이지를 찾을 수 없습니다.</span>
    </div>
  );
}

export default Error404;
