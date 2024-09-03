import axios from "axios";
import Swal from "sweetalert2";

const CancelationModal = ({ id, handleOnClose }) => {
  const cancelAppointment = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      Swal.fire({
        title: "Appointment canceled",
        text: "This appointment has been succesfully canceled",
        showConfirmButton: false,
        timer: 2000,
      });
      handleOnClose();
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => handleOnClose()}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center mb-6">
          <span className="text-lg font-semibold">
            Are you sure you want to cancel this appointment?
          </span>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            onClick={() => cancelAppointment(id)}
          >
            Cancel
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
            onClick={() => handleOnClose()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelationModal;
