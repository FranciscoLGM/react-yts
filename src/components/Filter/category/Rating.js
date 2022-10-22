import React from "react";
import FilterBTN from "../FilterBTN";

const Rating = ({ updateRating, updatePageNumber }) => {
  let rating = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Clasificación
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {rating.map((item, index) => {
            return (
              <FilterBTN
                name="rating"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateRating}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rating;
