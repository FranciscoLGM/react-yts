import React from "react";
import FilterBTN from "../FilterBTN";

const Genres = ({ updateGenres, updatePageNumber }) => {
  let genres = [
    "Acción",
    "Aventura",
    "Animación",
    "Biografía",
    "Comedia",
    "Crimen",
    "Documental",
    "Drama",
    "Familia",
    "Fantasía",
    "Cine negro",
    "Concurso",
    "Historia",
    "Terror",
    "Música",
    "Musical",
    "Misterio",
    "Noticias",
    "Reality",
    "Romance",
    "Ciencia Ficción",
    "Deporte",
    "Tertulia",
    "Suspenso",
    "Bélico",
    "Del oeste",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Género
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genres.sort().map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="genres"
              task={updateGenres}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
