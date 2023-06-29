import "../styles/Font.css";
import "../styles/ProductComponent.css";

function ProductComponent(props) {
  console.log(props);
  const { product, index } = props;
  console.log(product);
  return (
    <div className="product-container" key={index}>
      {product.sterile && (
        <>
          <img
            src={require("../img/Vector 40 (1).png")}
            alt="sterile"
            className="sterile-icons"
          />
          <p className="rotate-sterile-text"> ՍՏԵՐԻԼ</p>
        </>
      )}
      <img
        src={require("../img/" + product.image)}
        alt="product"
        className="product-img"
      />
      <p className="product-title">{product.name}</p>
      {product.type === "napkins" ? (
        <div className="size-info">
          <div className="size-cont">
            <img
              src={require("../img/Group 8.png")}
              alt="height"
              className="size-icons"
            />{" "}
            {product.height}{" "}
            <img
              src={require("../img/Group 11.png")}
              alt="width"
              className="size-icons"
            />{" "}
            {product.width}
          </div>
          <div className="size-info-cont">
            <img
              src={require("../img/Vector13.png")}
              alt="height"
              className="size-icons"
            />{" "}
            {product.layers}
          </div>
          <div className="size-info-cont">
            <img
              src={require("../img/Group.png")}
              alt="height"
              className="size-icons"
            />{" "}
            {product.quantity}
          </div>
        </div>
      ) : (
        <div className="size-info">
          {product.sizes.map((size, index) => (
            <div key={index} className="size-cont">
              <img
                src={require("../img/Group 8.png")}
                alt="height"
                className="size-icons"
              />{" "}
              {size.width}{" "}
              <img
                src={require("../img/Group 11.png")}
                alt="width"
                className="size-icons"
              />{" "}
              {size.height}
            </div>
          ))}
        </div>
      )}
      <button className="product-show-more-info-button">ՏԵՍՆԵԼ ԱՎԵԼԻՆ</button>
    </div>
  );
}

export default ProductComponent;
