import styles from "../styles/Modal.module.css";
import axios from "axios";

const CancelationModal = ({ id, handleOnClose }) => {
  const cancelAppointment = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      alert("You have canceled this appointment");
      handleOnClose();
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <div className={styles.advice}>
          <span>¿Estas seguro que quieres cancelar este turno?</span>
        </div>
        <button
          className={styles.yellow_btn}
          onClick={() => cancelAppointment(id)}
        >
          Cancel Appointment
        </button>
        <button className={styles.btnActive} onClick={() => handleOnClose()}>
          X
        </button>
      </div>
    </div>
  );
};

export default CancelationModal;
