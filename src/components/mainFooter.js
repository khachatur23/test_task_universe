import "../styles/Font.css";
import "../styles/Footer.css";

function MainFooter() {
  return (
    <div className="footer-container">
      <div className="footer-menu">
        <div className="footer-menu-logo-column">
          <img
            src={require("../img/logo-white.png")}
            alt="logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-menu-column">
          <div className="footer-menu-column-title">ԱՐՏԱԴՐԱՆՔ</div>
          <ul>
            <li>ՀԵՂՈՒԿՆԵՐ</li>
            <li>ՔՍՈՒՔՆԵՐ</li>
            <li>ՅՈՒՂԵՐ</li>
            <li>ՈԳԵԹՈՒՐՄԵՐ</li>
            <li>ՓՈՇԻՆԵՐ</li>
            <li>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>
          </ul>
        </div>
        <div className="footer-menu-column">
          <div className="footer-menu-column-title">ԿԱՊ ՄԵԶ ՀԵՏ</div>
          <div className="footer-contact-row">
            <img
              src={require("../img/fluent_call-24-filled.png")}
              alt="logo"
              className="footer-contact-logo"
            />
            <p>Զանգահարեք մեզ: +374 90 000 000</p>
          </div>
          <div className="footer-contact-row">
            <img
              src={require("../img/pepicons_letter.png")}
              alt="logo"
              className="footer-contact-logo"
            />
            <p>Էլ հասցե: @mail.ru</p>
          </div>
          <div className="footer-contact-row">
            <img
              src={require("../img/ci_location.png")}
              alt="logo"
              className="footer-contact-logo"
            />
            <p>Երևան</p>
          </div>
        </div>
        <div className="footer-menu-column">
          <div className="footer-menu-column-title">ՓՆՏՐԵՔ ՄԵԶ։</div>
          <div className="footer-sn-row">
            <img
              src={require("../img/instagram.png")}
              alt="logo-ig"
              className="footer-logo-sn-ig"
            />{" "}
            <img
              src={require("../img/Vector.png")}
              alt="logo-tw"
              className="footer-logo-sn"
            />{" "}
            <img
              src={require("../img/Vector (1).png")}
              alt="logo-fb"
              className="footer-logo-sn"
            />
          </div>
        </div>
      </div>
      <div className="footer-info-row">
        <p className="footer-info-text">
          By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են
        </p>
      </div>
    </div>
  );
}

export default MainFooter;
