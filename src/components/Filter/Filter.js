import React from "react";
import Genres from "./category/Genres";
import Quality from "./category/Quality";
import Rating from "./category/Rating";
import SortBy from "./category/SortBy";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateGenres,
  updateQuality,
  updateRating,
  updateSortBy,
}) => {
  let clear = () => {
    updateGenres("");
    updateQuality("");
    updateRating("");
    updateSortBy("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Limpiar filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Quality
          updatePageNumber={updatePageNumber}
          updateQuality={updateQuality}
        />
        <Rating
          updatePageNumber={updatePageNumber}
          updateRating={updateRating}
        />
        <Genres
          updatePageNumber={updatePageNumber}
          updateGenres={updateGenres}
        />
        <SortBy
          updatePageNumber={updatePageNumber}
          updateSortBy={updateSortBy}
        />
      </div>
    </div>
  );
};

export default Filter;
