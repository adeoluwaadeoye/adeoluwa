import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills That Power My Work</h5>
      <h2>Experience</h2>

      <div className="experience__wrapper container">
        {/* Technical Skills */}
        <div className="experience__category">
          <h3>Development & Tools</h3>
          <ul className="skills__list">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Styled Components",
              "Git & GitHub",
              "Figma",
            ].map((skill) => (
              <li className="skill__item" key={skill}>
                <BsPatchCheckFill className="skill__icon" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="experience__category">
          <h3>Soft Skills</h3>
          <ul className="skills__list">
            {[
              "Communication",
              "Problem-Solving",
              "Creativity",
              "Critical Thinking",
              "Collaboration",
              "Adaptability",
              "Time Management",
              "Attention to Detail",
              "Growth Mindset",
            ].map((skill) => (
              <li className="skill__item" key={skill}>
                <BsPatchCheckFill className="skill__icon" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

