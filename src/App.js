import React from "react";
import { NavBar } from "./components/navBar";
// import { NavBar } from "./components";

import { Route, Routes } from "react-router-dom";
import { Home, ItemListContainer, ItemDetailContainer } from "./pages/index";
import { ItemCategory } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/products/:productsID" element={<ItemDetailContainer />} />
          <Route exact path="/category/:categoryName" element={<ItemCategory />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
