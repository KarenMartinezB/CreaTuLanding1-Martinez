import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/NavBar.css";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
         CookiBoki 📚 Book Store
        </Link>
        <div className="cart">
          <Link to="/cart">🛒 ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
