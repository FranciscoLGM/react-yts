import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";
import defaultUser from "../../assets/images/default-user.png";
import noPoster from "../../assets/images/noposter.svg";

// Componentes
import CardSuggestions from "./CardSuggestions";

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
    download_count,
    date_uploaded,
    torrents,
    yt_trailer_code,
    description_full,
    background_image,
    large_screenshot_image1,
    large_screenshot_image2,
    large_screenshot_image3,
    cast,
  } = fetchedData;

  let api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

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
      className="pb-4"
    >
      <div className="container d-flex flex-column flex-wrap justify-content-center text-light text-shadow">
        <div className="d-flex flex-row mt-3 pt-3 gap-5">
          <div className="col-4">
            <div className="img-details border border-3 border-light rounded">
              <img
                className="img-fluid fs-5"
                src={large_cover_image || noPoster}
                alt={title}
              />
            </div>
          </div>

          <div className="col-4">
            <h1 className="fw-bold">{title}</h1>
            <h2 className="fs-5 mb-2 mt-4">{`Año: ${year}`}</h2>
            <h2 className="fs-5 mb-2">{`Idioma: ${language?.toUpperCase()}`}</h2>
            <h2 className="fs-5 mb-2">{`Género: ${String(genres)
              .split(",")
              .join("/")}`}</h2>
            <h2 className="fs-5 mb-2">{`Calificación: ${rating}`}</h2>
            <h2 className="fs-5 mb-2">{`Descargas: ${download_count}`}</h2>
            <h2 className="fs-5 mb-2">{`Likes: ${like_count}`}</h2>
            <h2 className="fs-5 mb-5">{`Subida el: ${date_uploaded
              ?.split("-")
              .join("/")
              .slice(0, 10)}`}</h2>
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
          <div className="container col-3">
            <div className="row">
              <CardSuggestions />
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
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
          <div className="grid">
            <div className="g-col-6 mt-5">
              <h2 className="pb-3 pt-3 fw-bold">Imágenes</h2>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-6 ">
                  <img
                    className="img-fluid pe-1 pb-1 rounded"
                    src={large_screenshot_image1}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid pb-1 rounded"
                    src={large_screenshot_image2}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <img
                    className="img-fluid rounded"
                    src={large_screenshot_image3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="col-6">
            <div className="mt-5">
              <h2 className="pb-3 pt-3 fw-bold">Argumento</h2>
              <p>{description_full}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="mt-5">
              <h2 className="pb-3 pt-3 fw-bold">Reparto principal</h2>
              <>
                {cast?.map((cast) => (
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="img-fluid rounded-circle border border-light cast mb-2"
                      src={cast.url_small_image || defaultUser}
                      alt=""
                    />
                    <p className="fs-6">
                      <span className="text-secondary fw-light">
                        {cast.name}
                      </span>
                      {(() => {
                        return cast.character_name.length > 1
                          ? ` como ${cast.character_name}`
                          : "";
                      })()}
                    </p>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
