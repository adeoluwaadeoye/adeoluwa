import React from "react";
import {FaLinkedin} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adeoyeadeoluwa/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.github.com/CodeWhril1"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.tiktok.com/@codewhirl?_t=8jNhBHfA52L&_r=1"
        target="_blank"
        rel="noreferrer"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default HeaderSocial;
