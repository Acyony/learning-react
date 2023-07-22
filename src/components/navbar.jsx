import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <div className="navbar ">
      <nav className="navbar bg-body-tertiary bg-success-subtle">
        <div className="container-fluid ">
          <a className="navbar-brand d-flex " href="#">
            <img
              src={logo}
              alt="Logo"
              width="150"
              className="d-inline-block  "
            />
            <div className="ms-4 ">Alcione FlohMarket</div>
          </a>
        </div>
      </nav>
    </div>
  );
};
