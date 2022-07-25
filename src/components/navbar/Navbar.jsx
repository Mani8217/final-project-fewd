import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <menu className="navbar-container container">
        <a href="#" className="navbar-link">
          profile
        </a>
        <a href="#" className="navbar-link">
          Gallrty
        </a>
        <a href="#" className="navbar-link">
          Albums
        </a>
        <a href="#" className="navbar-link">
          Order
        </a>
      </menu>
    </div>
  );
}

export default Navbar;
