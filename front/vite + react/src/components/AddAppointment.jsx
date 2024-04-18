import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../redux/reducer";

const AddAppointment = () => {
  const dispatch = useDispatch;
  const user = useSelector((state) => state.userActive.id);
  const initialState = {
    motive: "",
    date: "",
    time: "",
    userId: user,
    status: "active",
  };
  const [form, setForm] = useState(initialState);

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        form
      );
      console.log(response.data);
      dispatch(setUserAppointments(response.data));
      setForm(initialState);
      alert("appointment added");
    } catch (error) {
      alert("ERROR!!");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>MOTIVE</label>
        <input
          type="text"
          name="motive"
          value={setForm.motive}
          onChange={handleOnChange}
        ></input>

        <label>DATE</label>
        <input
          type="date"
          name="date"
          value={setForm.date}
          onChange={handleOnChange}
        ></input>

        <label>TIME</label>
        <input
          type="time"
          name="time"
          value={setForm.time}
          onChange={handleOnChange}
        ></input>
        <button
          disabled={
            (!form.motive && !form.date && !form.time) ||
            !form.motive ||
            !form.date ||
            !form.time
          }
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddAppointment;
