import React, { useState, useEffect } from "react";
import { useParams, } from "react-router-dom";
import { ItemCount } from "../../components";
import "./styles.css";

const ItemDetail = () => {
  
  const { productsID } = useParams();
  
  const [product, setProduct] = useState([]);


  const getProduct = async (id) => {
    try {
      // setIsLoading(true);
      const promises = [];
          promises.push(
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        );
      
      const results = await Promise.all(promises);
      const newProducts = results.map((producto) => {
        return {
          id: producto.id,
          title: producto.title,
          image: producto.image,
          description: producto.description,
          price: producto.price,
          category: producto.category,
          stock: 10,
        };
      });
      console.log(newProducts[0])
      setProduct(newProducts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(productsID);
  }, [productsID]);

  // console.log(productsID);
  // console.log("products", product);



  const onAddProduct = (count) => {
    console.log(`El producto ${product.title} se agregó ${count} veces.`)
  }

  // console.log(state);

  return (
    <div className="product-detail-containter">
      <div className="card no-click">
        <div className="card-image-container">
          <img className="card-image" src={product.image} alt={product.title} />
        </div>
        <div className="card-body">
          <div className="card-title">{product.title}</div>
          <p className="card-description">{product.description}</p>
          <div className="card-price">{product.price} USD</div>
        </div>
      </div>
      <ItemCount onAddProduct={onAddProduct} stock={product.stock} />
    </div>
  );
};

export default ItemDetail;
