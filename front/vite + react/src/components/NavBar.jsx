import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <h3>Henry Schedules</h3>
      </div>
      <div className={styles.ul_div}>
        <ul className={styles.ul}>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li className={styles.yellow_btn}>My Appointments</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar