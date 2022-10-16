import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";

// Componentes

import Card from "./components/Card/Card";
// import Filter from "./components/Filter/Filter";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let { data } = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let api = `https://yts.mx/api/v2/list_movies.json?page=${pageNumber}&query_term=${search}`;

  useEffect(() => {
    (async function () {
      let response = await fetch(api).then((res) => res.json());
      updateFetchedData(response);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Películas</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={data.movies} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={data}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}

export default App;
