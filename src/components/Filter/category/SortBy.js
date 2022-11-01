import React from "react";
import FilterBTN from "../FilterBTN";

const SortBy = ({ updateSortBy, updatePageNumber }) => {
  let sortBy = [
    "Año",
    "Likes",
    "Título",
    "Descargas",
    "Calificación",
    "Fecha de subida",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          Ordenar por
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {sortBy.map((item, index) => {
            return (
              <FilterBTN
                name="sortBy"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSortBy}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortBy;
