import React, { useState } from "react";
import "../styles/Font.css";
import products from "../store/products.js";
import ProductComponent from "./ProductComponent";
import "../styles/ProductList.css";

function ProductList(props) {
  const { productListFilter } = props;
  const [displayCount, setDisplayCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  let sortedProducts = [];
  if (productListFilter === "all") {
    sortedProducts = products;
  } else {
    sortedProducts = products.filter(
      (product) => product.type === productListFilter
    );
  }

  const handleShowAllProducts = () => {
    if (showAll) {
      setDisplayCount(6);
    } else {
      setDisplayCount(sortedProducts.length);
    }
    setShowAll(!showAll);
  };

  const displayedProducts = sortedProducts.slice(0, displayCount);

  return (
    <div className="product-list-component">
      <div className="product-list-container">
        {displayedProducts.map((product, index) => (
          <ProductComponent product={product} index={index} key={product.id} />
        ))}
      </div>
      {sortedProducts.length > 6 && (
        <button onClick={handleShowAllProducts} className="look-more-button">
          {showAll ? "ՓԱԿԵԼ ԱՄԲՈՂՋԸ" : "ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ"}
        </button>
      )}
    </div>
  );
}

export default ProductList;
