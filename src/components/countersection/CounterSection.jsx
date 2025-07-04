import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./countersection.css";

const CounterSection = () => {
  const counters = [
    { count: 50, label: "Project" },
    { count: 30, label: "Clients served" },
    { count: 5, label: "Years of Experience" },
    { count: 15, label: "Technology Stacks Used" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="counter-section" ref={ref}>
      <h5>Crafting Code with Vision</h5>
      <h2>My Journey</h2>
      <div className="counter-overlay"></div>
      <div className="counter-wrapper container">
        <div className="counter-left">
          <p className="counter-description">
            My career began with a curiosity for how beautiful, functional websites are built. Over the years, I’ve grown into a frontend developer who blends design thinking with clean, maintainable code.
          </p>
          <p className="counter-description">
            From small business websites to full-scale platforms, I’ve helped clients turn ideas into interactive digital experiences using modern tools like React, Next.js, Tailwind CSS, and more.
          </p>
          <p className="counter-description">
            I’m always open to meaningful collaborations—whether you're building something new or improving an existing product. Let’s build something great together.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Collaborate</a>
        </div>

        <div className="counter-right">
          <ul className="counter-list">
            {counters.map((item, index) => (
              <li key={index} className="counter-item">
                <h3 className="counter-number">
                  {inView && <CountUp end={item.count} duration={6} suffix="+" />}
                </h3>
                <p className="counter-label">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
