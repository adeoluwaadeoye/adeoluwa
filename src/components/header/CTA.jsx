import React from "react";
import CV from "../../assets/cv.pdf";
import {CiLocationArrow1} from "react-icons/ci";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        <span>Say Hello</span>
        <span>
          <CiLocationArrow1 className="header__icon" />
        </span>
      </a>
    </div>
  );
};

export default CTA;
