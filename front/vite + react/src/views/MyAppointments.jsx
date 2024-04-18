import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import styles from "../styles/Card.module.css";
import axios from "axios";
import CancelationModal from "../components/CancelationModal";
import { useSelector, useDispatch } from "react-redux";
import { setUserAppointments } from "../redux/reducer";
import AddAppointment from "../components/AddAppointment";
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

  // useEffect(() => {
  //   !user.name && navigate("/");
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/users/${user.id}`
      );
      dispatch(setUserAppointments(response.data.appointments));
    };
    user.name && fetchData();
  }, []);

  return (
    <div className={styles.card_container}>
      {!appointments.length &&
        (<span>No appointments yet</span>)}
      {appointments.map((appointment) => (
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
      <Link to="/add"><button>Add Appointment</button></Link>
    </div>
  );
};

export default MyAppointments;
