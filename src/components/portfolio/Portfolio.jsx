import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio1.png")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>TastyTopz</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/adeoluwaadeoye/fudo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://tastytopz.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio2.png")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>Zyrotech</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/adeoluwaadeoye/zyrotech"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://zyrotech.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio3.png")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3> BuildTek</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/adeoluwaadeoye/saotech"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://saotech.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio5.png")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>E-Store</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/adeoluwaadeoye/e-store"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://crystalshopdemo.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio6.png")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>CraveWave</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/adeoluwaadeoye/CraveWave"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://cravewave.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio4.png")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>WoodieHub</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/adeoluwaadeoye/woodex"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://woodiehub.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
