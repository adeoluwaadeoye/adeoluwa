import React, {useState} from "react";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {LiaTimesSolid} from "react-icons/lia";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a
            href={props.link}
            className="arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal modal-blog">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              {/* Link to full article */}
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn__link cta"
              >
                See more <FaArrowUpRightFromSquare />
              </a>

              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <LiaTimesSolid className="modal__icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
