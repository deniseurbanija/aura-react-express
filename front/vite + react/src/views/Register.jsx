// import { useState } from "react";
import styles from "../styles/Register.module.css";

const Register = () => {
  //   const [registerForm, setRegisterForm] = useState({
  //     name: "",
  //     nDni: 0,
  //     birthdate: "",
  //     username: "",
  //     password: "",
  //   });

  return (
    <form className={styles.form_container}>
      <label>Name</label>
      <input name="name" placeholder="name"></input>

      <label>DNI</label>
      <input></input>

      <label>Birthdate</label>
      <input></input>

      <label>Username</label>
      <input></input>

      <label>Email</label>
      <input></input>

      <label>Password</label>
      <input></input>

      <button>Submit</button>
    </form>
  );
};

export default Register;
