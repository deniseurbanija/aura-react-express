import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.userActive);
  return (
    <div className="p-3 w-full flex justify-between text-center items-center ">
      <div>
        <Link to="/home">
          {/* <img src={logo} alt="Logo" className={styles.image} /> */}
          <h1 className="text-lg text-red-400">Estética Aura</h1>
        </Link>
      </div>
      <div className="w-1/2">
        <ul className="justify-between flex ">
          <Link to="/home">Inicio</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/home">Servicios</Link>
        </ul>
      </div>
      <div>
        {user.name ? (
          <Link to="/appointments">Mis Turnos</Link>
        ) : (
          <Link to="/">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
