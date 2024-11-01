import React, {useState} from "react";
import "./nav.css";
import {IoHomeOutline} from "react-icons/io5";
import {CiUser} from "react-icons/ci";
import {BsBook} from "react-icons/bs";
import {FaBriefcase} from "react-icons/fa";
import {MdOutlineMessage} from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {/* <a href="#home" className={activeNav === "#home" ? "active" : ""}>
        <IoHomeOutline />
      </a> */}
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
