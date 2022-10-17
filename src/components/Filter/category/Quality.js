import React from "react";
import FilterBTN from "../FilterBTN";

const Quality = ({ updateQuality, updatePageNumber }) => {
  let quality = ["480p", "720p", "1080p", "2160p", "3D"];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Calidad
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {quality.map((item, index) => {
            return (
              <FilterBTN
                name="quality"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateQuality}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quality;
