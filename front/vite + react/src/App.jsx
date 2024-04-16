import "./App.css";
import MyAppointments from "./views/MyAppointments";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
