import React from "react";

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(() => {
              switch (input) {
                // Clasificación
                case "9+":
                  return 9;
                case "8+":
                  return 8;
                case "7+":
                  return 7;
                case "6+":
                  return 6;
                case "5+":
                  return 5;
                case "4+":
                  return 4;
                case "3+":
                  return 3;
                case "2+":
                  return 2;
                case "1+":
                  return 1;
                // Ordenar por
                case "Título":
                  return "title";
                case "Año":
                  return "year";
                case "Calificación":
                  return "rating";
                case "Descargas":
                  return "download_count";
                case "Likes":
                  return "like_count";
                case "Fecha de subida":
                  return "date_added";
                //Genero
                case "Acción":
                  return "Action";
                case "Aventura":
                  return "Adventure";
                case "Animación":
                  return "Animation";
                case "Biografía":
                  return "Biography";
                case "Comedia":
                  return "Comedy";
                case "Crimen":
                  return "Crime";
                case "Documental":
                  return "Documentary";
                case "Drama":
                  return "Drama";
                case "Familia":
                  return "Family";
                case "Fantasía":
                  return "Fantasy";
                case "Cine negro":
                  return "film-noir";
                case "Concurso":
                  return "game-show";
                case "Historia":
                  return "History";
                case "Terror":
                  return "Horror";
                case "Música":
                  return "Music";
                case "Musical":
                  return "Musical";
                case "Misterio":
                  return "Mystery";
                case "Noticias":
                  return "News";
                case "Reality":
                  return "reality-tv";
                case "Romance":
                  return "Romance";
                case "Ciencia Ficción":
                  return "Sci-Fi";
                case "Deporte":
                  return "sport";
                case "Tertulia":
                  return "talk-show";
                case "Suspenso":
                  return "Thriller";
                case "Bélico":
                  return "War";
                case "Del oeste":
                  return "Western";

                default:
                  return input;
              }
            });
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
