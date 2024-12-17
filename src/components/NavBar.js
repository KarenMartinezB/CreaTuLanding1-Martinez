import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <Link to="/">Inicio</Link>
    <Link to="/cart">Carrito</Link>
  </nav>
);

export default NavBar;
