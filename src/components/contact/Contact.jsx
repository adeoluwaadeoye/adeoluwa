import React from "react";
import "./contact.css";
import AdvancedForm from "./AdvancedForm"; // Assuming AdvancedForm is in the same directory

import {MdOutlineMail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {SiWhatsapp} from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="lowercase">adeoluadeoye7@gmail.com</h5>
            <a
              href="mailto:adeoluadeoye7@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5 className="uppercase">Adeoluwa Adeoye</h5>
            <a
              href="https://m.me/adeoluwa.adeoye.90"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348140898790</h5>
            <a
              href="https://wa.me/+2348140898790"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        {/* Include the AdvancedForm component */}
        <AdvancedForm />
      </div>
    </section>
  );
};

export default Contact;
