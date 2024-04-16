import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <h3>Henry Schedules</h3>
      </div>
      <div className={styles.ul_div}>
        <ul className={styles.ul}>
          <Link to="/home">Home</Link>
          <Link to="contact">Contact</Link>
          <Link>About</Link>
          <Link to="/appointments">My Appointments</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
