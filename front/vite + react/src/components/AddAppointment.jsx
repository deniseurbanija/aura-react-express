import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserAppointment } from "../redux/reducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import validateForm from "../utils/validateForm";
import styles from "../styles/AddAppointment.module.css";

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
        title: '¡Turno reservado!',
        text: 'El turno se reservó correctamente',
        showConfirmButton: false,
        timer: 2000
    })
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
    <div className={styles.container}>
      <p>Atención: de lunes a viernes. Horario de corrido de 9AM hasta 5PM</p>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <label>Motivo</label>
        <select name="motive" value={form.motive} onChange={handleOnChange}>
          <option>Masajes</option>
          <option>Esmaltado semipermanente</option>
          <option>Service de uñas</option>
          <option>Lifting de pestañas</option>
          <option>Maquillaje para evento</option>
          <option>Manicura clásica y spa</option>
          <option>Pedicura clásica y spa</option>
        </select>

        <label>Día</label>
        <input
          type="date"
          name="date"
          value={setForm.date}
          onChange={handleOnChange}
        ></input>
          {showAlert && (
          <span className="alert">
            Por favor ingrese una fecha válidas.
          </span>
        )}

        <label>Hora</label>
        <input
          type="time"
          name="time"
          value={setForm.time}
          onChange={handleOnChange}
        ></input>
        {showAlert && (
          <span className="alert">
            Por favor ingrese una hora válidas.
          </span>
        )}
        <button
          disabled={
            (!form.motive && !form.date && !form.time) ||
            !form.motive ||
            !form.date ||
            !form.time
          }
        >
          Agregar
        </button>
      </form>
    </div>
  );
};
export default AddAppointment;
