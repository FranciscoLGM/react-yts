import React from "react";
import FilterBTN from "../FilterBTN";

const Year = ({ updateYear, updatePageNumber }) => {
  let year = ["Proximamente"];
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
          Año
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {year.map((item, index) => {
            return (
              <FilterBTN
                name="sort_by"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateYear}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Year;
