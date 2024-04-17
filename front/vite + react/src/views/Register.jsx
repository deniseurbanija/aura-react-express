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
      <h2>Register</h2>
      {[
        { label: "Name", name: "name", type: "text" },
        { label: "DNI", name: "nDni", type: "text" },
        { label: "Birthdate", name: "birthdate", type: "date" },
        { label: "Email", name: "email", type: "text" },
        { label: "Username", name: "username", type: "text" },
        { label: "Password", name: "password", type: "password" },
      ].map(({ label, name, type }) => {
        return (
          <div key={name} className={styles.registerForm}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              onChange={handleOnChange}
              value={registerForm[name]}
            />
            {errors[name] && <span key={name}>{errors[name]}</span>}
          </div>
        );
      })}
      <button>Submit</button>
    </form>
  );
};

export default Register;
