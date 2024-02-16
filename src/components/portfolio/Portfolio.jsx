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
              src={require("../../assets/portfolio1.jpg")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>TastyTopz</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CodeWhirl1/fudo"
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
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio2.jpg")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>FlavorFusion</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CodeWhirl1/FlavorFusion"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://myflavorfusion.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio3.jpg")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>VisualHunt</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CodeWhirl1/VisualHunt"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://visualhunt.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
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
          <h3>BuyRyte</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CodeWhirl1/BuyRyte"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://buyryte.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio6.jpg")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>CraveWave</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CodeWhirl1/foodapp"
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
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={require("../../assets/portfolio4.jpg")}
              alt="my_project"
              className="img"
            />
          </div>
          <h3>WoodieHub</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CodeWhirl1/woodex"
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
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
