import React from "react";
import { NavBar } from "./components/navBar";
// import { NavBar } from "./components";
import "./App.css";

// import ItemListContainer from "../src/components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import { ItemList, ItemDetail, Home } from "./pages/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/products" element={<ItemList />} />
          <Route exact path="products/:productsID" element={<ItemDetail />} />
        </Routes>

        {/* <ItemListContainer greetings={"Sitio en construcción. Vuelve luego."} /> */}
      </main>
    </div>
  );
}

export default App;
