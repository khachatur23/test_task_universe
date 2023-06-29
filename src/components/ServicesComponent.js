import { useState } from "react";
import "../styles/Font.css";
import "../styles/Services.css";
import Modal from "./Modal";

function ServicesComponent() {
  const [showModalFeedbackForm, setShowModalFeedbackForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleSubmitModalFeedback = () => {
    setShowModalFeedbackForm(false);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div>
      {showModal && <Modal />}
      {showModalFeedbackForm && (
        <div className="modal-feedback-container">
          <div className="close-container">
            <img
              src={require("../img/Vector33333.png")}
              alt="close"
              className="close-button"
              onClick={() => setShowModalFeedbackForm(false)}
            />
          </div>
          <p className="modal-feedback-title">ՊԱՏՎԻՌԵԼ ԶԱՆԳ</p>
          <div>
            <input
              placeholder="Անուն"
              className="feedback-modal-input-small"
            ></input>
            <input
              placeholder="Ազգանուն"
              className="feedback-modal-input-small"
            ></input>
          </div>
          <input
            placeholder="Հեռախեսահամար"
            className="feedback-modal-input"
          ></input>
          <textarea
            placeholder="Ծառայության անվանումը"
            className="feedback-modal-textarea"
          ></textarea>
          <button
            className="show-more-button"
            onClick={() => handleSubmitModalFeedback()}
          >
            ՊԱՏՎԻՐԵԼ
          </button>
        </div>
      )}
      <div className="news-container">
        <div className="news-text-container">
          <p className="news-title">ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</p>
          <p className="news-text">
            Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր,
            թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ
            մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
          <button
            className="show-more-button"
            onClick={() => setShowModalFeedbackForm(true)}
          >
            ՊԱՏՎԻՐԵԼ ԶԱՆԳ
          </button>
        </div>
        <div className="news-image-container">
          <img
            src={require("../img/Rectangle 10213.png")}
            alt="news"
            className="news-container-photo"
          />
          <img
            src={require("../img/Ellipse 3.png")}
            alt="ellipse"
            className="news-container-ellipse"
          />
        </div>
      </div>
      <div className="news-container">
        <div className="news-image-container">
          <img
            src={require("../img/Rectangle 103.png")}
            alt="news"
            className="news-container-photo-left"
          />
          <img
            src={require("../img/Ellipse 29.png")}
            alt="ellipse"
            className="news-container-ellipse-left"
          />
        </div>
        <div className="news-text-container">
          <p className="news-title">ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ</p>
          <p className="news-text">
            Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։ orem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
          <button
            className="show-more-button"
            onClick={() => setShowModalFeedbackForm(true)}
          >
            ՊԱՏՎԻՐԵԼ ԶԱՆԳ
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
