import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Book Store
        </Link>
        <div>
          <Link className="nav-link d-inline" to="/category/best-sellers">
            Best Sellers
          </Link>
          <Link className="nav-link d-inline" to="/category/fiction">
            Fiction
          </Link>
          <Link className="nav-link d-inline" to="/category/non-fiction">
            Non-fiction
          </Link>
          <Link className="nav-link d-inline" to="/category/children">
            Children
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
