import React, {useState} from "react";
import "./services.css";
import {HiOutlineArrowRight} from "react-icons/hi";
import {LiaTimesSolid} from "react-icons/lia";
import {BiSolidPaint} from "react-icons/bi";
import {FaCubes, FaLaptopCode, FaPaintBrush, FaMobileAlt} from "react-icons/fa";
import {LuCode2} from "react-icons/lu";
import Sensor from "./Sensor";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  function toggleTab(index) {
    setToggleState(index);
  }

  const closeModal = () => {
    setToggleState(0);
  };

  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Article 1 */}
        <div className="services__content">
          <article className="services">
            <div>
              <FaCubes className="services__icon" />
              <h3 className="services__title">
                Product <br />
                Designer
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <HiOutlineArrowRight className="services__button-icon" />
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <LiaTimesSolid
                  className="service__modal-close"
                  onClick={closeModal}
                />

                <h3 className="services__modal-title">Product Designer</h3>
                <p className="services__modal-description">
                  With over three years of experience as a Frontend Developer
                  and UX Designer, I've consistently delivered top-notch work
                  for clients and companies, showcasing a commitment to
                  excellence.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <BiSolidPaint className="services__modal-icon" />
                    <p className="services__modal-info">
                      Craft visually appealing user interfaces
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Implement seamless web development
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <LuCode2 className="services__modal-icon" />
                    <p className="services__modal-info">
                      Design and implement engaging UX element interactions
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Develop user-centric websites
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Create impactful web solutions
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Article 2 */}
        <div className="services__content">
          <article className="services">
            <div>
              <FaMobileAlt className="services__icon" />
              <h3 className="services__title">
                UI/UX <br />
                Designer
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <HiOutlineArrowRight className="services__button-icon" />
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <LiaTimesSolid
                  className="service__modal-close"
                  onClick={closeModal}
                />

                <h3 className="services__modal-title">UI/UX Designer</h3>
                <p className="services__modal-description">
                  With over three years of experience, I excel as a Frontend
                  Developer and UX Designer, consistently delivering top-notch
                  solutions to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <FaCubes className="services__modal-icon" />
                    <p className="services__modal-info">
                      Craft engaging and innovative product designs
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <BiSolidPaint className="services__modal-icon" />
                    <p className="services__modal-info">
                      Develop visually appealing user interfaces
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <LuCode2 className="services__modal-icon" />
                    <p className="services__modal-info">
                      Create seamless UX element interactions
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Execute high-quality web development projects
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <LuCode2 className="services__modal-icon" />
                    <p className="services__modal-info">
                      Design impactful and cohesive brand identities
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Article 3 */}
        <div className="services__content">
          <article className="services">
            <div>
              <FaPaintBrush className="services__icon" />
              <h3 className="services__title">
                Visual <br /> Designer
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <HiOutlineArrowRight className="services__button-icon" />
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <LiaTimesSolid
                  className="service__modal-close"
                  onClick={closeModal}
                />

                <h3 className="services__modal-title">Visual Designer</h3>
                <p className="services__modal-description">
                  Boasting over three years of experience, I excel as a Frontend
                  Developer and UX Designer, consistently delivering top-notch
                  solutions to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <FaPaintBrush className="services__modal-icon" />
                    <p className="services__modal-info">
                      Craft visually stunning and creative designs
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <BiSolidPaint className="services__modal-icon" />
                    <p className="services__modal-info">
                      Develop captivating user interfaces
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <LuCode2 className="services__modal-icon" />
                    <p className="services__modal-info">
                      Create engaging UX element interactions
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Implement web development with a focus on aesthetics
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Execute visually impactful web development projects
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Sensor />
    </section>
  );
};

export default Services;
