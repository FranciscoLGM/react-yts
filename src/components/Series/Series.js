import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import styles from "../Card/Card.module.scss";

const Series = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let { torrents } = fetchedData;

  let api = `https://eztv.re/api/get-torrents?page=1`;

  useEffect(() => {
    (async function () {
      let response = await fetch(api).then((res) => res.json());
      updateFetchedData(response);
    })();
  }, [api]);

  return (
    <div className="col-lg-12 col-12 container">
      <div className="row">
        {torrents?.map((serie) => (
          <div
            style={{ textDecoration: "none" }}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative d-flex flex-column justify-content-between text-dark"
          >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img
                className={`${styles.img} img-fluid text-center`}
                src={serie.large_screenshot}
                alt={serie.title}
              />
            </div>
            <div className={`${styles.content}`}>
              <div className="fs-6 fw-bold">{serie.title}</div>
              {/* <div className="fs-6">{year}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
