import { useState } from "react";
import styles from "../styles/Register.module.css";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    nDni: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registerForm);
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={registerForm.name}
        onChange={handleOnChange}
      ></input>

      <label>DNI</label>
      <input
        name="nDni"
        type="text"
        value={registerForm.nDni}
        onChange={handleOnChange}
      ></input>

      <label>Birthdate</label>
      <input
        name="birthdate"
        type="text"
        value={registerForm.birthdate}
        onChange={handleOnChange}
      ></input>

      <label>Username</label>
      <input
        name="username"
        type="text"
        value={registerForm.username}
        onChange={handleOnChange}
      ></input>

      <label>Email</label>
      <input
        name="email"
        type="text"
        value={registerForm.email}
        onChange={handleOnChange}
      ></input>

      <label>Password</label>
      <input
        name="password"
        type="password"
        value={registerForm.password}
        onChange={handleOnChange}
      ></input>

      <button>Submit</button>
    </form>
  );
};

export default Register;
