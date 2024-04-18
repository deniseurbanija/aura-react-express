import "./App.css";
import MyAppointments from "./views/MyAppointments";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import AddAppointment from "./components/AddAppointment";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddAppointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
