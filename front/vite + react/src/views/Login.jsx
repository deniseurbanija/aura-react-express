import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserActive } from "../redux/reducer";
import twoGirls from "../assets/two-girls.jpg";

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
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="w-11/12 max-w-[700px] px-10 py-12 rounded-3xl bg-white border-2 border-gray-100">
          <h1 className="text-4xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter you details.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                name="username"
                type="text"
                value={loginForm.username}
                onChange={handleOnChange}
                placeholder="Enter your email"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              ></input>
            </div>

            <div className="flex flex-col mt-4">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={loginForm.password}
                onChange={handleOnChange}
                placeholder="Enter your password"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              ></input>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                disabled={
                  (!loginForm.username && !loginForm.password) ||
                  !loginForm.password ||
                  !loginForm.username
                }
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-green-600 text-white font-bold text-md rounded-xl"
              >
                Sign in
              </button>
              <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2 rounded-xl text-gray-700 font-semibold text-md border-2 border-gray-100 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                    fill="#34A853"
                  />
                  <path
                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                    fill="#FBBC05"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="mt-8 flex gap-2 justify-between">
              <a className="font-semibold">Forgot your password?</a>
              <a href="/register" className="text-green-600 font-semibold">
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden relative w-1/2 h-screen lg:flex items-center justify-center bg-gray-200">
        {/* <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-green-500 to-red-400 animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-md" /> */}
        <img src={twoGirls}></img>
      </div>
    </div>
  );
};

export default Login;
