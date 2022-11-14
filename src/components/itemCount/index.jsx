import { useState } from "react";
import "./styles.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);
  const onHandleClickUp = () => {
    setCount((countClick) => countClick + 1);
  };
  const onHandleClickDown = () => {
    setCount((countClick) => countClick - 1);
  };

  return (
    <>
      <div className="count-container">
        <button
          disabled={count <= 0}
          onClick={onHandleClickDown}
          type="button"
          className="btn-count"
        >
          -
        </button>
        <div className="counter">{count}</div>
        <button
          disabled={count >= stock}
          onClick={onHandleClickUp}
          type="button"
          className="btn-count"
        >
          +
        </button>
      </div>
      <button className="count-container btn-add" type="button">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
