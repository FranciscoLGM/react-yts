import React from "react";
import FilterBTN from "../FilterBTN";

const Rating = ({ updateRating, updatePageNumber }) => {
  let rating = [9, 8, 7, 6, 5, 4, 3, 2, 1];
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
