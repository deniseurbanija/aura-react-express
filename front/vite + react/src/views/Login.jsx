import axios from "axios";
import  twoGirls  from "../assets/two-girls.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserActive } from "../redux/reducer";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const Login = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
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

  const clientID =
    "15350333841-av5htc00a08bmm0hat0r2qsra9g7vn94.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = async (response) => {
    if ("profileObj" in response) {
      const token = response.tokenId;
      try {
        const res = await axios.post("http://localhost:3000/auth/google", {
          token,
        });
        dispatch(setUserActive(res.data.user));
        navigate("/home");
      } catch (error) {
        console.error("Google Authentication failed", error);
      }
    }
  };

  const onFailure = (response) => {
    console.log("Something went wrong", response);
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
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={loginForm.email}
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
                disabled={!loginForm.email || !loginForm.password}
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-greeny text-white font-bold text-md rounded-xl"
              >
                Sign in
              </button>

              <div className="flex items-center justify-center">
                <GoogleLogin
                  clientId={clientID}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  buttonText="Continue with Google"
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
            <div className="mt-8 flex gap-2 justify-between">
              <a className="font-semibold">Forgot your password?</a>
              <a href="/register" className="text-greeny font-semibold">
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden relative w-1/2 h-screen lg:flex items-center justify-center bg-gray-200">
        <img src={twoGirls} className="w-full h-screen object-cover"></img>
      </div>
    </div>
  );
};

export default Login;
