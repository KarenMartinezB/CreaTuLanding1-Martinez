import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          CookiBoki 📚 Book Store
        </Link>
        <div className="menu">
          <Link to="/category/best-sellers">Best Sellers</Link>
          <Link to="/category/fiction">Fiction</Link>
          <Link to="/category/non-fiction">Non-fiction</Link>
          <Link to="/category/children">Children</Link>
        </div>
        <div className="cart">
          <Link to="/cart">🛒</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;