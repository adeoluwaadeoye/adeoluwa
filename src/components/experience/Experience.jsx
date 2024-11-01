import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Development & Design</h3>
          <div className="experience__content">
            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Git & Github</h4>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>React</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <div className="experience__uxdesign">
            <h3>Soft Skills</h3>
            <div className="experience__content">
              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Collaboration</h4>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Problem-Solving</h4>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Communication</h4>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Adaptability</h4>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Flexibility</h4>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Time Management</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
