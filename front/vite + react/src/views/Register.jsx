import { useState } from "react";
import validate from "../utils/validate";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
      Swal.fire({
        title: "¡Usuario registrado!",
        text: "El usuario se registró correctamente",
      });
      navigate("/");
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(registerForm)) {
      postData();
      setRegisterForm(initialState);
    } else {
      alert("Parece que algun dato es incorrecto");
    }
  };

  return (
    <div className="bg-gradient-to-br from-greeny to-lightGreeny flex w-full h-auto items-center justify-center">
      <div className="w-full max-w-md px-10 py-12 bg-white border-2 border-gray-100 rounded-3xl">
        <h2 className="text-4xl font-semibold mb-4">Sign up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Document", name: "nDni", type: "text" },
            { label: "Bithdate", name: "birthdate", type: "date" },
            { label: "Email", name: "email", type: "text" },
            { label: "Username", name: "username", type: "text" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col">
              <label className="font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                onChange={handleOnChange}
                value={registerForm[name]}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              />
              {errors[name] && (
                <span className="text-red-500 text-sm mt-1">
                  {errors[name]}
                </span>
              )}
            </div>
          ))}
          <button className="w-full py-3 bg-greeny text-white font-bold text-md rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
