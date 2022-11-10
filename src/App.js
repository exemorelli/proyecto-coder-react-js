// CÓDIGO POR DEFECTO
/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
import React from "react";
import "./App.css";
import NavBar from "../src/components/NavBar.js";
// import ItemListContainer from "../src/components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import { Home, Products } from "./pages/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="products" element={<Products />} /> */}
          <Route exact path="/:productID" element={<Products />} />
        </Routes>
        {/* <ItemListContainer greetings={"Sitio en construcción. Vuelve luego."} /> */}
      </main>
    </div>
  );
}

export default App;
