import "../styles/Font.css";
import partners from "../store/partners.js";
import "../styles/ProductList.css";

function PartnersList() {
  return (
    <div className="product-list-component">
      <div className="product-list-container">
        {partners.map((partner, index) => (
          <div className="product-container" key={index}>
            <img
              src={require("../img/" + partner.image)}
              alt="partner"
              className="partner-img"
            />
          </div>
        ))}
      </div>
      <button className="look-more-button">ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
    </div>
  );
}

export default PartnersList;
