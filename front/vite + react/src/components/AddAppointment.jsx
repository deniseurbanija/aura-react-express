import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserAppointment } from "../redux/reducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import validateForm from "../utils/validateForm";

const AddAppointment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userActive);
  const userId = user.id;
  const initialState = {
    motive: "",
    date: "",
    time: "",
    userId: userId,
    status: "active",
  };
  const [form, setForm] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        form
      );
      console.log(response.data);
      dispatch(addUserAppointment(response.data));
      Swal.fire({
        title: "¡Turno reservado!",
        text: "El turno se reservó correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/appointments");
    } catch (error) {
      alert("ERROR!!");
    }
  };

  useEffect(() => {
    !user.name && navigate("/login");
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    setShowAlert(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (validateForm(form)) {
      // Validar el formulario antes de enviar los datos
      postData();
    } else {
      setShowAlert(true); // Mostrar la alerta si la validación falla
    }
  };

  return (
    <div className="p-6 bg-white rounded-3xl border-2 border-gray-100 max-w-md mx-auto my-8">
      <p className="text-gray-700 mb-4">
        Atención: de lunes a viernes. Horario de corrido de 9AM hasta 5PM
      </p>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">Motivo</label>
          <select
            name="motive"
            value={form.motive}
            onChange={handleOnChange}
            className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Masajes</option>
            <option>Esmaltado semipermanente</option>
            <option>Servicio de uñas</option>
            <option>Lifting de pestañas</option>
            <option>Maquillaje para evento</option>
            <option>Manicura clásica y spa</option>
            <option>Pedicura clásica y spa</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">Día</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleOnChange}
            className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {showAlert && (
            <span className="text-red-500 mt-1 text-sm">
              Por favor ingrese una fecha válida.
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">Hora</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleOnChange}
            className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {showAlert && (
            <span className="text-red-500 mt-1 text-sm">
              Por favor ingrese una hora válida.
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={!form.motive || !form.date || !form.time}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};
export default AddAppointment;
