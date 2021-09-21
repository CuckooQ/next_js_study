import { Dimmer, Loader } from "semantic-ui-react";
import styles from "../styles/LoadingDialog.module.css";

function LoadingDialog() {
  return (
    <div className={styles.wrapper}>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    </div>
  );
}

export default LoadingDialog;
