import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { Item } from "../../components/index";
import { useParams } from "react-router-dom";

const ItemCategory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  const { categoryName } = useParams();

  const startProduct = useRef(1);
  const endProduct = useRef(20);

  const getProducts = async (start, end, categoryName) => {
    try {
      setIsLoading(true);
      const promises = [];
      for (let i = start; i <= end; i++) {
        promises.push(
          fetch(`https://fakestoreapi.com/products/${i}`).then((res) =>
            res.json()
          )
        );
      }
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
      // console.log(newProducts);
      setProducts(newProducts.filter(product=>product.category===categoryName));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts(startProduct.current, endProduct.current, categoryName);
  }, [categoryName]);


  return (
    <div className="container">
      <h1>Productos</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="list-container">
            {products.map((product) => (
              <Item key={product.id} item={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCategory;