import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>
          Hi, I'm <br />
          <span className="my__name">
            Adeoluwa Adeoye <span className="wave">👋</span>
          </span>
        </h3>
        <small className="text-light">
          Frontend Developer & UX Designer, shaping seamless digital
          experiences.
        </small>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src={require("../../assets/me2.png")}
            alt="my_picture"
            className="img"
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
