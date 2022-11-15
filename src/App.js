import React from "react";
import { NavBar } from "./components/navBar";
// import { NavBar } from "./components";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/index";
import { ItemList, ItemDetail } from "./components/index";

import "./App.css";

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
      </main>
    </div>
  );
}

export default App;
