import React from "react";
import logo from "../../assets/img/logo-blanco.png";
import CartWidget from "../CartWidget.js";
import { NavLink } from "react-router-dom";
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
          <li className="nav-item">Servicios</li>
          <li className="nav-item">Nosotros</li>
        </ul>
      </div>
      <div className="carrodeCompras">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
