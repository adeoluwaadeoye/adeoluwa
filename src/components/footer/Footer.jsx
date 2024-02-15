import React from "react";
import "./footer.css";
import {FaGithub} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {FaTiktok} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <div className="me_">
          <img
            width={120}
            height={140}
            src={require("../../assets/me.png")}
            alt="my_picture"
            className="img"
          />
          ADEOLUWA
        </div>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/CodeWhirl" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adeoyeadeoluwa"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.twitter.com/codewhirl"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.tiktok.com/@codewhirl"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.facebook.com/adeoluwa.adeoye.90"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ADEOLUWA ADEOYE. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
