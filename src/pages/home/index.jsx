import React from "react";
import "./styles.css";
import ItemListContainer from "../../components/ItemListContainer";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ItemListContainer
        greetings={
          "Sitio en construcción. Puedes observar algunos productos en la sección correspondiente de la barra de navegación."
        }
      />
    </div>
  );
};

export default Home;
