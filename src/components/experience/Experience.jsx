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
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>

            <div className="experience-details">
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <div className="experience__uxdesign">
            <h3>UX Design Skills</h3>
            <div className="experience__content">
              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>User Research</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Wireframing</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Prototyping</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Usability Testing</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>UI/UX Design Principles</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience-details">
                <BsPatchCheckFill className="details__icon" />
                <div>
                  <h4>Figma</h4>
                  <small className="text-light">Experienced</small>
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
