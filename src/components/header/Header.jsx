import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import {Typewriter} from "react-simple-typewriter";

const Header = () => {
  // Placeholder function for when typing is done
  const handleDone = () => {
    // Your code for when typing is done
  };

  // Placeholder function for when each character is typed
  const handleType = (text) => {
    // Your code for when each character is typed
  };

  return (
    <header id="home">
      <div className="container header__container">
        <h3>
          <span className="my__name">
            Adeoluwa Adeoye <span className="wave">👋</span>
          </span>
        </h3>
        <h2>
          A
          <span>
            <Typewriter
              words={[" Front-End Developer ", " UX Designer."]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h2>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src={require("../../assets/me.png")}
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
