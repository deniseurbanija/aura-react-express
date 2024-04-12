import "./App.css";
import MyAppointments from "./views/MyAppointments";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {<NavBar />}
      {<MyAppointments />}
      {<Footer />}
    </div>
  );
}

export default App;
