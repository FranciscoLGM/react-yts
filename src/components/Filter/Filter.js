import React from "react";
import Genres from "./category/Genres";
import Quality from "./category/Quality";
import Rating from "./category/Rating";
import Year from "./category/Year";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateGenres,
  updateQuality,
  updateRating,
  updateYear,
}) => {
  let clear = () => {
    updateGenres("");
    updateQuality("");
    updateRating("");
    updateYear("");
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
        <Genres
          updatePageNumber={updatePageNumber}
          updateGenres={updateGenres}
        />
        <Rating
          updatePageNumber={updatePageNumber}
          updateRating={updateRating}
        />
        <Year updatePageNumber={updatePageNumber} updateYear={updateYear} />
      </div>
    </div>
  );
};

export default Filter;
