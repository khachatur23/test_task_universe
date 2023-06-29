import "../styles/Font.css";
import "../styles/Feedback.css";
function Modal() {
  return (
    <div className="modal-container">
      <p className="modal-title">ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</p>
      <p className="modal-text">
        ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ
      </p>
      <img
        src={require("../img/Ellipse 12.png")}
        alt="ellipse"
        className="modal-logo-circle"
      />
      <img
        src={require("../img/Vector1313.png")}
        alt="ellipse"
        className="modal-logo"
      />
    </div>
  );
}

export default Modal;
