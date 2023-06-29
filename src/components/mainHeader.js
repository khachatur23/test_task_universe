import { useNavigate } from "react-router-dom";
import "../styles/Font.css";
import "../styles/Header.css";

function MainHeader() {
  const navigate = useNavigate();

  const handleOpenPage = (name) => {
    navigate(`/${name}`);
  };

  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img
          src={require("../img/logo.png")}
          alt="logo"
          className="header-logo"
        />
      </div>
      <div className="header-menu">
        <div className="header-menu-point" onClick={() => handleOpenPage("")}>
          ԳԼԽԱՎՈՐ
        </div>
        <div
          className="header-menu-point"
          onClick={() => handleOpenPage("about")}
        >
          ՄԵՐ ՄԱՍԻՆ
        </div>
        <div
          className="header-menu-point"
          onClick={() => handleOpenPage("products")}
        >
          ԱՐՏԱԴՐԱՆՔ
        </div>
        <div
          className="header-menu-point"
          onClick={() => handleOpenPage("services")}
        >
          ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
        </div>
        <div
          className="header-menu-point"
          onClick={() => handleOpenPage("partners")}
        >
          ԳՈՐԾԸՆԿԵՐՆԵՐ
        </div>
        <div
          className="header-menu-point"
          onClick={() => handleOpenPage("feedback")}
        >
          ՀԵՏԱԴԱՐՁ ԿԱՊ
        </div>
        <div className="language-change-button">
          <img
            src={require("../img/Rectangle 3.png")}
            alt="logo"
            className="language-change-button-logo"
          />
          🢓
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
