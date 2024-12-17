import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Book Store
        </Link>
        <div>
          <Link className="nav-link" to="/category/best-sellers">
            Best Sellers
          </Link>
          <Link className="nav-link" to="/category/fiction">
            Fiction
          </Link>
          <Link className="nav-link" to="/category/non-fiction">
            Non-fiction
          </Link>
          <Link className="nav-link" to="/category/children">
            Children
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
