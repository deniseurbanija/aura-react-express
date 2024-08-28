import { useState } from "react";
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
    <div className="bg-green-700 h-screen flex flex-col items-center">
      <div className=" bg-green-100 h-96 m-10 p-8 items-center rounded-md">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
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
    </div>
  );
};

export default Login;
