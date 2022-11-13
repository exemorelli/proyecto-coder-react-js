import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../components";
import "./styles.css";

const ProductDetail = () => {
    const { state } = useLocation();

    console.log(state);

    return (
        <div>
            <h1>Products</h1>
            <Card item={state} />
        </div>
    )
}

export default ProductDetail;