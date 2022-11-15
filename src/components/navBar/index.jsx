import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget.js";

import logo from "../../assets/img/logo-blanco.png";
import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar backStyle">
      <div className="logo">
        <img src={logo} className="logo-img" alt="Logo de la empresa"></img>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/products"}>Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/products"}>men's clothing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/products"}>jewelery</NavLink>
          </li>
          <li className="nav-item">electronics</li>
        </ul>
      </div>
      <div className="carrodeCompras">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
