import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const Item = ({ item }) => {
  const { id, title, image, price } = item;
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/products/${id}`, { state: item });
  };

  return (
    <div onClick={handleDetail} className="card">
      <div className="card-image-container">
        <img className="card-image" src={image} alt={title} />
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        {/* <p className="card-description">{description}</p> */}
        <div className="card-price">{price} USD</div>
      </div>
    </div>
  );
};

export default Item;
