import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import CancelationModal from "../components/CancelationModal";
import { useSelector, useDispatch } from "react-redux";
import { setUserAppointments } from "../redux/reducer";
import { Link } from "react-router-dom";

const MyAppointments = () => {
  const [modal, setModal] = useState(false);
  const [appId, setAppId] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userActive);
  const appointments = useSelector((state) => state.userAppointments);

  const handleOnClick = (id) => {
    setAppId(id);
    setModal(true);
  };

  const handleOnClose = () => {
    setModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user.id}`
        );
        dispatch(setUserAppointments(response.data.appointments));
      } catch (err) {
        alert("error");
      }
    };
    user.name && fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-5 mt-5">
      <h1 className="text-2xl m-5">My Appointments</h1>
      {!appointments.length && <span>No appointments yet</span>}
      {appointments &&
        appointments.map((appointment) => (
          <Card
            appointment={appointment}
            key={appointment.id}
            handleOnClick={handleOnClick}
          />
        ))}
      {modal && (
        <CancelationModal
          handleOnClose={handleOnClose}
          id={appId}
          // setAppointments={setUserAppointments}
        />
      )}
      <Link to="/add">
        <button className="p-3 rounded-3xl bg-lime-600 text-white font-semibold m-4">
          Add appointment
        </button>
      </Link>
    </div>
  );
};

export default MyAppointments;
