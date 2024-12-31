import React from "react";
import "./footer.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaFacebookF, FaXTwitter, FaTiktok} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href="#home" className="footer__logo">
        <div className="me_">ADEOLUWA ADEOYE</div>
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
        <a
          href="https://github.com/adeoluwaadeoye"
          target="_blank"
          rel="noreferrer"
        >
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
          href="https://www.twitter.com/adeoluwaadeoye7"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.tiktok.com/@adeoluwa_codes?_t=8k8AytweAI2&_r=1"
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
        <small>
          &copy; {currentYear} ADEOLUWA ADEOYE. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
