import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.userActive);
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Link to="/home" className={styles.li}>
          <img src={logo} alt="Logo" className={styles.image} />
        </Link>
      </div>
      <div className={styles.ul_div}>
        <ul className={styles.ul}>
          <Link to="/home" className={styles.li}>
            Home
          </Link>
          <Link to="/contact" className={styles.li}>
            Contact
          </Link>
          <Link className={styles.li} to="/about">
            About
          </Link>
          {user.name ? (
            <Link to="/appointments" className={styles.li}>
              My Appointments
            </Link>
          ) : (
            <Link to="/" className={styles.li}>
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
