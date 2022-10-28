import cart from "../assets/icons/cart-regular-240-white.png";

export const CartWidget = () => {
  return (
    <img
      className="carritoIcono"
      src={cart}
      alt="Carrito de compras"
    ></img>
  );
}

export default CartWidget;
