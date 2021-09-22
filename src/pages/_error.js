import styles from "../styles/Error.module.css";

function Error({ statusCode }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>
        {statusCode
          ? `An Error ${statusCode} occurred on server`
          : "An Error occurred on client"}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
