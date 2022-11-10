import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  const startProduct = useRef(2);
  const endProduct = useRef(21);

  const getProducts = async (start = "1", end = "20") => {
    try {
      setIsLoading(true);
      const promises = [];
      for (let i = start; i <= end; i++) {
        promises.push(
          fetch(`https://api.escuelajs.co/api/v1/products/${i}`).then((res) =>
            res.json()
          )
        );
      }
      const results = await Promise.all(promises);
      const newProducts = results.map((producto) => {
        return {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          description: producto.description,
          image: producto.images[0],
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

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
};

export default Home;
