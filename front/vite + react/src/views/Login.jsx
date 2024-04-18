import { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserActive } from "../redux/reducer";

const Login = () => {
  const dispatch = useDispatch();
  const initialState = {
    username: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialState);

  const navigate = useNavigate();

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        loginForm
      );
      dispatch(setUserActive(response.data.foundUser));
      console.log(response.data.foundUser);
      navigate("/home");
      setLoginForm(initialState);
    } catch (error) {
      alert("User not found");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  return (
    <div>
      <h2 className={styles.text}>Iniciar sesión</h2>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div className={styles.loginForm}>
          <label>Nombre de usuario</label>
          <input
            name="username"
            type="text"
            value={loginForm.username}
            onChange={handleOnChange}
          ></input>

          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={loginForm.password}
            onChange={handleOnChange}
          ></input>
        </div>

        <button
          disabled={
            (!loginForm.username && !loginForm.password) ||
            !loginForm.password ||
            !loginForm.username
          }
        >
          Ingresar
        </button>
        <span>
          No tienes una cuenta aún? <a href="/register">Registrarme</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
