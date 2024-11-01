import React from "react";
import "./about.css";
import {FaAward} from "react-icons/fa6";
import {LuUsers} from "react-icons/lu";
import {IoFolderOpenOutline} from "react-icons/io5";
import {FaCode} from "react-icons/fa6";

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
              <FaCode className="about__icon" />
              <h5>Specialization</h5>
              <small>Frontend</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <LuUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>

            <article className="about__card">
              <IoFolderOpenOutline className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <div className="about__wrapper">
            <h4>Front-End Developer & UX Designer</h4>
            <p>
              Adeoluwa is a dedicated <strong>Software Engineer</strong>{" "}
              specializing in frontend development and UX design. He is
              committed to creating responsive, visually appealing applications
              that deliver exceptional user experiences. With a strong
              foundation in UX principles and a keen eye for detail, he builds
              intuitive and accessible solutions tailored to diverse user needs.
            </p>

            <p>
              With over three years of experience, Adeoluwa has successfully
              contributed to various projects, ensuring quality and efficiency
              throughout the development process. His passion for innovation
              drives him to stay updated with industry trends, allowing him to
              bring fresh perspectives to each project while striving for
              excellence in both functionality and design.
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
