import { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "../styles/Card.module.css";
import axios from "axios";
import CancelationModal from "../components/CancelationModal";

const MyAppointments = () => {
  // eslint-disable-next-line no-unused-vars
  const [appointments, setAppointments] = useState([]);
  const [modal, setModal] = useState(false);
  const [appId, setAppId] = useState(0);

  const handleCancelation = (id) => {
    setAppId(id);
    setModal(true);
  };

  const handleOnClose = () => {
    setModal(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((res) => setAppointments(res.data));
  }, []);

  return (
    <div className={styles.card_container}>
      {appointments.map((appointment) => (
        <Card
          appointment={appointment}
          key={appointment.id}
          handleCancelation={handleCancelation}
        />
      ))}
      {modal && <CancelationModal handleOnClose={handleOnClose} />}
    </div>
  );
};

export default MyAppointments;
