/* eslint-disable react/prop-types */
import styles from "../styles/Card.module.css";

// eslint-disable-next-line react/prop-types
const Card = ({ appointment, handleCancelation }) => {
  const { id, motive, date, time, status } = appointment;
  return (
    <div className={styles.card}>
      <h4 className={styles.motive}> {motive}</h4>
      <p className={styles.date}>{date}</p>
      <p className={styles.date}>{time}</p>
      <p className={status === "active" ? styles.active : styles.cancelled}>
        {status}
      </p>
      <button
        className={status == "active" ? styles.btnActive : styles.btnDisable}
        onClick={() => handleCancelation(id)}
      >
        X
      </button>
    </div>
  );
};

export default Card;
