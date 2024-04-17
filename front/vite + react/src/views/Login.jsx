import { useState } from "react";
import styles from "../styles/Register.module.css";
import axios from "axios";
import validate from "../utils/validate";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducer";

const Login = () => {
  // const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const initialState = {
    username: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialState);
  const [errors, setErrors] = useState({
    username: "username is required",
    password: "password is required",
  });

  const postData = async () => {
    try {
      await axios.post("http://localhost:3000/users/login", loginForm);
      dispatch(login(loginForm));
      alert("login succesful");
    } catch (error) {
      alert(error, "user register failed");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
    setErrors(validate(loginForm));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div className={styles.loginForm}>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={loginForm.username}
          onChange={handleOnChange}
        ></input>
        {errors.username && <p>{errors.username}</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={loginForm.password}
          onChange={handleOnChange}
        ></input>
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button
        disabled={
          (!loginForm.username && !loginForm.password) ||
          !loginForm.password ||
          !loginForm.username
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
