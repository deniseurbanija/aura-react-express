import { useState } from "react";
import styles from "../styles/Register.module.css";
import validate from "../utils/validate";
import axios from "axios";

const Register = () => {
  const initialState = {
    name: "",
    nDni: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  };

  const [registerForm, setRegisterForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const postData = async () => {
    try {
      await axios.post("http://localhost:3000/users/register", registerForm);
      alert("user registered succesfully");
    } catch (error) {
      alert(error, "user register failed");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });

    setErrors(validate(registerForm));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    setRegisterForm(initialState);
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
      {errors.name && <p>{errors.name}</p>}

      <label>DNI</label>
      <input
        name="nDni"
        type="text"
        value={registerForm.nDni}
        onChange={handleOnChange}
      ></input>
      {errors.nDni && <p>{errors.nDni}</p>}

      <label>Birthdate</label>
      <input
        name="birthdate"
        type="date"
        value={registerForm.birthdate}
        onChange={handleOnChange}
      ></input>
      {errors.birthdate && <p>{errors.birthdate}</p>}

      <label>Username</label>
      <input
        name="username"
        type="text"
        value={registerForm.username}
        onChange={handleOnChange}
      ></input>
      {errors.username && <p>{errors.username}</p>}

      <label>Email</label>
      <input
        name="email"
        type="text"
        value={registerForm.email}
        onChange={handleOnChange}
      ></input>
      {errors.email && <p>{errors.email}</p>}

      <label>Password</label>
      <input
        name="password"
        type="password"
        value={registerForm.password}
        onChange={handleOnChange}
      ></input>
      {errors.password && <p>{errors.password}</p>}

      <button>Submit</button>
    </form>
  );
};

export default Register;
