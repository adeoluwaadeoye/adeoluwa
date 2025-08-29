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
        href="https://www.github.com/adeoluwaadeoye"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.tiktok.com/@adeoluwa_codes?_t=ZS-8zHMGRglTO5&_r=1"
        target="_blank"
        rel="noreferrer"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default HeaderSocial;
