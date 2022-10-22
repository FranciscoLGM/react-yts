import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let {
    large_cover_image,
    title,
    language,
    year,
    genres,
    rating,
    like_count,
    torrents,
    yt_trailer_code,
    description_full,
    background_image,
  } = fetchedData;

  let api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

  useEffect(() => {
    (async function () {
      let response = await fetch(api).then((res) => res.json());
      updateFetchedData(response.data.movie);
    })();
  }, [api]);

  return (
    <div
      style={{
        backgroundImage: `URL(${background_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex flex-column flex-wrap justify-content-center text-white">
        <div className="d-flex flex-row mt-5 gap-5">
          <div className="grid">
            <div className="g-col-6 img-details border border-3 border-light rounded">
              <img className="img-fluid" src={large_cover_image} alt={title} />
            </div>
          </div>

          <div className="grid">
            <div className="g-col-6">
              <h1 className="fw-bold">{title}</h1>
              <h2 className="fs-5 mb-2 mt-4">{`Año: ${year}`}</h2>
              <h2 className="fs-5 mb-2">{`Idioma: ${String(
                language
              ).toUpperCase()}`}</h2>
              <h2 className="fs-5 mb-2">{`Género: ${String(genres)
                .split(",")
                .join("/")}`}</h2>
              <h2 className="fs-5 mb-2">{`Clasificación: ${rating}`}</h2>
              <h2 className="fs-5 mb-5">{`Likes: ${like_count}`}</h2>
              <h2 className="fs-5 mb-2">Disponible en:</h2>
              <div>
                <ul className="d-flex flex-wrap gap-3">
                  {torrents?.map((torrent) => (
                    <li>
                      <a className="btn btn-dark mt-2" href={torrent.url}>
                        {`${torrent.quality}.${
                          torrent.type.charAt(0).toUpperCase() +
                          torrent.type.slice(1)
                        }`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="grid mt-5">
            <h2 className="pb-3 pt-3 fw-bold">Trailer</h2>
            <div className="g-col-6">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${yt_trailer_code}`}
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="grid">
            <div className="g-col-6 mt-5">
              <h2 className="pb-3 pt-3 fw-bold">Argumento</h2>
              <p>{description_full}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
