import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MenuOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.userActive);
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="p-3 flex justify-between items-center w-[92%] mx-auto font-semibold">
      <div>
        <h1 className="text-lg text-greeny">Estética Aura</h1>
      </div>
      <div
        className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
          menuVisible ? "top-[10%]" : "top-[-100%]"
        } md:w-auto w-full flex items-center px-5`}
      >
        <ul
          className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
          id="menu"
        >
          <li>
            <a href="home" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="home#about" className="hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="home#services" className="hover:text-gray-500">
              Services
            </a>
          </li>
          <li>
            <a href="home#contact" className="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        {user.name ? (
          <Link
            className=" bg-greeny text-white px-5 py-2 rounded-full hover:bg-green-700"
            to="/appointments"
          >
            Appointments
          </Link>
        ) : (
          <Link
            className=" bg-greeny text-white px-5 py-2 rounded-full hover:bg-green-700"
            to="/"
          >
            Login
          </Link>
        )}
        <MenuOutline
          className="block md:hidden cursor-pointer" // md:hidden oculta el icono en pantallas medianas y grandes
          color={"#00000"}
          height="2rem"
          width="2rem"
          onClick={showMenu}
        />
      </div>
    </nav>
  );
};

export default NavBar;
