import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
        CookiBooki📚 Book Store
        </Link>
        <div className="cart">
          <Link to="/cart">🛒</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
