import { useState } from "react";
import styles from "../styles/Register.module.css";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(loginForm)
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        name="username"
        type="text"
        value={loginForm.username}
        onChange={handleOnChange}
      ></input>

      <label>Password</label>
      <input
        name="password"
        type="password"
        value={loginForm.password}
        onChange={handleOnChange}
      ></input>

      <button>Submit</button>
    </form>
  );
};

export default Login;
