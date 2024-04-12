/* eslint-disable react/prop-types */
import styles from "../styles/Card.module.css";

// eslint-disable-next-line react/prop-types
const Card = ({ appointment, handleOnClick }) => {
  const { id, motive, date, time, status } = appointment;
  return (
    <div className={styles.card}>
      <h4 className={styles.motive}> {motive}</h4>
      <p className={styles.date}>{date}</p>
      <p className={styles.date}>{time}</p>
      {status === "active" ? (
        <>
          <p className={styles.active}>{status}</p>
          <button
            className={styles.btnActive}
            onClick={() => handleOnClick(id)}
          >
            X
          </button>
        </>
      ) : (
        <>
          <p className={styles.cancelled}>{status}</p>
          <button className={styles.btnDisable}>X</button>
        </>
      )}
    </div>
  );
};

export default Card;
