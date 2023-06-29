import "../styles/Font.css";
import "../styles/HomePage.css";
import FeedbackContainer from "./FeedbackContainer";
import PartnersList from "./PartnersList";
import ProductList from "./ProductList";

function HomePageComponent() {
  return (
    <div className="home-page-container">
      <div className="news-container">
        <div className="news-text-container">
          <p className="news-title">ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</p>
          <p className="news-text">
            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և
            ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
          </p>
          <button className="show-more-button">ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
        </div>
        <div className="news-image-container">
          <img
            src={require("../img/Rectangle 104 (1).png")}
            alt="news"
            className="news-container-photo"
          />
          <img
            src={require("../img/Ellipse 1.png")}
            alt="ellipse"
            className="news-container-ellipse"
          />
        </div>
      </div>
      <div className="home-page-title">ԱՐՏԱԴՐԱՆՔ</div>
      <ProductList productListFilter={"all"} />
      <div className="news-container">
        <div className="news-text-container">
          <p className="news-title">ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</p>
          <p className="news-text">
            Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
          </p>
          <button className="show-more-button">ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
        </div>
        <div className="news-image-container">
          <img
            src={require("../img/Rectangle 102.png")}
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

      <div className="home-page-title">ԳՈՐԾԸՆԿԵՐՆԵՐ</div>
      <PartnersList />
      <FeedbackContainer />
    </div>
  );
}

export default HomePageComponent;
