import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Card.module.scss";

const CardSuggestions = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { movies } = fetchedData;

  let api = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`;

  useEffect(() => {
    (async function () {
      let response = await fetch(api).then((res) => res.json());
      updateFetchedData(response.data);
    })();
  }, [api]);

  return (
    <>
      <h2 className="fs-5 mb-5 text-center">Películas sugeridas:</h2>
      {movies?.map((movie) => (
        <Link
          style={{ textDecoration: "none" }}
          to={`/${movie.id}`}
          className="col-lg-6 col-md-6 col-sm-6 col-6 mb-4 position-relative text-withe"
        >
          <div
            className={`${styles.suggestions} d-flex flex-column justify-content-center`}
          >
            <img
              className={`${styles.img} img-fluid text-center rounded`}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardSuggestions;
