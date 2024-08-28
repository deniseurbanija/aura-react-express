import axios from "axios";
import Swal from "sweetalert2";

const CancelationModal = ({ id, handleOnClose }) => {
  const cancelAppointment = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      Swal.fire({
        title: '¡Turno cancelado!',
        text: 'El turno se canceló correctamente',
        showConfirmButton: false,
        timer: 2000
    })
      handleOnClose();
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <span>¿Estas seguro que quieres cancelar este turno?</span>
        </div>
        <button
        
          onClick={() => cancelAppointment(id)}
        >
          Cancelar turno
        </button>
        <button  onClick={() => handleOnClose()}>
          X
        </button>
      </div>
    </div>
  );
};

export default CancelationModal;
