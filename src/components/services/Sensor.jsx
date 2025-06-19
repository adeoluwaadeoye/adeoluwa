import React, { useEffect, useState, useMemo } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { FaPlus } from "react-icons/fa6";
import { FaBrain, FaLaptopCode, FaHandshake, FaPaintBrush } from "react-icons/fa";
import "./sensor.css"


const ServiceCounters = () => {
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    items: 0,
    experience: 0,
  });

  const targets = useMemo(
    () => ({
      projects: 30,
      clients: 20,
      items: 25,
      experience: 5,
    }),
    []
  );

  useEffect(() => {
    if (visible && !hasAnimated) {
      Object.keys(targets).forEach((key) => {
        let start = 0;
        const end = targets[key];
        const duration = 3000; // 3 seconds for smooth counting
        const increment = end / (duration / 40);

        const counter = setInterval(() => {
          start += increment;
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: Math.min(Math.ceil(start), end),
          }));

          if (start >= end) {
            clearInterval(counter);
          }
        }, 50);
      });

      // Mark the counters as animated to prevent re-running
      setHasAnimated(true);
    }
  }, [visible, hasAnimated, targets]);

  return (
    <VisibilitySensor onChange={setVisible} partialVisibility={true}>
      <div className="container service__counters">
        {/* Counter for Experience */}
        <div className="counter__item">
          <div className="counter">
            {counts.experience}
            <FaPlus className="counter-icon" />
          </div>
          <small className="counter__text">
            Years of Experience <FaBrain className="counter__emoji" />
          </small>
        </div>

        {/* Counter for Projects */}
        <div className="counter__item">
          <div className="counter">
            {counts.projects}
            <FaPlus className="counter-icon" />
          </div>
          {/* <small className="counter__text">Projects</small> */}
          <small className="counter__text">
            Projects <FaLaptopCode className="counter__emoji" />
          </small>
        </div>

        {/* Counter for Clients */}
        <div className="counter__item">
          <div className="counter">
            {counts.clients}
            <FaPlus className="counter-icon" />
          </div>
          {/* <small className="counter__text">Clients Served</small> */}
          <small className="counter__text">
            Clients Served <FaHandshake className="counter__emoji" />
          </small>
        </div>

        {/* Counter for Design Items */}
        <div className="counter__item">
          <div className="counter">
            {counts.items}
            <FaPlus className="counter-icon" />
          </div>
          <small className="counter__text">
            Design Items <FaPaintBrush className="counter__emoji" />
          </small>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default ServiceCounters;
