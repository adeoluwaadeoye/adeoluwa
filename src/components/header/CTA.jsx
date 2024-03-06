import React from "react";
import CV from "../../assets/cv.pdf";
import {CiLocationArrow1} from "react-icons/ci";
import {GoDownload} from "react-icons/go";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        <span>Say Hello</span>
        <span>
          <CiLocationArrow1 className="header__icon" />
        </span>
      </a>
      <a href={CV} download className="btn">
        <span>Download CV</span>
        <span>
          <GoDownload className="header__icon" />
        </span>
      </a>
    </div>
  );
};

export default CTA;
