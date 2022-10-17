import React from "react";
import FilterBTN from "../FilterBTN";

const Rating = ({ updateRating, updatePageNumber }) => {
  let rating = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Clasificación
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
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
