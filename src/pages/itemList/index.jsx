import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { Item } from "../../components/index";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  const startProduct = useRef(1);
  const endProduct = useRef(10);

  const getProducts = async (start, end) => {
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
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts(startProduct.current, endProduct.current);
  }, []);

  console.log("products", products);

  const handleNext = async () => {
    startProduct.current += 10;
    endProduct.current += 10;
    getProducts(startProduct.current, endProduct.current);
  };

  const handlePrevious = async () => {
    startProduct.current -= 10;
    endProduct.current -= 10;
    getProducts(startProduct.current, endProduct.current);
  };

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
          <div className="button-container">
            <button
              disabled={startProduct.current <= 1 || isLoading}
              onClick={handlePrevious}
              className="btn-pages"
            >
              Anterior
            </button>
            <button
              disabled={endProduct.current >= 20 || isLoading}
              onClick={handleNext}
              className="btn-pages"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemList;
