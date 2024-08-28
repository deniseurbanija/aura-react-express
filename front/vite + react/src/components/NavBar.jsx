import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.userActive);
  return (
    <div>
      <div>
        <Link to="/home" >
          {/* <img src={logo} alt="Logo" className={styles.image} /> */}
          <div>Estética Aura</div>
        </Link>
      </div>
      <div>
        <ul >
          <Link to="/home" >
            Inicio
          </Link>
          <Link to="/contact" >
            Contacto
          </Link>
          <Link  to="/about">
            Acerca
          </Link>
          {user.name ? (
            <Link to="/appointments" >
              Mis Turnos
            </Link>
          ) : (
            <Link to="/" >
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
