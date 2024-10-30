import React from "react";
import "./about.css";
import {FaAward} from "react-icons/fa6";
import {LuUsers} from "react-icons/lu";
import {IoFolderOpenOutline} from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              width={340}
              height={340}
              src={require("../../assets/logobg2.png")}
              alt="my_picture"
              className="img"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <LuUsers className="about__icon" />
              <h5>clients</h5>
              <small>60+ Clients</small>
            </article>

            <article className="about__card">
              <IoFolderOpenOutline className="about__icon" />
              <h5>Projects</h5>
              <small>115+ Completed</small>
            </article>
          </div>

          <div>
            <h4>Front-End Developer & UX Designer 🎨</h4>
            <p>
              Crafting seamless digital experiences through code and design. I
              thrive on transforming ideas into intuitive and visually stunning
              interfaces. Let's redefine the digital landscape together!💻
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
