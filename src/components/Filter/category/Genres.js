import React from "react";
import FilterBTN from "../FilterBTN";

const Genres = ({ updateGenres, updatePageNumber }) => {
  let genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "film-noir",
    "game-show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "reality-tv",
    "Romance",
    "Sci-Fi",
    "sport",
    "talk-show",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Género
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genres.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="genres"
              task={updateGenres}
              updatePageNumber={updatePageNumber}
              input={item.charAt(0).toUpperCase() + item.slice(1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
