import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ page, results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, medium_cover_image, title, year, language } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img
              className={`${styles.img} img-fluid text-center`}
              src={medium_cover_image}
              alt={title}
            />
          </div>
          <div className={`${styles.content}`}>
            <div className="fs-6 fw-bold">{title}</div>
            <div className="fs-6">{year}</div>
          </div>
          {(() => {
            if (language) {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {language.toUpperCase()}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
