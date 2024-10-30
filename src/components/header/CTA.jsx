import React from "react";
import CV from "../../assets/cv1.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="CV" className="btn">
        <span>Download CV</span>
      </a>
      <a href="#contact" className="btn btn-primary">
        <span>Let's Talk</span>
      </a>
    </div>
  );
};

export default CTA;
