import React, {useState, useEffect} from "react";
import "./services.css";
import {HiOutlineArrowRight} from "react-icons/hi";
import {LiaTimesSolid} from "react-icons/lia";
import {BiSolidPaint} from "react-icons/bi";
import {FaCubes, FaLaptopCode, FaPaintBrush, FaMobileAlt} from "react-icons/fa";
import {LuCode2} from "react-icons/lu";
import VisibilitySensor from "react-visibility-sensor";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  function toggleTab(index) {
    setToggleState(index);
  }

  const closeModal = () => {
    setToggleState(0);
  };

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountersVisible(true);
    }
  };

  useEffect(() => {
    if (countersVisible) {
      const $counters = document.querySelectorAll(".counter");

      $counters.forEach(($counter) => {
        $counter.innerText = "0";
        const target = Number($counter.getAttribute("data-target"));
        const increment = target / 200;

        const updateCounter = () => {
          const count = Number($counter.innerText);
          if (count < target) {
            $counter.innerText = `+${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 20);
          }
        };

        updateCounter();
      });
    }
  }, [countersVisible]);

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

                  <li className="services__modal-service">
                    <LuCode2 className="services__modal-icon" />
                    <p className="services__modal-info">
                      Shape compelling brand designs
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
                    <FaLaptopCode className="services__modal-icon" />
                    <p className="services__modal-info">
                      Implement cutting-edge web development techniques
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

                  <li className="services__modal-service">
                    <LuCode2 className="services__modal-icon" />
                    <p className="services__modal-info">
                      Design cohesive brand identities for a strong visual
                      presence
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Service Counters */}
      <VisibilitySensor
        onChange={handleVisibilityChange}
        partialVisibility={true}
      >
        <div className="container service__counters">
          {/* Counter 1 */}
          <div className="counter__item">
            <div className="counter" data-target="4"></div>
            <small className="counter__text">Years of Experience</small>
          </div>

          {/* Counter 2 */}
          <div className="counter__item">
            <div className="counter" data-target="60"></div>
            <small className="counter__text">Satisfied Customers</small>
          </div>

          {/* Counter 3 */}
          <div className="counter__item">
            <div className="counter" data-target="115"></div>
            <small className="counter__text">Design Items</small>
          </div>

          {/* Counter 4 */}
          <div className="counter__item">
            <div className="counter" data-target="200"></div>
            <small className="counter__text">Clients served</small>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
};

export default Services;
