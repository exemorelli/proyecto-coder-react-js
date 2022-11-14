import React from "react";
import { useLocation } from "react-router-dom";
import { ItemCount } from "../../components";
import "./styles.css";

const ItemDetail = () => {
  const { state } = useLocation();

  const { image, title, description, price } = state;

  console.log(state);

  return (
    <div className="product-detail-containter">
      <div className="card no-click">
        <div className="card-image-container">
          <img className="card-image" src={image} alt={title} />
        </div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <p className="card-description">{description}</p>
          <div className="card-price">{price} USD</div>
        </div>
      </div>
      <ItemCount stock={state.stock} />
    </div>
  );
};

export default ItemDetail;
