import React from "react";
import logo from "../assets/img/logo-blanco.png";
import CartWidget from "./CartWidget.js";

export const NavBar = () => {
  return (
    <nav className="navbar backStyle">
      <div className="logo">
        <img src={logo} className="logo-img" alt="Logo de la empresa"></img>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Aberturas</li>
          <li className="nav-item">Deco</li>
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
