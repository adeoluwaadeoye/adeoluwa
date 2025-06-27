import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={require("../../assets/logobg2.png")}
              alt="my_picture"
              className="img"
            />
          </div>
        </div>

        <div className="about__content">
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
