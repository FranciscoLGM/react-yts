import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";

// Componentes

import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import CardDetails from "./components/Card/CardDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let { movie_count, movies } = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [genres, updateGenres] = useState("");
  let [quality, updateQuality] = useState("");
  let [rating, updateRating] = useState("");
  let [sortBy, updateSortBy] = useState("");

  let api = `https://yts.mx/api/v2/list_movies.json?page=${pageNumber}&query_term=${search}&limit=15&quality=${quality}&genre=${genres}&minimum_rating=${rating}&sort_by=${sortBy}`;

  useEffect(() => {
    (async function () {
      let response = await fetch(api).then((res) => res.json());
      updateFetchedData(response.data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Películas</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <Pagination
        movieCount={movie_count}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            updateQuality={updateQuality}
            updateGenres={updateGenres}
            updateRating={updateRating}
            updateSortBy={updateSortBy}
            updatePageNumber={updatePageNumber}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={movies} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        movieCount={movie_count}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
