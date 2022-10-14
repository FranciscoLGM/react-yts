import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";

import logo from "./logo.svg";

// Componentes

import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">Card component will be placed here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
