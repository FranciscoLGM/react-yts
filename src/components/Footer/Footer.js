import React from "react";
import github from "../../assets/images/github-alt.svg";
import codepen from "../../assets/images/codepen.svg";
import linkedin from "../../assets/images/linkedin-in.svg";
import telegram from "../../assets/images/telegram.svg";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="bg-light p-2">
      <section className="container d-flex flex-column justify-content-center">
        <section className="d-flex justify-content-center gap-4">
          <article className="pt-3" style={{ width: "25px" }}>
            <a
              href="https://codepen.io/franciscolopezg/pens/public"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={codepen} alt="Icono de Codepen" />
            </a>
          </article>
          <article className="pt-3" style={{ width: "25px" }}>
            <a
              href="https://github.com/FranciscoLGM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Icono de GitHub" />
            </a>
          </article>
          <article className="pt-3" style={{ width: "25px" }}>
            <a
              href="https://linkedin.com/in/francisco-lopez-garciamayorga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Icono de LinkedIn" />
            </a>
          </article>
          <article className="pt-3" style={{ width: "25px" }}>
            <a
              href="https://t.me/Francisco_LopezG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} alt="Icono de Telegram" />
            </a>
          </article>
        </section>
        <article>
          <p className="fs-6 pt-3 text-center">
            Codeado con ❤️ - Copyright © {year.getFullYear()} - Derechos
            reservados - Fuente: YTS
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
