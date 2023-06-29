import "../styles/Font.css";
import "../styles/Feedback.css";
import { useState } from "react";
import Modal from "./Modal";

function FeedbackContainer() {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };
  return (
    <div className="feedback-container">
      {showModal && <Modal />}
      <div className="feedback-left-column">
        <p className="feedback-info">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the lik
        </p>
        <img
          src={require("../img/Rectangle 100.png")}
          alt="ellipse"
          className="feedback-container-photo"
        />
        <img
          src={require("../img/Ellipse 29.png")}
          alt="ellipse"
          className="feedback-container-ellipse"
        />
      </div>
      <div className="feedback-form">
        <div className="feedback-title">ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</div>
        <input placeholder="Անուն" className="feedback-input"></input>
        <input placeholder="Էլ․հասցե" className="feedback-input"></input>
        <textarea
          placeholder="Հաղորդագրություն"
          className="feedback-textarea"
        ></textarea>
        <button
          className="feedback-submit-btn"
          onClick={() => handleFormSubmit()}
        >
          ՈՒՂԱՐԿԵԼ
        </button>
      </div>
    </div>
  );
}

export default FeedbackContainer;
