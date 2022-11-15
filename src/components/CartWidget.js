import React from "react";
import { NavLink } from "react-router-dom";
import cart from "../assets/icons/cart-regular-240-white.png";

export const CartWidget = () => {
  return (
    <NavLink to={"/cart"}>
      <img className="carritoIcono" src={cart} alt="Carrito de compras"></img>
    </NavLink>
  );
};

export default CartWidget;
