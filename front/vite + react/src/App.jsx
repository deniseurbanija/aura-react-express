import "./App.css";
import MyAppointments from "./views/MyAppointments";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <div>
      {<NavBar />}
      {<Register />}
      {<Footer />}
    </div>
  );
}

export default App;
