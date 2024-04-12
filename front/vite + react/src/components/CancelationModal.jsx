import styles from "../styles/Modal.module.css";

const CancelationModal = ({ handleOnClose }) => {
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <div className={styles.advice}>
          <span>¿Estas seguro que quieres cancelar este turno?</span>
        </div>
        <button className={styles.yellow_btn}>Cancel Appointment</button>
        <button className={styles.btnActive} onClick={() => handleOnClose()}>
          X
        </button>
      </div>
    </div>
  );
};

export default CancelationModal;
